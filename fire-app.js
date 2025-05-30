/**
 * Fire App - THREE.js 기반 불 효과 시뮬레이션 메인 애플리케이션
 */

class FireApp {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.fire = null;
        this.logs = null;
        this.fireGroup = null; // 불과 장작을 묶는 그룹
        this.clock = new THREE.Clock();
        
        // 밤하늘 관련 변수 추가
        this.bgCanvas = null;
        this.bgCtx = null;
        this.stars = [];
        this.isSkyEnabled = false;
        
        this.init();
    }

    init() {
        this.createBackgroundCanvas(); // 배경 캔버스 먼저 생성
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createLighting();
        this.loadFireTexture();
        this.setupEventListeners();
        this.animate();
    }

    // 배경 캔버스 생성 (밤하늘용)
    createBackgroundCanvas() {
        this.bgCanvas = document.createElement('canvas');
        this.bgCanvas.id = 'bgCanvas';
        this.bgCanvas.style.position = 'fixed';
        this.bgCanvas.style.top = '0';
        this.bgCanvas.style.left = '0';
        this.bgCanvas.style.width = '100%';
        this.bgCanvas.style.height = '100%';
        this.bgCanvas.style.zIndex = '0';
        this.bgCanvas.style.pointerEvents = 'none';
        
        this.bgCtx = this.bgCanvas.getContext('2d');
        document.body.appendChild(this.bgCanvas);
        
        this.generateStars();
        this.updateBackgroundCanvas();
        
        console.log('Background canvas created');
    }

    // 별 생성
    generateStars() {
        this.stars = [];
        const numStars = 200;
        
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 1.5 + 0.5,
                baseAlpha: Math.random() * 0.8 + 0.2,
                twinkleFreq: Math.random() * 2 + 1,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    // 배경 캔버스 업데이트 (별과 그라디언트 그리기)
    updateBackgroundCanvas() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.bgCanvas.width = width;
        this.bgCanvas.height = height;
        
        // 캔버스 초기화
        this.bgCtx.clearRect(0, 0, width, height);
        
        if (this.isSkyEnabled) {
            // 밤하늘 그라디언트
            const skyGradient = this.bgCtx.createLinearGradient(0, 0, 0, height);
            skyGradient.addColorStop(0, '#0b1a34');
            skyGradient.addColorStop(1, '#000007');
            this.bgCtx.fillStyle = skyGradient;
            this.bgCtx.fillRect(0, 0, width, height);
            
            // 별 그리기
            const time = performance.now() / 1000;
            this.stars.forEach(star => {
                const flicker = 0.5 + 0.5 * Math.sin(star.twinkleFreq * time + star.twinklePhase);
                const alpha = star.baseAlpha * flicker;
                
                this.bgCtx.beginPath();
                this.bgCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                this.bgCtx.fillStyle = `rgba(255,255,255,${alpha})`;
                this.bgCtx.fill();
            });
        }
    }

    createScene() {
        this.scene = new THREE.Scene();
        console.log('Scene created');
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        this.camera.position.set(0, 0, 5);
        console.log('Camera created');
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0); // 투명하게 설정
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        // Canvas 스타일 설정 (배경 캔버스 위에 배치)
        this.renderer.domElement.style.position = 'fixed';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.zIndex = '1';
        this.renderer.domElement.style.pointerEvents = 'auto';
        
        // Canvas를 body에 추가
        document.body.appendChild(this.renderer.domElement);
        console.log('Renderer created and canvas added to DOM');
    }

    createLighting() {
        // 환경광 추가
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        this.scene.add(ambientLight);
        
        // 포인트 라이트 추가 (불꽃 효과 강화)
        const pointLight = new THREE.PointLight(0xff4400, 1, 100);
        pointLight.position.set(0, 0, 2);
        this.scene.add(pointLight);
        
        console.log('Lighting created');
    }

    loadFireTexture() {
        const textureLoader = new THREE.TextureLoader();
        
        // 불과 장작을 담을 그룹 생성
        this.fireGroup = new THREE.Group();
        this.scene.add(this.fireGroup);
        
        // 불 텍스처와 장작 텍스처를 모두 로드
        Promise.all([
            new Promise((resolve, reject) => {
                textureLoader.load(
                    'images/fire.png',
                    resolve,
                    undefined,
                    reject
                );
            }),
            new Promise((resolve, reject) => {
                textureLoader.load(
                    'images/logs.png',
                    resolve,
                    undefined,
                    reject
                );
            })
        ]).then(([fireTexture, logsTexture]) => {
            console.log('Both textures loaded successfully');
            this.createLogs(logsTexture);
            this.createFire(fireTexture);
        }).catch((error) => {
            console.error('Error loading textures:', error);
            // 텍스처 로딩 실패 시 기본 텍스처로 대체
            this.createFire(null);
        });
    }

    createLogs(logsTexture) {
        try {
            // 장작 geometry와 material 생성 (최적화된 크기)
            const logsGeometry = new THREE.PlaneGeometry(2.5, 2.5);
            const logsMaterial = new THREE.MeshBasicMaterial({
                map: logsTexture,
                transparent: true,
                alphaTest: 0.1
            });

            // 장작 메쉬 생성
            this.logs = new THREE.Mesh(logsGeometry, logsMaterial);
            
            // 최적화된 장작 위치와 크기 설정
            this.logs.scale.set(0.44, 0.44, 0.44);
            this.logs.position.set(0, -0.4, -0.15);
            this.logs.rotation.x = -0.05;
            
            // 그룹에 추가
            this.fireGroup.add(this.logs);
            console.log('Logs created and added to fire group');
        } catch (error) {
            console.error('Error creating logs:', error);
        }
    }

    createFire(texture) {
        try {
            // Fire 객체 생성
            this.fire = new THREE.Fire(texture, new THREE.Color().setRGB(255/255, 142/255, 211/255));
            
            // 디버깅: Fire 객체의 uniform들 확인
            console.log('Fire object created, available uniforms:', Object.keys(this.fire.material.uniforms));
            console.log('All uniforms:', this.fire.material.uniforms);
            
            // 그룹에 추가
            this.fireGroup.add(this.fire);
            
            // FireControls에 Fire 객체 전달
            if (window.fireControls) {
                window.fireControls.setFire(this.fire);
            }
            
            console.log('Fire object created and added to fire group');
        } catch (error) {
            console.error('Error creating fire object:', error);
        }
    }

    setupEventListeners() {
        // 윈도우 리사이즈 이벤트
        window.addEventListener('resize', () => {
            this.onWindowResize();
        }, false);

        // 키보드 이벤트 (선택사항)
        window.addEventListener('keydown', (event) => {
            this.onKeyDown(event);
        }, false);
    }

    onWindowResize() {
        // 카메라 종횡비 업데이트
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        
        // 렌더러 크기 업데이트
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // 배경 캔버스 크기 업데이트
        this.generateStars(); // 별 위치 재생성
        this.updateBackgroundCanvas();
        
        console.log('Window resized');
    }

    onKeyDown(event) {
        switch (event.code) {
            case 'KeyH':
                // H 키로 컨트롤 패널 토글
                const controls = document.getElementById('controls');
                controls.style.display = controls.style.display === 'none' ? 'block' : 'none';
                break;
            case 'KeyR':
                // R 키로 리셋
                if (window.fireControls) {
                    window.fireControls.resetToDefaults();
                }
                break;
            case 'Space':
                // 스페이스바로 애니메이션 일시정지/재생 (선택사항)
                event.preventDefault();
                break;
        }
    }

    updateCamera() {
        if (!window.fireControls) return;
        
        const rotationSpeed = window.fireControls.getRotationSpeed();
        
        if (rotationSpeed > 0) {
            const time = this.clock.getElapsedTime();
            this.camera.position.x = Math.cos(time * rotationSpeed) * 5;
            this.camera.position.z = Math.sin(time * rotationSpeed) * 5;
            this.camera.lookAt(this.scene.position);
        }
    }

    animate() {
        requestAnimationFrame(() => {
            this.animate();
        });

        // 배경 업데이트 (별 깜빡임 애니메이션)
        if (this.isSkyEnabled) {
            this.updateBackgroundCanvas();
        }

        // 카메라 업데이트
        this.updateCamera();

        // Fire 애니메이션 업데이트
        if (this.fire) {
            const time = this.clock.getElapsedTime();
            this.fire.update(time);
        }

        // 렌더링
        this.renderer.render(this.scene, this.camera);
    }

    // 공개 메서드들
    getFire() {
        return this.fire;
    }

    getLogs() {
        return this.logs;
    }

    getFireGroup() {
        return this.fireGroup;
    }

    getScene() {
        return this.scene;
    }

    getCamera() {
        return this.camera;
    }

    getRenderer() {
        return this.renderer;
    }

    // 밤하늘 토글 메서드
    toggleNightSky(enabled) {
        this.isSkyEnabled = enabled;
        this.updateBackgroundCanvas();
        console.log('Night sky:', enabled ? 'enabled' : 'disabled');
    }

    // 밤하늘 상태 반환
    getNightSkyEnabled() {
        return this.isSkyEnabled;
    }
}

// DOM이 로드된 후 애플리케이션 시작
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting Fire App...');
    window.fireApp = new FireApp();
});

// 페이지가 완전히 로드된 후에도 실행 (DOMContentLoaded가 실행되지 않은 경우를 대비)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.fireApp) {
            console.log('Starting Fire App from readyState check...');
            window.fireApp = new FireApp();
        }
    });
} else {
    // 이미 로드된 경우 즉시 실행
    console.log('Document already loaded, starting Fire App immediately...');
    window.fireApp = new FireApp();
} 