# 🔥 Fire Watching v2

THREE.js 기반의 실시간 절차적 볼륨메트릭 불 효과 시뮬레이션

## ✨ 특징

- **실시간 볼륨메트릭 렌더링**: 레이 트레이싱 기반의 고품질 불 효과
- **절차적 생성**: 노이즈 기반의 자연스러운 불꽃 모양
- **실시간 파라미터 조정**: 모든 불 효과 속성을 실시간으로 조정 가능
- **반응형 웹 인터페이스**: 브라우저에서 바로 실행 가능

## 🚀 실행 방법

### 1. 로컬 서버 실행
```bash
python3 -m http.server 8000
```

### 2. 브라우저에서 접속
**http://localhost:8000/fire_controls.html**

## 🎛️ 조정 가능한 파라미터

### 기본 설정
- **크기 (Scale)**: 불꽃의 전체 크기
- **회전 속도**: 카메라 자동 회전 속도

### 불 모양 조정
- **Magnitude**: 불의 높이와 강도 (0.1 ~ 3.0)
- **Lacunarity**: 노이즈의 주파수 배율 (1.0 ~ 4.0)
- **Gain**: 노이즈의 진폭 감소율 (0.1 ~ 1.0)
- **아래쪽 너비**: 불꽃 아래쪽의 너비 조정 (0.1 ~ 1.0)

### 노이즈 스케일
- **X/Y/Z 스케일**: 각 축별 노이즈 크기
- **속도 (Speed)**: 불이 올라가는 애니메이션 속도

### 색상
- **RGB 값**: 불꽃의 색상 조정 (0 ~ 255)

## 📁 파일 구조

```
├── fire_controls.html    # 🎯 메인 애플리케이션
├── Fire.js              # 메인 Fire 클래스
├── FireShader.js        # 불 효과 셰이더 (모든 파라미터 포함)
├── Fire.png             # 불 텍스처 이미지
└── README.md            # 이 파일
```

## 🔧 기술적 세부사항

### 기반 기술
- **THREE.js r79**: 3D 렌더링 라이브러리
- **WebGL**: 하드웨어 가속 그래픽
- **GLSL 셰이더**: 실시간 볼륨메트릭 렌더링

### 알고리즘
- **Simplex Noise**: 자연스러운 불꽃 패턴 생성
- **Ray Marching**: 볼륨메트릭 렌더링
- **Turbulence Function**: 복잡한 불꽃 모양 생성

### 참고 자료
- [Real-Time procedural volumetric fire](http://dl.acm.org/citation.cfm?id=1230131) - Alfred et al.
- [webgl-noise](https://github.com/ashima/webgl-noise/blob/master/src/noise3D.glsl) - Simplex noise implementation
- [THREE.Fire](https://github.com/mattatz/THREE.Fire) - 원본 프로젝트

## 🎮 사용법

1. **fire_controls.html** 접속
2. 왼쪽 컨트롤 패널에서 슬라이더 조정
3. 실시간으로 불 효과 변화 관찰
4. "기본값으로 리셋" 버튼으로 원래 설정 복원
5. 오른쪽 상단 버튼으로 컨트롤 패널 숨기기/보이기

## 🔥 추천 설정

### 촛불 효과
- 아래쪽 너비: 0.2
- Magnitude: 0.8
- 크기: 1.5

### 큰 불꽃
- 아래쪽 너비: 0.8
- Magnitude: 2.5
- 크기: 3.0

### 빠른 불꽃
- 속도: 0.8
- Lacunarity: 3.0
- Y 스케일: 3.0

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🙏 크레딧

- 원본 THREE.Fire 프로젝트: [mattatz](https://github.com/mattatz/THREE.Fire)
- Simplex noise: [ashima](https://github.com/ashima/webgl-noise)
- THREE.js: [mrdoob](https://github.com/mrdoob/three.js) 