/**
 * Fire Controls - 불 효과 파라미터 조정을 위한 모던 사이드바 컨트롤 패널
 */

class FireControls {
    constructor() {
        this.fire = null;
        this.rotationSpeed = 0;
        
        // 기본값
        this.defaultValues = {
            scale: 2,
            magnitude: 1.3,
            lacunarity: 2.0,
            gain: 0.5,
            baseWidth: 0.15,
            noiseScaleX: 1,
            noiseScaleY: 2,
            noiseScaleZ: 1,
            colorR: 238,
            colorG: 238,
            colorB: 238,
            fireIntensity: 1.0,
            animationSpeed: 0.75,
            // 임시 장작 조절 값들
            logsScale: 0.44,
            logsX: 0,
            logsY: -0.4,
            logsZ: -0.15,
            logsRotationX: -0.05
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
                    </div>

                    <!-- 임시 장작 조절 -->
                    <div class="setting-section">
                        <h4 style="color:#ffcc00;margin:0 0 12px 0;font-size:14px;border-bottom:1px solid rgba(255,204,0,0.3);padding-bottom:6px;">🔧 임시 장작 조절</h4>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">장작 크기</label>
                            <div style="display:flex;gap:8px;align-items:center;">
                                <input id="logsScale" type="range" min="0.2" max="3" step="0.01" value="${this.currentValues.logsScale}" class="modern-slider" style="flex:1;">
                                <input id="logsScale-input" type="number" min="0.2" max="3" step="0.01" value="${this.currentValues.logsScale}" style="width:60px;padding:4px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#fff;font-size:12px;">
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">장작 X 위치</label>
                            <div style="display:flex;gap:8px;align-items:center;">
                                <input id="logsX" type="range" min="-2" max="2" step="0.01" value="${this.currentValues.logsX}" class="modern-slider" style="flex:1;">
                                <input id="logsX-input" type="number" min="-2" max="2" step="0.01" value="${this.currentValues.logsX}" style="width:60px;padding:4px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#fff;font-size:12px;">
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">장작 Y 위치</label>
                            <div style="display:flex;gap:8px;align-items:center;">
                                <input id="logsY" type="range" min="-2" max="1" step="0.01" value="${this.currentValues.logsY}" class="modern-slider" style="flex:1;">
                                <input id="logsY-input" type="number" min="-2" max="1" step="0.01" value="${this.currentValues.logsY}" style="width:60px;padding:4px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#fff;font-size:12px;">
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">장작 Z 위치 (앞뒤)</label>
                            <div style="display:flex;gap:8px;align-items:center;">
                                <input id="logsZ" type="range" min="-1" max="1" step="0.01" value="${this.currentValues.logsZ}" class="modern-slider" style="flex:1;">
                                <input id="logsZ-input" type="number" min="-1" max="1" step="0.01" value="${this.currentValues.logsZ}" style="width:60px;padding:4px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#fff;font-size:12px;">
                            </div>
                        </div>
                        
                        <div class="setting-item">
                            <label style="color:#fff;margin-bottom:6px;display:block;font-size:13px;">장작 회전 (X축)</label>
                            <div style="display:flex;gap:8px;align-items:center;">
                                <input id="logsRotationX" type="range" min="-0.5" max="0.5" step="0.001" value="${this.currentValues.logsRotationX}" class="modern-slider" style="flex:1;">
                                <input id="logsRotationX-input" type="number" min="-0.5" max="0.5" step="0.001" value="${this.currentValues.logsRotationX}" style="width:60px;padding:4px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#fff;font-size:12px;">
                            </div>
                        </div>
                        
                        <div style="margin-top:12px;">
                            <button id="printLogsValues" style="width:100%;padding:8px;background-color:rgba(255,204,0,0.2);color:rgba(255,204,0,0.9);border:none;border-radius:4px;cursor:pointer;font-size:12px;">
                                현재 값 콘솔에 출력
                            </button>
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

        // 임시 장작 조절 컨트롤
        this.setupLogsSlider('logsScale', (value) => {
            if (window.fireApp && window.fireApp.logs) {
                window.fireApp.logs.scale.set(value, value, value);
            }
            this.currentValues.logsScale = value;
            this.saveSettings();
        });

        this.setupLogsSlider('logsX', (value) => {
            if (window.fireApp && window.fireApp.logs) {
                window.fireApp.logs.position.x = value;
            }
            this.currentValues.logsX = value;
            this.saveSettings();
        });

        this.setupLogsSlider('logsY', (value) => {
            if (window.fireApp && window.fireApp.logs) {
                window.fireApp.logs.position.y = value;
            }
            this.currentValues.logsY = value;
            this.saveSettings();
        });

        this.setupLogsSlider('logsZ', (value) => {
            if (window.fireApp && window.fireApp.logs) {
                window.fireApp.logs.position.z = value;
            }
            this.currentValues.logsZ = value;
            this.saveSettings();
        });

        this.setupLogsSlider('logsRotationX', (value) => {
            if (window.fireApp && window.fireApp.logs) {
                window.fireApp.logs.rotation.x = value;
            }
            this.currentValues.logsRotationX = value;
            this.saveSettings();
        });

        // 현재 값 출력 버튼
        document.getElementById('printLogsValues').addEventListener('click', () => {
            console.log('=== 현재 장작 설정 값 ===');
            console.log(`logsScale: ${this.currentValues.logsScale}`);
            console.log(`logsX: ${this.currentValues.logsX}`);
            console.log(`logsY: ${this.currentValues.logsY}`);
            console.log(`logsZ: ${this.currentValues.logsZ}`);
            console.log(`logsRotationX: ${this.currentValues.logsRotationX}`);
            console.log('====================');
        });

        // 불 모양 조정 컨트롤
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

    setupLogsSlider(id, callback) {
        const slider = document.getElementById(id);
        const numberInput = document.getElementById(id + '-input');
        
        if (!slider || !numberInput) {
            console.warn(`Slider or number input not found for id: ${id}`);
            return;
        }
        
        // 슬라이더 변경 시
        slider.addEventListener('input', () => {
            const value = parseFloat(slider.value);
            numberInput.value = value;
            callback(value);
        });
        
        // 숫자 입력 변경 시
        numberInput.addEventListener('input', () => {
            const value = parseFloat(numberInput.value);
            if (!isNaN(value)) {
                slider.value = value;
                callback(value);
            }
        });
        
        // Enter 키로 확정
        numberInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const value = parseFloat(numberInput.value);
                if (!isNaN(value)) {
                    slider.value = value;
                    callback(value);
                }
                numberInput.blur(); // 포커스 제거
            }
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

        // 장작 설정 적용 (그룹 내에서 상대적 위치/크기)
        if (window.fireApp && window.fireApp.logs) {
            // 장작 크기는 개별적으로 설정 (그룹 스케일과 별도)
            window.fireApp.logs.scale.set(
                this.currentValues.logsScale,
                this.currentValues.logsScale,
                this.currentValues.logsScale
            );
            window.fireApp.logs.position.set(
                this.currentValues.logsX,
                this.currentValues.logsY,
                this.currentValues.logsZ
            );
            window.fireApp.logs.rotation.x = this.currentValues.logsRotationX;
        }

        // UI 업데이트
        this.updateAllDisplayValues();
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
        });
    }

    getRotationSpeed() {
        return this.rotationSpeed;
    }

    // 컨트롤 패널 숨기기/보이기 (하위 호환성)
    toggleControls() {
        this.toggleSidebar();
    }
}

// 전역 변수로 FireControls 인스턴스 생성
window.fireControls = new FireControls(); 