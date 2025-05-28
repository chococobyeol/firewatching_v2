/**
 * Fire Controls - 불 효과 파라미터 조정을 위한 컨트롤 패널
 */

class FireControls {
    constructor() {
        this.fire = null;
        this.rotationSpeed = 0;
        this.defaultValues = {
            scale: 2,
            rotationSpeed: 0,
            magnitude: 1.3,
            lacunarity: 2.0,
            gain: 0.5,
            baseWidth: 0.5,
            noiseScaleX: 1,
            noiseScaleY: 2,
            noiseScaleZ: 1,
            noiseScaleW: 0.75,
            colorR: 238,
            colorG: 238,
            colorB: 238
        };
        
        this.controlsData = [
            {
                groupName: '기본 설정',
                controls: [
                    { id: 'scale', label: '크기 (Scale)', min: 0.5, max: 5, step: 0.1, value: 2 },
                    { id: 'rotation-speed', label: '회전 속도', min: 0, max: 2, step: 0.1, value: 0 }
                ]
            },
            {
                groupName: '불 모양 조정',
                controls: [
                    { id: 'magnitude', label: 'Magnitude', min: 0.1, max: 3, step: 0.1, value: 1.3 },
                    { id: 'lacunarity', label: 'Lacunarity', min: 1, max: 4, step: 0.1, value: 2.0 },
                    { id: 'gain', label: 'Gain', min: 0.1, max: 1, step: 0.05, value: 0.5 },
                    { id: 'base-width', label: '아래쪽 너비', min: 0.1, max: 1, step: 0.05, value: 0.5 }
                ]
            },
            {
                groupName: '노이즈 스케일',
                controls: [
                    { id: 'noise-scale-x', label: 'X 스케일', min: 0.1, max: 3, step: 0.1, value: 1 },
                    { id: 'noise-scale-y', label: 'Y 스케일', min: 0.1, max: 5, step: 0.1, value: 2 },
                    { id: 'noise-scale-z', label: 'Z 스케일', min: 0.1, max: 3, step: 0.1, value: 1 },
                    { id: 'noise-scale-w', label: '속도 (Speed)', min: 0.1, max: 1, step: 0.05, value: 0.75 }
                ]
            },
            {
                groupName: '색상',
                controls: [
                    { id: 'color-r', label: '빨강', min: 0, max: 255, step: 1, value: 238 },
                    { id: 'color-g', label: '초록', min: 0, max: 255, step: 1, value: 238 },
                    { id: 'color-b', label: '파랑', min: 0, max: 255, step: 1, value: 238 }
                ]
            }
        ];
        
        this.init();
    }

    init() {
        this.createUI();
        this.setupEventListeners();
    }

    createUI() {
        // 토글 버튼 생성
        this.createToggleButton();
        
        // 컨트롤 패널 생성
        this.createControlPanel();
    }

    createToggleButton() {
        const toggleButton = document.createElement('button');
        toggleButton.id = 'toggle-controls';
        toggleButton.textContent = '컨트롤 숨기기/보이기';
        document.body.appendChild(toggleButton);
    }

    createControlPanel() {
        // 메인 컨트롤 패널 컨테이너
        const controlsDiv = document.createElement('div');
        controlsDiv.id = 'controls';
        
        // 제목 추가
        const title = document.createElement('h2');
        title.textContent = '🔥 Fire Controls';
        title.style.marginTop = '0';
        title.style.color = '#ff6600';
        controlsDiv.appendChild(title);
        
        // 각 컨트롤 그룹 생성
        this.controlsData.forEach(group => {
            const groupDiv = this.createControlGroup(group);
            controlsDiv.appendChild(groupDiv);
        });
        
        // 리셋 버튼 그룹 추가
        const resetGroup = this.createResetButtonGroup();
        controlsDiv.appendChild(resetGroup);
        
        document.body.appendChild(controlsDiv);
    }

    createControlGroup(groupData) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'control-group';
        
        // 그룹 제목
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = groupData.groupName;
        groupDiv.appendChild(groupTitle);
        
        // 각 컨트롤 아이템 생성
        groupData.controls.forEach(control => {
            const controlItem = this.createControlItem(control);
            groupDiv.appendChild(controlItem);
        });
        
        return groupDiv;
    }

    createControlItem(controlData) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'control-item';
        
        // 라벨
        const label = document.createElement('label');
        label.textContent = controlData.label + ':';
        itemDiv.appendChild(label);
        
        // 슬라이더
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.id = controlData.id;
        slider.min = controlData.min;
        slider.max = controlData.max;
        slider.step = controlData.step;
        slider.value = controlData.value;
        itemDiv.appendChild(slider);
        
        // 값 표시 스팬
        const valueSpan = document.createElement('span');
        valueSpan.id = controlData.id + '-value';
        valueSpan.textContent = controlData.value.toFixed(2);
        itemDiv.appendChild(valueSpan);
        
        return itemDiv;
    }

    createResetButtonGroup() {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'control-group';
        
        const resetButton = document.createElement('button');
        resetButton.id = 'reset-button';
        resetButton.className = 'reset-button';
        resetButton.textContent = '기본값으로 리셋';
        
        groupDiv.appendChild(resetButton);
        return groupDiv;
    }

    setupEventListeners() {
        // DOM이 완전히 생성된 후 이벤트 리스너 설정
        setTimeout(() => {
            this.setupToggleButton();
            this.setupResetButton();
        }, 0);
    }

    setFire(fire) {
        this.fire = fire;
        this.setupControls();
        this.applyDefaultValues();
    }

    setupToggleButton() {
        const toggleButton = document.getElementById('toggle-controls');
        const controls = document.getElementById('controls');
        
        if (toggleButton && controls) {
            toggleButton.addEventListener('click', () => {
                controls.style.display = controls.style.display === 'none' ? 'block' : 'none';
            });
        }
    }

    setupResetButton() {
        const resetButton = document.getElementById('reset-button');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                this.resetToDefaults();
            });
        }
    }

    setupControls() {
        if (!this.fire) return;

        // 기본 설정 컨트롤
        this.setupSlider('scale', (value) => {
            this.fire.scale.set(value, value, value);
        });

        this.setupSlider('rotation-speed', (value) => {
            this.rotationSpeed = value;
        });

        // 불 모양 조정 컨트롤
        this.setupSlider('magnitude', (value) => {
            this.fire.material.uniforms.magnitude.value = value;
        });

        this.setupSlider('lacunarity', (value) => {
            this.fire.material.uniforms.lacunarity.value = value;
        });

        this.setupSlider('gain', (value) => {
            this.fire.material.uniforms.gain.value = value;
        });

        this.setupSlider('base-width', (value) => {
            this.fire.material.uniforms.baseWidth.value = value;
        });

        // 노이즈 스케일 컨트롤
        this.setupSlider('noise-scale-x', (value) => {
            this.fire.material.uniforms.noiseScale.value.x = value;
        });

        this.setupSlider('noise-scale-y', (value) => {
            this.fire.material.uniforms.noiseScale.value.y = value;
        });

        this.setupSlider('noise-scale-z', (value) => {
            this.fire.material.uniforms.noiseScale.value.z = value;
        });

        this.setupSlider('noise-scale-w', (value) => {
            this.fire.material.uniforms.noiseScale.value.w = value;
        });

        // 색상 컨트롤
        const updateColor = () => {
            const r = document.getElementById('color-r').value / 255;
            const g = document.getElementById('color-g').value / 255;
            const b = document.getElementById('color-b').value / 255;
            this.fire.material.uniforms.color.value.setRGB(r, g, b);
        };

        this.setupSlider('color-r', updateColor);
        this.setupSlider('color-g', updateColor);
        this.setupSlider('color-b', updateColor);
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

    applyDefaultValues() {
        if (!this.fire) return;

        // Fire 객체에 기본값 적용
        this.fire.scale.set(
            this.defaultValues.scale, 
            this.defaultValues.scale, 
            this.defaultValues.scale
        );
        
        this.rotationSpeed = this.defaultValues.rotationSpeed;
        
        this.fire.material.uniforms.magnitude.value = this.defaultValues.magnitude;
        this.fire.material.uniforms.lacunarity.value = this.defaultValues.lacunarity;
        this.fire.material.uniforms.gain.value = this.defaultValues.gain;
        this.fire.material.uniforms.baseWidth.value = this.defaultValues.baseWidth;
        
        this.fire.material.uniforms.noiseScale.value.set(
            this.defaultValues.noiseScaleX,
            this.defaultValues.noiseScaleY,
            this.defaultValues.noiseScaleZ,
            this.defaultValues.noiseScaleW
        );
        
        this.fire.material.uniforms.color.value.setRGB(
            this.defaultValues.colorR / 255,
            this.defaultValues.colorG / 255,
            this.defaultValues.colorB / 255
        );

        // UI 업데이트
        this.updateAllDisplayValues();
    }

    resetToDefaults() {
        if (!this.fire) return;

        // 슬라이더 값들을 기본값으로 리셋
        document.getElementById('scale').value = this.defaultValues.scale;
        document.getElementById('rotation-speed').value = this.defaultValues.rotationSpeed;
        document.getElementById('magnitude').value = this.defaultValues.magnitude;
        document.getElementById('lacunarity').value = this.defaultValues.lacunarity;
        document.getElementById('gain').value = this.defaultValues.gain;
        document.getElementById('base-width').value = this.defaultValues.baseWidth;
        document.getElementById('noise-scale-x').value = this.defaultValues.noiseScaleX;
        document.getElementById('noise-scale-y').value = this.defaultValues.noiseScaleY;
        document.getElementById('noise-scale-z').value = this.defaultValues.noiseScaleZ;
        document.getElementById('noise-scale-w').value = this.defaultValues.noiseScaleW;
        document.getElementById('color-r').value = this.defaultValues.colorR;
        document.getElementById('color-g').value = this.defaultValues.colorG;
        document.getElementById('color-b').value = this.defaultValues.colorB;

        // 실제 값들 적용
        this.applyDefaultValues();
    }

    updateAllDisplayValues() {
        const sliders = [
            'scale', 'rotation-speed', 'magnitude', 'lacunarity', 'gain', 'base-width',
            'noise-scale-x', 'noise-scale-y', 'noise-scale-z', 'noise-scale-w',
            'color-r', 'color-g', 'color-b'
        ];
        
        sliders.forEach(id => {
            const slider = document.getElementById(id);
            const valueSpan = document.getElementById(id + '-value');
            if (slider && valueSpan) {
                valueSpan.textContent = parseFloat(slider.value).toFixed(2);
            }
        });
    }

    getRotationSpeed() {
        return this.rotationSpeed;
    }

    // 새로운 컨트롤을 쉽게 추가할 수 있는 메서드
    addControl(groupIndex, controlData) {
        this.controlsData[groupIndex].controls.push(controlData);
        // UI 재생성이 필요한 경우 여기서 처리
    }

    // 컨트롤 패널 숨기기/보이기
    toggleControls() {
        const controls = document.getElementById('controls');
        if (controls) {
            controls.style.display = controls.style.display === 'none' ? 'block' : 'none';
        }
    }
}

// 전역 변수로 FireControls 인스턴스 생성
window.fireControls = new FireControls(); 