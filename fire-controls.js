/**
 * Fire Controls - 불 효과 파라미터 조정을 위한 모던 사이드바 컨트롤 패널
 */

class FireControls {
    constructor() {
        this.fire = null;
        this.rotationSpeed = 0;
        
        // 기본값
        this.defaultValues = {
            scale: 1.5,
            positionX: 0,
            positionY: 0,
            nightSky: false,
            magnitude: 1.6,
            lacunarity: 2.0,
            gain: 0.5,
            baseWidth: 0.1,
            noiseScaleX: 1,
            noiseScaleY: 2,
            noiseScaleZ: 1,
            colorR: 255,
            colorG: 142,
            colorB: 211,
            fireIntensity: 1.0,
            fireScale: 1.1,
            animationSpeed: 1.0,
            toonSteps: 4.0,
            toonBrightness: 1.9,
            opacity: 0.7
        };
        
        // 현재 설정값
        this.currentValues = { ...this.defaultValues };
        
        this.init();
    }

    init() {
        this.loadSettings();
        this.createModernUI();
        this.setupEventListeners();
    }

    // 로컬스토리지에서 설정 불러오기
    loadSettings() {
        try {
            const saved = localStorage.getItem('fireSettings');
            if (saved) {
                const settings = JSON.parse(saved);
                this.currentValues = { ...this.defaultValues, ...settings };
            }
        } catch (e) {
            console.log('설정 불러오기 실패:', e);
        }
    }

    // 로컬스토리지에 설정 저장
    saveSettings() {
        try {
            localStorage.setItem('fireSettings', JSON.stringify(this.currentValues));
        } catch (e) {
            console.log('설정 저장 실패:', e);
        }
    }

    createModernUI() {
        // 기존 UI 제거
        const oldControls = document.getElementById('controls');
        const oldToggle = document.getElementById('toggle-controls');
        if (oldControls) oldControls.remove();
        if (oldToggle) oldToggle.remove();

        // 모던 설정 버튼 생성
        this.createSettingsButton();
        
        // 모던 사이드바 생성
        this.createSidebar();
    }

    createSettingsButton() {
        const settingsBtn = document.createElement('button');
        settingsBtn.id = 'settingsBtn';
        settingsBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>';
        
        Object.assign(settingsBtn.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: '44px',
            height: '44px',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            zIndex: '100',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, background-color 0.3s'
        });
        
        // 호버 효과
        settingsBtn.addEventListener('mouseover', () => {
            settingsBtn.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
            settingsBtn.style.transform = 'scale(1.1)';
        });
        settingsBtn.addEventListener('mouseout', () => {
            settingsBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            settingsBtn.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(settingsBtn);
    }

    createSidebar() {
        const sidebar = document.createElement('div');
        sidebar.id = 'settingsSidebar';
        
        Object.assign(sidebar.style, {
            position: 'fixed',
            top: '0',
            right: '-400px',
            width: '320px',
            height: '100%',
            background: 'rgba(20, 20, 20, 0.95)',
            padding: '20px',
            boxShadow: '-2px 0 15px rgba(0, 0, 0, 0.5)',
            transition: 'right 0.3s ease',
            zIndex: '101',
            backdropFilter: 'blur(10px)',
            fontFamily: "'Arial', sans-serif",
            overflowY: 'auto'
        });

        // 사이드바 내용
        sidebar.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.2);padding-bottom:16px;">
                <h3 style="color:#fff;margin:0;font-size:18px;font-weight:600;">불멍 설정</h3>
                <button id="closeSettings" style="background:none;border:none;color:#fff;cursor:pointer;font-size:24px;padding:0;">&times;</button>
            </div>
            
            <div style="max-height:calc(100vh - 160px);overflow-y:auto;padding-right:5px;">
                <div style="display:flex;flex-direction:column;gap:20px;">
                    
                    <!-- 기본 설정 -->
                    <div class="setting-section">
                        <h4 style="color:#ff6600;margin:0 0 12px 0;font-size:14px;border-bottom:1px solid rgba(255,102,0,0.3);padding-bottom:6px;">기본 설정</h4>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">크기 (Scale)</label>
                            <input id="scale" type="range" min="0.5" max="5" step="0.1" value="${this.currentValues.scale}" class="modern-slider">
                            <span id="scale-value" class="value-display">${this.currentValues.scale}</span>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">애니메이션 속도</label>
                            <input id="animationSpeed" type="range" min="0.1" max="3" step="0.1" value="${this.currentValues.animationSpeed}" class="modern-slider">
                            <span id="animationSpeed-value" class="value-display">${this.currentValues.animationSpeed}</span>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">X 위치</label>
                            <input id="positionX" type="range" min="-800" max="800" step="10" value="${this.currentValues.positionX}" class="modern-slider">
                            <span id="positionX-value" class="value-display">${this.currentValues.positionX}</span>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">Y 위치</label>
                            <input id="positionY" type="range" min="-600" max="600" step="10" value="${this.currentValues.positionY}" class="modern-slider">
                            <span id="positionY-value" class="value-display">${this.currentValues.positionY}</span>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">🌌 밤하늘 배경</label>
                            <label class="toggle-switch">
                                <input id="nightSky" type="checkbox" ${this.currentValues.nightSky ? 'checked' : ''}>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>

                    <!-- 고급 설정 -->
                    <div class="advanced-settings">
                        <div class="accordion-header" id="advancedToggle" style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;cursor:pointer;border-bottom:1px solid rgba(255,102,0,0.3);margin-bottom:12px;">
                            <h4 style="color:#ff6600;margin:0;font-size:14px;">고급 설정</h4>
                            <span id="advancedArrow" style="color:#ff6600;font-size:16px;transition:transform 0.3s;">▼</span>
                        </div>
                        
                        <div id="advancedContent" style="display:none;gap:20px;flex-direction:column;">
                            
                            <!-- 불 모양 조정 -->
                            <div class="setting-subsection">
                                <h5 style="color:#ffaa44;margin:0 0 12px 0;font-size:13px;opacity:0.9;">불 모양 조정</h5>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">불꽃 크기</label>
                                    <input id="fireScale" type="range" min="0.8" max="1.1" step="0.005" value="${this.currentValues.fireScale}" class="modern-slider">
                                    <span id="fireScale-value" class="value-display">${this.currentValues.fireScale}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">불꽃 강도</label>
                                    <input id="magnitude" type="range" min="0.1" max="3" step="0.1" value="${this.currentValues.magnitude}" class="modern-slider">
                                    <span id="magnitude-value" class="value-display">${this.currentValues.magnitude}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">Lacunarity</label>
                                    <input id="lacunarity" type="range" min="1" max="4" step="0.1" value="${this.currentValues.lacunarity}" class="modern-slider">
                                    <span id="lacunarity-value" class="value-display">${this.currentValues.lacunarity}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">Gain</label>
                                    <input id="gain" type="range" min="0.1" max="1" step="0.05" value="${this.currentValues.gain}" class="modern-slider">
                                    <span id="gain-value" class="value-display">${this.currentValues.gain}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">아래쪽 너비</label>
                                    <input id="baseWidth" type="range" min="0.1" max="1" step="0.05" value="${this.currentValues.baseWidth}" class="modern-slider">
                                    <span id="baseWidth-value" class="value-display">${this.currentValues.baseWidth}</span>
                                </div>
                            </div>

                            <!-- 노이즈 스케일 -->
                            <div class="setting-subsection">
                                <h5 style="color:#ffaa44;margin:0 0 12px 0;font-size:13px;opacity:0.9;">노이즈 스케일</h5>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">X 스케일</label>
                                    <input id="noiseScaleX" type="range" min="0.1" max="3" step="0.1" value="${this.currentValues.noiseScaleX}" class="modern-slider">
                                    <span id="noiseScaleX-value" class="value-display">${this.currentValues.noiseScaleX}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">Y 스케일</label>
                                    <input id="noiseScaleY" type="range" min="0.1" max="5" step="0.1" value="${this.currentValues.noiseScaleY}" class="modern-slider">
                                    <span id="noiseScaleY-value" class="value-display">${this.currentValues.noiseScaleY}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">Z 스케일</label>
                                    <input id="noiseScaleZ" type="range" min="0.1" max="3" step="0.1" value="${this.currentValues.noiseScaleZ}" class="modern-slider">
                                    <span id="noiseScaleZ-value" class="value-display">${this.currentValues.noiseScaleZ}</span>
                                </div>
                            </div>

                            <!-- 색상 -->
                            <div class="setting-subsection">
                                <h5 style="color:#ffaa44;margin:0 0 12px 0;font-size:13px;opacity:0.9;">색상</h5>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">빨강 (Red)</label>
                                    <input id="colorR" type="range" min="0" max="255" step="1" value="${this.currentValues.colorR}" class="modern-slider">
                                    <span id="colorR-value" class="value-display">${this.currentValues.colorR}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">초록 (Green)</label>
                                    <input id="colorG" type="range" min="0" max="255" step="1" value="${this.currentValues.colorG}" class="modern-slider">
                                    <span id="colorG-value" class="value-display">${this.currentValues.colorG}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">파랑 (Blue)</label>
                                    <input id="colorB" type="range" min="0" max="255" step="1" value="${this.currentValues.colorB}" class="modern-slider">
                                    <span id="colorB-value" class="value-display">${this.currentValues.colorB}</span>
                                </div>
                            </div>

                            <!-- 카툰 스타일 -->
                            <div class="setting-subsection">
                                <h5 style="color:#ffaa44;margin:0 0 12px 0;font-size:13px;opacity:0.9;">카툰 스타일</h5>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">색상 단계 수</label>
                                    <input id="toonSteps" type="range" min="2" max="8" step="1" value="${this.currentValues.toonSteps}" class="modern-slider">
                                    <span id="toonSteps-value" class="value-display">${this.currentValues.toonSteps}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">밝기 강화</label>
                                    <input id="toonBrightness" type="range" min="0.5" max="2.0" step="0.1" value="${this.currentValues.toonBrightness}" class="modern-slider">
                                    <span id="toonBrightness-value" class="value-display">${this.currentValues.toonBrightness}</span>
                                </div>
                                
                                <div class="setting-item">
                                    <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">투명도</label>
                                    <input id="opacity" type="range" min="0.5" max="1.0" step="0.05" value="${this.currentValues.opacity}" class="modern-slider">
                                    <span id="opacity-value" class="value-display">${this.currentValues.opacity}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 설정 초기화 -->
                    <div style="margin-top:20px;border-top:1px solid rgba(255,255,255,0.2);padding-top:16px;">
                        <button id="resetSettings" style="width:100%;padding:12px;background-color:rgba(255,80,80,0.2);color:rgba(255,80,80,0.9);border:none;border-radius:6px;cursor:pointer;font-weight:500;font-size:14px;transition:all 0.2s;">
                            설정 초기화
                        </button>
                    </div>
                </div>
            </div>
            
            <div style="position:absolute;bottom:20px;left:20px;right:20px;text-align:center;">
                <div style="color:rgba(255,255,255,0.5);font-size:12px;">불멍 시뮬레이터 v2.0</div>
            </div>
        `;
        
        document.body.appendChild(sidebar);
    }

    setupEventListeners() {
        // 설정 버튼 클릭
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // 닫기 버튼 클릭
        document.getElementById('closeSettings').addEventListener('click', () => {
            this.closeSidebar();
        });

        // 고급 설정 아코디언 토글
        document.getElementById('advancedToggle').addEventListener('click', () => {
            const content = document.getElementById('advancedContent');
            const arrow = document.getElementById('advancedArrow');
            
            if (content.style.display === 'none') {
                content.style.display = 'flex';
                arrow.style.transform = 'rotate(180deg)';
                arrow.textContent = '▲';
            } else {
                content.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
                arrow.textContent = '▼';
            }
        });

        // 키보드 단축키
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyH') {
                this.toggleSidebar();
            } else if (event.code === 'KeyR') {
                this.resetToDefaults();
            }
        });

        // 모든 슬라이더와 토글에 이벤트 리스너 추가
        this.setupControls();

        // 초기화 버튼
        document.getElementById('resetSettings').addEventListener('click', () => {
            if (confirm('모든 설정을 초기화하시겠습니까?')) {
                this.resetToDefaults();
            }
        });

        // 초기화 버튼 호버 효과
        const resetBtn = document.getElementById('resetSettings');
        resetBtn.addEventListener('mouseover', () => {
            resetBtn.style.backgroundColor = 'rgba(255,80,80,0.3)';
            resetBtn.style.color = 'rgba(255,100,100,1)';
        });
        resetBtn.addEventListener('mouseout', () => {
            resetBtn.style.backgroundColor = 'rgba(255,80,80,0.2)';
            resetBtn.style.color = 'rgba(255,80,80,0.9)';
        });
    }

    setupControls() {
        if (!this.fire) return;

        // 기본 설정 컨트롤
        this.setupSlider('scale', (value) => {
            // 카메라 FOV 조절로 확대/축소 효과 (브라우저 줌과 같은 효과)
            if (window.fireApp && window.fireApp.camera) {
                const baseFOV = 75; // 기본 FOV
                const newFOV = baseFOV / value; // scale이 클수록 FOV 작아짐 (확대)
                window.fireApp.camera.fov = newFOV;
                window.fireApp.camera.updateProjectionMatrix();
            }
            
            this.currentValues.scale = value;
            this.saveSettings();
        });

        this.setupSlider('animationSpeed', (value) => {
            // 애니메이션 속도로 불꽃의 움직임을 조절
            this.fire.material.uniforms.noiseScale.value.w = value;
            this.currentValues.animationSpeed = value;
            this.saveSettings();
        });

        // 위치 조정 컨트롤 (CSS transform으로 캔버스 전체 이동)
        this.setupSlider('positionX', (value) => {
            this.updateCanvasPosition();
            this.currentValues.positionX = value;
            this.saveSettings();
        });

        this.setupSlider('positionY', (value) => {
            this.updateCanvasPosition();
            this.currentValues.positionY = value;
            this.saveSettings();
        });

        // 밤하늘 토글 컨트롤
        this.setupToggle('nightSky', (enabled) => {
            if (window.fireApp && window.fireApp.toggleNightSky) {
                window.fireApp.toggleNightSky(enabled);
            }
            this.currentValues.nightSky = enabled;
            this.saveSettings();
        });

        // 불 모양 조정 컨트롤
        this.setupSlider('fireScale', (value) => {
            if (this.fire) {
                this.fire.scale.set(value, value, value);
            }
            this.currentValues.fireScale = value;
            this.saveSettings();
        });

        this.setupSlider('magnitude', (value) => {
            this.fire.material.uniforms.magnitude.value = value;
            this.currentValues.magnitude = value;
            this.saveSettings();
        });

        this.setupSlider('lacunarity', (value) => {
            this.fire.material.uniforms.lacunarity.value = value;
            this.currentValues.lacunarity = value;
            this.saveSettings();
        });

        this.setupSlider('gain', (value) => {
            this.fire.material.uniforms.gain.value = value;
            this.currentValues.gain = value;
            this.saveSettings();
        });

        this.setupSlider('baseWidth', (value) => {
            this.fire.material.uniforms.baseWidth.value = value;
            this.currentValues.baseWidth = value;
            this.saveSettings();
        });

        // 노이즈 스케일 컨트롤
        this.setupSlider('noiseScaleX', (value) => {
            this.fire.material.uniforms.noiseScale.value.x = value;
            this.currentValues.noiseScaleX = value;
            this.saveSettings();
        });

        this.setupSlider('noiseScaleY', (value) => {
            this.fire.material.uniforms.noiseScale.value.y = value;
            this.currentValues.noiseScaleY = value;
            this.saveSettings();
        });

        this.setupSlider('noiseScaleZ', (value) => {
            this.fire.material.uniforms.noiseScale.value.z = value;
            this.currentValues.noiseScaleZ = value;
            this.saveSettings();
        });

        // 색상 컨트롤
        const updateColor = () => {
            const r = this.currentValues.colorR / 255;
            const g = this.currentValues.colorG / 255;
            const b = this.currentValues.colorB / 255;
            this.fire.material.uniforms.color.value.setRGB(r, g, b);
            this.saveSettings();
        };

        this.setupSlider('colorR', (value) => {
            this.currentValues.colorR = value;
            updateColor();
        });

        this.setupSlider('colorG', (value) => {
            this.currentValues.colorG = value;
            updateColor();
        });

        this.setupSlider('colorB', (value) => {
            this.currentValues.colorB = value;
            updateColor();
        });

        // 카메라 FOV 적용
        if (window.fireApp && window.fireApp.camera) {
            const baseFOV = 75;
            const newFOV = baseFOV / this.currentValues.scale;
            window.fireApp.camera.fov = newFOV;
            window.fireApp.camera.updateProjectionMatrix();
        }

        // 카툰 스타일 컨트롤
        this.setupSlider('toonSteps', (value) => {
            console.log('toonSteps changed to:', value);
            if (this.fire && this.fire.material && this.fire.material.uniforms.toonSteps) {
                this.fire.material.uniforms.toonSteps.value = value;
                console.log('toonSteps uniform updated:', this.fire.material.uniforms.toonSteps.value);
            } else {
                console.warn('Fire object or toonSteps uniform not found');
            }
            this.currentValues.toonSteps = value;
            this.saveSettings();
        });

        this.setupSlider('toonBrightness', (value) => {
            console.log('toonBrightness changed to:', value);
            if (this.fire && this.fire.material && this.fire.material.uniforms.toonBrightness) {
                this.fire.material.uniforms.toonBrightness.value = value;
                console.log('toonBrightness uniform updated:', this.fire.material.uniforms.toonBrightness.value);
            } else {
                console.warn('Fire object or toonBrightness uniform not found');
            }
            this.currentValues.toonBrightness = value;
            this.saveSettings();
        });

        this.setupSlider('opacity', (value) => {
            console.log('opacity changed to:', value);
            if (this.fire && this.fire.material && this.fire.material.uniforms.opacity) {
                this.fire.material.uniforms.opacity.value = value;
                console.log('opacity uniform updated:', this.fire.material.uniforms.opacity.value);
            } else {
                console.warn('Fire object or opacity uniform not found');
            }
            this.currentValues.opacity = value;
            this.saveSettings();
        });
    }

    setupSlider(id, callback) {
        const slider = document.getElementById(id);
        const valueSpan = document.getElementById(id + '-value');
        
        if (!slider || !valueSpan) {
            console.warn(`Slider or value span not found for id: ${id}`);
            return;
        }
        
        slider.addEventListener('input', () => {
            const value = parseFloat(slider.value);
            valueSpan.textContent = value.toFixed(2);
            callback(value);
        });
    }

    setupToggle(id, callback) {
        const toggle = document.getElementById(id);
        if (!toggle) {
            console.warn(`Toggle not found for id: ${id}`);
            return;
        }
        
        toggle.addEventListener('change', () => {
            const enabled = toggle.checked;
            callback(enabled);
        });
    }

    toggleSidebar() {
        const sidebar = document.getElementById('settingsSidebar');
        if (sidebar.style.right === '0px') {
            this.closeSidebar();
        } else {
            this.openSidebar();
        }
    }

    openSidebar() {
        const sidebar = document.getElementById('settingsSidebar');
        sidebar.style.right = '0px';
    }

    closeSidebar() {
        const sidebar = document.getElementById('settingsSidebar');
        sidebar.style.right = '-400px';
    }

    setFire(fire) {
        this.fire = fire;
        console.log('Fire object set, available uniforms:', Object.keys(this.fire.material.uniforms));
        console.log('toonSteps uniform exists:', !!this.fire.material.uniforms.toonSteps);
        console.log('toonBrightness uniform exists:', !!this.fire.material.uniforms.toonBrightness);
        this.setupControls();
        this.applyCurrentValues();
    }

    applyCurrentValues() {
        if (!this.fire) return;

        // 카메라 FOV 적용
        if (window.fireApp && window.fireApp.camera) {
            const baseFOV = 75;
            const newFOV = baseFOV / this.currentValues.scale;
            window.fireApp.camera.fov = newFOV;
            window.fireApp.camera.updateProjectionMatrix();
        }
        
        // 불꽃 크기 적용
        this.fire.scale.set(
            this.currentValues.fireScale,
            this.currentValues.fireScale,
            this.currentValues.fireScale
        );
        
        // 캔버스 위치 적용
        this.updateCanvasPosition();
        
        this.fire.material.uniforms.magnitude.value = this.currentValues.magnitude;
        this.fire.material.uniforms.lacunarity.value = this.currentValues.lacunarity;
        this.fire.material.uniforms.gain.value = this.currentValues.gain;
        this.fire.material.uniforms.baseWidth.value = this.currentValues.baseWidth;
        
        this.fire.material.uniforms.noiseScale.value.set(
            this.currentValues.noiseScaleX,
            this.currentValues.noiseScaleY,
            this.currentValues.noiseScaleZ,
            this.currentValues.animationSpeed
        );
        
        this.fire.material.uniforms.color.value.setRGB(
            this.currentValues.colorR / 255,
            this.currentValues.colorG / 255,
            this.currentValues.colorB / 255
        );

        // 카툰 스타일 설정 적용
        if (this.fire.material.uniforms.toonSteps) {
            this.fire.material.uniforms.toonSteps.value = this.currentValues.toonSteps;
            console.log('Initial toonSteps applied:', this.currentValues.toonSteps);
        }
        if (this.fire.material.uniforms.toonBrightness) {
            this.fire.material.uniforms.toonBrightness.value = this.currentValues.toonBrightness;
            console.log('Initial toonBrightness applied:', this.currentValues.toonBrightness);
        }
        if (this.fire.material.uniforms.opacity) {
            this.fire.material.uniforms.opacity.value = this.currentValues.opacity;
            console.log('Initial opacity applied:', this.currentValues.opacity);
        }

        // UI 업데이트
        this.updateAllDisplayValues();
        
        // 밤하늘 초기 상태 적용
        if (window.fireApp && window.fireApp.toggleNightSky) {
            window.fireApp.toggleNightSky(this.currentValues.nightSky);
        }
    }

    resetToDefaults() {
        this.currentValues = { ...this.defaultValues };
        
        // 슬라이더 값들을 기본값으로 리셋
        Object.keys(this.defaultValues).forEach(key => {
            const slider = document.getElementById(key);
            if (slider) {
                slider.value = this.defaultValues[key];
            }
        });

        // 실제 값들 적용
        this.applyCurrentValues();
        this.saveSettings();
    }

    updateAllDisplayValues() {
        Object.keys(this.currentValues).forEach(key => {
            const valueSpan = document.getElementById(key + '-value');
            if (valueSpan) {
                const value = this.currentValues[key];
                if (typeof value === 'number') {
                    valueSpan.textContent = value.toFixed(2);
                }
            }
            
            // 토글 상태 업데이트
            const toggle = document.getElementById(key);
            if (toggle && toggle.type === 'checkbox') {
                toggle.checked = this.currentValues[key];
            }
        });
    }

    getRotationSpeed() {
        return this.rotationSpeed;
    }

    // 컨트롤 패널 숨기기/보이기 (하위 호환성)
    toggleControls() {
        this.toggleSidebar();
    }

    updateCanvasPosition() {
        // CSS transform으로 전체 캔버스 이동
        if (window.fireApp && window.fireApp.renderer && window.fireApp.renderer.domElement) {
            const canvas = window.fireApp.renderer.domElement;
            const transformString = `translate(${this.currentValues.positionX}px, ${this.currentValues.positionY}px)`;
            canvas.style.transform = transformString;
        }
    }
}

// 전역 변수로 FireControls 인스턴스 생성
window.fireControls = new FireControls(); 