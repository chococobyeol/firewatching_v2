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
        
        // 배경 이미지 관련 변수 추가
        this.bgImageCanvas = null;
        this.bgImageCtx = null;
        this.backgroundImage = null;
        this.isBgImageEnabled = false;
        
        // 점화 시스템 (최소한만)
        this.isFireLit = false;
        this.ignitionAudio = null;
        
        this.init();
    }

    init() {
        this.createBackgroundCanvas(); // 배경 캔버스 먼저 생성
        this.createBackgroundImageCanvas(); // 배경 이미지 캔버스 생성
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createLighting();
        this.loadFireTexture();
        this.loadBackgroundImage(); // 배경 이미지 로드
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

    // 배경 이미지 캔버스 생성
    createBackgroundImageCanvas() {
        this.bgImageCanvas = document.createElement('canvas');
        this.bgImageCanvas.id = 'bgImageCanvas';
        this.bgImageCanvas.style.position = 'fixed';
        this.bgImageCanvas.style.top = '0';
        this.bgImageCanvas.style.left = '0';
        this.bgImageCanvas.style.width = '100%';
        this.bgImageCanvas.style.height = '100%';
        this.bgImageCanvas.style.zIndex = '1';
        this.bgImageCanvas.style.pointerEvents = 'none';
        
        this.bgImageCtx = this.bgImageCanvas.getContext('2d');
        document.body.appendChild(this.bgImageCanvas);
        
        console.log('Background image canvas created');
    }

    // 배경 이미지 로드
    loadBackgroundImage() {
        this.backgroundImage = new Image();
        this.backgroundImage.onload = () => {
            console.log('Background image loaded');
            this.updateBackgroundImageCanvas();
        };
        this.backgroundImage.onerror = () => {
            console.warn('Background image failed to load');
        };
        this.backgroundImage.src = 'images/background.png';
    }

    // 배경 이미지 캔버스 업데이트
    updateBackgroundImageCanvas() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.bgImageCanvas.width = width;
        this.bgImageCanvas.height = height;
        
        // 캔버스 초기화
        this.bgImageCtx.clearRect(0, 0, width, height);
        
        if (this.isBgImageEnabled && this.backgroundImage && this.backgroundImage.complete) {
            // 이미지를 화면에 맞게 조정하여 그리기
            const imgAspect = this.backgroundImage.width / this.backgroundImage.height;
            const screenAspect = width / height;
            
            let drawWidth, drawHeight, drawX, drawY;
            
            if (imgAspect > screenAspect) {
                // 이미지가 더 넓음 - 높이에 맞춤
                drawHeight = height;
                drawWidth = height * imgAspect;
                drawX = (width - drawWidth) / 2;
                drawY = 0;
            } else {
                // 이미지가 더 높음 - 너비에 맞춤
                drawWidth = width;
                drawHeight = width / imgAspect;
                drawX = 0;
                drawY = (height - drawHeight) / 2;
            }
            
            this.bgImageCtx.drawImage(this.backgroundImage, drawX, drawY, drawWidth, drawHeight);
        }
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
        this.renderer.domElement.style.zIndex = '2'; // 배경 이미지 위에 배치
        this.renderer.domElement.style.pointerEvents = 'auto';
        this.renderer.domElement.style.cursor = 'pointer'; // 클릭 가능 표시
        
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
            
            // 초기 상태: 불꽃 꺼진 상태 (투명도만 0으로 설정)
            if (this.fire.material.uniforms.opacity) {
                this.fire.material.uniforms.opacity.value = 0.0; // 투명하게
            }
            
            // 점화 오디오 설정
            try {
                this.ignitionAudio = new Audio('sounds/fire_ignition.wav');
                this.ignitionAudio.volume = 0.6;
            } catch (e) {
                console.warn('Could not load ignition audio:', e);
            }
            
            // 그룹에 추가
            this.fireGroup.add(this.fire);
            
            // FireControls에 Fire 객체 전달
            if (window.fireControls) {
                window.fireControls.setFire(this.fire);
            }
            
            console.log('Fire object created in extinguished state');
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
        
        // 클릭 이벤트 (불꽃 점화)
        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.addEventListener('click', (event) => {
                this.handleClick(event);
            }, false);
        }
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
        
        // 배경 이미지 캔버스 크기 업데이트
        this.updateBackgroundImageCanvas();
        
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

    // 배경 이미지 토글 메서드
    toggleBackgroundImage(enabled) {
        this.isBgImageEnabled = enabled;
        this.updateBackgroundImageCanvas();
        console.log('Background image:', enabled ? 'enabled' : 'disabled');
    }

    // 밤하늘 상태 반환
    getNightSkyEnabled() {
        return this.isSkyEnabled;
    }

    // 배경 이미지 상태 반환
    getBackgroundImageEnabled() {
        return this.isBgImageEnabled;
    }

    // 클릭 이벤트 처리
    handleClick(event) {
        // 점화 사운드 재생
        if (this.ignitionAudio) {
            this.ignitionAudio.currentTime = 0;
            this.ignitionAudio.play().catch(e => {
                console.log('Audio playback failed:', e);
            });
        }

        if (!this.isFireLit) {
            // 불이 꺼져있을 때 클릭
            this.igniteFireAnimation();
        } else {
            // 불이 켜져있을 때 클릭
            this.flareFireAnimation();
        }
    }

    // 불 점화 애니메이션
    igniteFireAnimation() {
        this.isFireLit = true;
        
        if (!this.fire || !window.fireControls) return;
        
        const targetValues = window.fireControls.currentValues;
        
        // opacity는 바로 설정치로 변경
        if (this.fire.material.uniforms.opacity) {
            this.fire.material.uniforms.opacity.value = targetValues.opacity;
        }
        
        // magnitude만 애니메이션: (설정치-0.7) → 설정치 (0.3초)
        const animationDuration = 300; // 0.3초
        
        const startTime = performance.now();
        const targetMagnitude = targetValues.magnitude;
        const tempMagnitude = Math.max(0.1, targetMagnitude - 0.7);
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / animationDuration, 1.0);
            
            // 부드러운 이징 적용
            const easeProgress = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            // magnitude: (설정치-0.7) → 설정치
            const currentMagnitude = tempMagnitude + (targetMagnitude - tempMagnitude) * easeProgress;
            if (this.fire.material.uniforms.magnitude) {
                this.fire.material.uniforms.magnitude.value = currentMagnitude;
            }
            
            if (progress < 1.0) {
                requestAnimationFrame(animate);
            } else {
                // 완료: 설정치 적용
                if (window.fireControls) {
                    window.fireControls.applyCurrentValues();
                }
            }
        };
        
        // 애니메이션 속도: 0.05초만에 설정치+1로 갔다가 0.05초만에 복귀
        this.animateSpeed(targetValues.animationSpeed);
        
        // 밝기 강화: 0.1초만에 설정치+1로 갔다가 0.2초동안 복귀
        this.animateBrightness(targetValues.toonBrightness);
        
        requestAnimationFrame(animate);
    }

    // 불꽃 플레어 애니메이션
    flareFireAnimation() {
        if (!this.fire || !window.fireControls) return;
        
        const targetValues = window.fireControls.currentValues;
        
        // magnitude만 살짝 변화 (설정치 → 설정치-0.7 → 설정치) (0.3초)
        const animationDuration = 300; // 0.3초
        
        const startTime = performance.now();
        const currentMagnitude = targetValues.magnitude;
        const tempMagnitude = Math.max(0.1, currentMagnitude - 0.7);
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / animationDuration, 1.0);
            
            // 사인파 형태의 플레어 (내려갔다 올라옴)
            const flareProgress = Math.sin(progress * Math.PI);
            const magnitude = currentMagnitude + (tempMagnitude - currentMagnitude) * flareProgress;
            
            if (this.fire.material.uniforms.magnitude) {
                this.fire.material.uniforms.magnitude.value = magnitude;
            }
            
            if (progress < 1.0) {
                requestAnimationFrame(animate);
            } else {
                // 완료: 설정치로 복원
                if (this.fire.material.uniforms.magnitude) {
                    this.fire.material.uniforms.magnitude.value = currentMagnitude;
                }
            }
        };
        
        // 애니메이션 속도: 0.05초만에 설정치+1로 갔다가 0.05초만에 복귀
        this.animateSpeed(targetValues.animationSpeed);
        
        // 밝기 강화: 0.1초만에 설정치+1로 갔다가 0.2초동안 복귀
        this.animateBrightness(targetValues.toonBrightness);
        
        requestAnimationFrame(animate);
    }

    // 애니메이션 속도 효과
    animateSpeed(targetSpeed) {
        if (!this.fire) return;
        
        const tempSpeed = targetSpeed + 1;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            
            if (elapsed < 50) {
                // 0.05초동안 +1로 증가
                const progress = elapsed / 50;
                const speed = targetSpeed + (tempSpeed - targetSpeed) * progress;
                
                if (this.fire.material.uniforms.noiseScale) {
                    this.fire.material.uniforms.noiseScale.value.w = speed;
                }
                
                requestAnimationFrame(animate);
            } else if (elapsed < 100) {
                // 0.05초동안 원래대로 복귀
                const progress = (elapsed - 50) / 50;
                const speed = tempSpeed + (targetSpeed - tempSpeed) * progress;
                
                if (this.fire.material.uniforms.noiseScale) {
                    this.fire.material.uniforms.noiseScale.value.w = speed;
                }
                
                requestAnimationFrame(animate);
            } else {
                // 완료
                if (this.fire.material.uniforms.noiseScale) {
                    this.fire.material.uniforms.noiseScale.value.w = targetSpeed;
                }
            }
        };
        
        requestAnimationFrame(animate);
    }

    // 밝기 강화 효과
    animateBrightness(targetBrightness) {
        if (!this.fire) return;
        
        const tempBrightness = targetBrightness + 1;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            
            if (elapsed < 100) {
                // 0.1초동안 +1로 증가
                const progress = elapsed / 100;
                const brightness = targetBrightness + (tempBrightness - targetBrightness) * progress;
                
                if (this.fire.material.uniforms.toonBrightness) {
                    this.fire.material.uniforms.toonBrightness.value = brightness;
                }
                
                requestAnimationFrame(animate);
            } else if (elapsed < 300) {
                // 0.2초동안 원래대로 복귀
                const progress = (elapsed - 100) / 200;
                const brightness = tempBrightness + (targetBrightness - tempBrightness) * progress;
                
                if (this.fire.material.uniforms.toonBrightness) {
                    this.fire.material.uniforms.toonBrightness.value = brightness;
                }
                
                requestAnimationFrame(animate);
            } else {
                // 완료
                if (this.fire.material.uniforms.toonBrightness) {
                    this.fire.material.uniforms.toonBrightness.value = targetBrightness;
                }
            }
        };
        
        requestAnimationFrame(animate);
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