/**
 * Fire App - THREE.js 기반 불 효과 시뮬레이션 메인 애플리케이션
 */

class FireApp {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.fire = null;
        this.clock = new THREE.Clock();
        
        this.init();
    }

    init() {
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createLighting();
        this.loadFireTexture();
        this.setupEventListeners();
        this.animate();
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
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
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
        
        textureLoader.load(
            'images/fire.png',
            (texture) => {
                this.createFire(texture);
            },
            (progress) => {
                console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading fire texture:', error);
                // 텍스처 로딩 실패 시 기본 텍스처로 대체
                this.createFire(null);
            }
        );
    }

    createFire(texture) {
        try {
            // Fire 객체 생성
            this.fire = new THREE.Fire(texture);
            this.scene.add(this.fire);
            
            // FireControls에 Fire 객체 전달
            if (window.fireControls) {
                window.fireControls.setFire(this.fire);
            }
            
            console.log('Fire object created and added to scene');
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

    getScene() {
        return this.scene;
    }

    getCamera() {
        return this.camera;
    }

    getRenderer() {
        return this.renderer;
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