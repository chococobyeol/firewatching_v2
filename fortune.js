const fortunes = [
    // 조언 100개
    { type: '조언', content: '가장 큰 위험은 아무 위험도 감수하지 않는 것이다.' },
    { type: '조언', content: '오늘 걷지 않으면 내일은 뛰어야 한다.' },
    { type: '조언', content: '성공의 비결은 시작하는 것이다.' },
    { type: '조언', content: '작은 기회로부터 종종 위대한 업적이 시작된다.' },
    { type: '조언', content: '어제를 후회하기보다는 오늘을 감사히 여겨라.' },
    { type: '조언', content: '변화는 우리 삶의 법칙이다.' },
    { type: '조언', content: '당신이 포기할 때, 다른 누군가는 승리한다.' },
    { type: '조언', content: '스스로를 믿는 순간, 어떻게 살아야 할지 알게 된다.' },
    { type: '조언', content: '문제는 멈추는 것이 아니라, 계속 나아가는 것이다.' },
    { type: '조언', content: '가장 어두운 시간은 해가 뜨기 직전이다.' },
    { type: '조언', content: '완벽함은 달성되었을 때가 아니라 더 이상 빼낼 것이 없을 때다.' },
    { type: '조언', content: '현재를 살아라. 미래를 꿈꾸라. 과거에서 배워라.' },
    { type: '조언', content: '실패는 성공으로 가는 과정일 뿐이다.' },
    { type: '조언', content: '꿈을 이루는 유일한 방법은 잠에서 깨는 것이다.' },
    { type: '조언', content: '누구나 실수를 한다. 하지만 그 실수에서 배우는 사람만이 지혜로워진다.' },
    { type: '조언', content: '행복은 목적지가 아니라 여행 그 자체다.' },
    { type: '조언', content: '우리가 두려워하는 것의 대부분은 실제로는 일어나지 않는다.' },
    { type: '조언', content: '마음의 평화는 모든 이해를 뛰어넘는다.' },
    { type: '조언', content: '작은 친절이 큰 변화를 만든다.' },
    { type: '조언', content: '시간을 잘 활용하는 것이 인생을 잘 사는 첫걸음이다.' },
    { type: '조언', content: '긍정적인 마음가짐은 가장 강력한 도구다.' },
    { type: '조언', content: '어려움은 우리를 더 강하게 만든다.' },
    { type: '조언', content: '감사하는 마음은 더 많은 축복을 부른다.' },
    { type: '조언', content: '침묵 속에서 가장 깊은 지혜를 찾을 수 있다.' },
    { type: '조언', content: '용기는 두려움의 부재가 아니라 두려움에도 불구하고 행동하는 것이다.' },
    { type: '조언', content: '모든 전문가는 한때 초보자였다.' },
    { type: '조언', content: '습관이 운명을 만든다.' },
    { type: '조언', content: '인내는 모든 문을 여는 열쇠다.' },
    { type: '조언', content: '가장 큰 영광은 넘어지지 않는 것이 아니라 넘어질 때마다 일어서는 것이다.' },
    { type: '조언', content: '배움에 끝은 없다.' },
    { type: '조언', content: '단순함 속에 아름다움이 있다.' },
    { type: '조언', content: '오늘의 고민은 내일의 지혜가 된다.' },
    { type: '조언', content: '자신을 믿는 것이 성공의 첫걸음이다.' },
    { type: '조언', content: '작은 진전도 여전히 진전이다.' },
    { type: '조언', content: '균형잡힌 삶이 행복한 삶이다.' },
    { type: '조언', content: '목표가 있는 사람은 길을 잃지 않는다.' },
    { type: '조언', content: '진정한 부는 만족하는 마음에서 온다.' },
    { type: '조언', content: '매일 조금씩 성장하라.' },
    { type: '조언', content: '웃음은 최고의 약이다.' },
    { type: '조언', content: '다른 사람을 돕는 것이 자신을 돕는 것이다.' },
    { type: '조언', content: '현재 순간에 집중하라.' },
    { type: '조언', content: '꿈을 포기하지 마라. 꿈이 당신을 포기할 때까지.' },
    { type: '조언', content: '실패는 성공의 어머니다.' },
    { type: '조언', content: '모든 것에는 때가 있다.' },
    { type: '조언', content: '자연에서 평화를 찾아라.' },
    { type: '조언', content: '건강이 최고의 재산이다.' },
    { type: '조언', content: '진실한 마음으로 살아라.' },
    { type: '조언', content: '매일 새로운 하루다.' },
    { type: '조언', content: '작은 것에서 큰 기쁨을 찾아라.' },
    { type: '조언', content: '비교하지 말고 자신만의 길을 가라.' },
    { type: '조언', content: '경험은 최고의 선생님이다.' },
    { type: '조언', content: '마음의 문을 열어두어라.' },
    { type: '조언', content: '창의성은 용기에서 시작된다.' },
    { type: '조언', content: '단순한 삶이 아름다운 삶이다.' },
    { type: '조언', content: '사랑은 모든 것을 이겨낸다.' },
    { type: '조언', content: '지혜는 경험의 딸이다.' },
    { type: '조언', content: '고요한 마음에서 명확한 생각이 나온다.' },
    { type: '조언', content: '희망을 잃지 마라.' },
    { type: '조언', content: '노력은 배신하지 않는다.' },
    { type: '조언', content: '겸손함은 진정한 힘이다.' },
    { type: '조언', content: '오늘이 당신의 남은 생애 중 가장 젊은 날이다.' },
    { type: '조언', content: '꾸준함이 재능을 이긴다.' },
    { type: '조언', content: '내면의 평화를 찾아라.' },
    { type: '조언', content: '모든 종료는 새로운 시작이다.' },
    { type: '조언', content: '진정한 용기는 옳은 일을 하는 것이다.' },
    { type: '조언', content: '마음을 열면 세상이 다르게 보인다.' },
    { type: '조언', content: '스스로에게 친절하라.' },
    { type: '조언', content: '변화를 두려워하지 마라.' },
    { type: '조언', content: '작은 선택이 큰 차이를 만든다.' },
    { type: '조언', content: '열정은 성공의 연료다.' },
    { type: '조언', content: '관계가 가장 소중한 자산이다.' },
    { type: '조언', content: '자신의 가치를 알아라.' },
    { type: '조언', content: '역경이 우리를 성장시킨다.' },
    { type: '조언', content: '진실은 언제나 승리한다.' },
    { type: '조언', content: '현명함은 아는 것이 아니라 아는 척하지 않는 것이다.' },
    { type: '조언', content: '삶은 여행이지 목적지가 아니다.' },
    { type: '조언', content: '자유는 선택할 수 있는 능력이다.' },
    { type: '조언', content: '중요한 것은 눈에 보이지 않는다.' },
    { type: '조언', content: '마음의 부는 진정한 부다.' },
    { type: '조언', content: '모든 순간이 선물이다.' },
    { type: '조언', content: '단순한 것이 가장 아름답다.' },
    { type: '조언', content: '끝까지 포기하지 마라.' },
    { type: '조언', content: '자신만의 속도로 걸어가라.' },
    { type: '조언', content: '문제는 기회의 다른 이름이다.' },
    { type: '조언', content: '어떤 일이든 시작하면 반은 성공한 것이다.' },
    { type: '조언', content: '직관을 믿어라.' },
    { type: '조언', content: '과거는 경험, 미래는 희망, 현재는 선물이다.' },
    { type: '조언', content: '완벽함보다 진실함이 더 소중하다.' },
    { type: '조언', content: '작은 행동이 큰 파장을 만든다.' },
    { type: '조언', content: '마음의 평안이 최고의 성공이다.' },
    { type: '조언', content: '매일 감사할 일을 하나씩 찾아라.' },
    { type: '조언', content: '침착함이 최고의 전략이다.' },
    { type: '조언', content: '마음이 가는 곳에 길이 있다.' },
    { type: '조언', content: '꿈을 현실로 만드는 것은 행동이다.' },
    { type: '조언', content: '모든 계절에는 각각의 아름다움이 있다.' },
    { type: '조언', content: '지금 이 순간을 소중히 여겨라.' },
    { type: '조언', content: '성공은 준비와 기회의 만남이다.' },
    { type: '조언', content: '자신을 사랑하는 것부터 시작하라.' },
    { type: '조언', content: '어제의 나보다 오늘의 내가 더 나아지면 된다.' },
    { type: '조언', content: '긍정적인 에너지는 전염된다.' },
    { type: '조언', content: '마음에 여유를 가져라.' },
    { type: '조언', content: '모든 만남에는 이유가 있다.' },
    { type: '조언', content: '천천히 가더라도 꾸준히 가라.' },
    { type: '조언', content: '내면의 목소리에 귀 기울여라.' },
    { type: '조언', content: '작은 습관이 인생을 바꾼다.' },
    { type: '조언', content: '도전하지 않으면 성장할 수 없다.' },
    // 아이템 100개
    { type: '아이템', content: '황금빛 열쇠' },
    { type: '아이템', content: '신비한 수정구슬' },
    { type: '아이템', content: '오래된 나침반' },
    { type: '아이템', content: '마법의 깃털' },
    { type: '아이템', content: '은빛 목걸이' },
    { type: '아이템', content: '작은 종' },
    { type: '아이템', content: '고대의 동전' },
    { type: '아이템', content: '반짝이는 돌멩이' },
    { type: '아이템', content: '향긋한 차 한 잔' },
    { type: '아이템', content: '따뜻한 양말' },
    { type: '아이템', content: '손편지' },
    { type: '아이템', content: '오래된 책갈피' },
    { type: '아이템', content: '작은 화분' },
    { type: '아이템', content: '부드러운 담요' },
    { type: '아이템', content: '색연필 세트' },
    { type: '아이템', content: '미니어처 등대' },
    { type: '아이템', content: '조개껍데기' },
    { type: '아이템', content: '달콤한 사탕' },
    { type: '아이템', content: '작은 거울' },
    { type: '아이템', content: '은은한 향초' },
    { type: '아이템', content: '모래시계' },
    { type: '아이템', content: '나무 젓가락' },
    { type: '아이템', content: '조약돌' },
    { type: '아이템', content: '작은 주머니' },
    { type: '아이템', content: '철제 단추' },
    { type: '아이템', content: '빈 공책' },
    { type: '아이템', content: '마른 꽃잎' },
    { type: '아이템', content: '투명한 구슬' },
    { type: '아이템', content: '작은 자물쇠' },
    { type: '아이템', content: '나무 도장' },
    { type: '아이템', content: '곡물 알갱이' },
    { type: '아이템', content: '낡은 사진' },
    { type: '아이템', content: '작은 방울' },
    { type: '아이템', content: '조각난 유리' },
    { type: '아이템', content: '매끄러운 돌' },
    { type: '아이템', content: '빛바랜 리본' },
    { type: '아이템', content: '작은 솔방울' },
    { type: '아이템', content: '나비 표본' },
    { type: '아이템', content: '금속 클립' },
    { type: '아이템', content: '작은 칼' },
    { type: '아이템', content: '낚시 바늘' },
    { type: '아이템', content: '도자기 조각' },
    { type: '아이템', content: '작은 망치' },
    { type: '아이템', content: '나무 조각' },
    { type: '아이템', content: '빈 병뚜껑' },
    { type: '아이템', content: '작은 스푼' },
    { type: '아이템', content: '털실 뭉치' },
    { type: '아이템', content: '금속 와이어' },
    { type: '아이템', content: '작은 톱니바퀴' },
    { type: '아이템', content: '깨진 시계' },
    { type: '아이템', content: '낡은 지도' },
    { type: '아이템', content: '마른 나뭇가지' },
    { type: '아이템', content: '작은 항아리' },
    { type: '아이템', content: '빈 액자' },
    { type: '아이템', content: '신문 조각' },
    { type: '아이템', content: '작은 쇠사슬' },
    { type: '아이템', content: '플라스틱 카드' },
    { type: '아이템', content: '작은 자석' },
    { type: '아이템', content: '깨진 찻잔' },
    { type: '아이템', content: '라벨이 떨어진 캔' },
    { type: '아이템', content: '작은 렌치' },
    { type: '아이템', content: '빈 성냥갑' },
    { type: '아이템', content: '말린 잎사귀' },
    { type: '아이템', content: '작은 나사' },
    { type: '아이템', content: '빈 페트병' },
    { type: '아이템', content: '낡은 양말' },
    { type: '아이템', content: '작은 지우개' },
    { type: '아이템', content: '깨진 크레용' },
    { type: '아이템', content: '빈 펜' },
    { type: '아이템', content: '작은 고무줄' },
    { type: '아이템', content: '낡은 신문' },
    { type: '아이템', content: '작은 칫솔' },
    { type: '아이템', content: '빈 튜브' },
    { type: '아이템', content: '깨진 안경' },
    { type: '아이템', content: '작은 집게' },
    { type: '아이템', content: '말린 씨앗' },
    { type: '아이템', content: '낡은 장갑' },
    { type: '아이템', content: '작은 압정' },
    { type: '아이템', content: '빈 화장품 용기' },
    { type: '아이템', content: '마른 꽃다발' },
    { type: '아이템', content: '작은 옷핀' },
    { type: '아이템', content: '낡은 스카프' },
    { type: '아이템', content: '작은 실꾸리' },
    { type: '아이템', content: '빈 달걀껍데기' },
    { type: '아이템', content: '깨진 접시' },
    { type: '아이템', content: '작은 플라스틱 인형' },
    { type: '아이템', content: '낡은 모자' },
    { type: '아이템', content: '작은 테이프 조각' },
    { type: '아이템', content: '빈 종이봉투' },
    { type: '아이템', content: '마른 나무껍질' },
    { type: '아이템', content: '작은 클립' },
    { type: '아이템', content: '낡은 열쇠고리' },
    { type: '아이템', content: '작은 못' },
    { type: '아이템', content: '빈 약병' },
    { type: '아이템', content: '깨진 장난감' },
    { type: '아이템', content: '작은 나무토막' },
    { type: '아이템', content: '말린 곤충' },
    { type: '아이템', content: '낡은 책 표지' },
    { type: '아이템', content: '작은 금속판' },
    { type: '아이템', content: '빈 틴캔' },
    { type: '아이템', content: '마른 해초' },
    { type: '아이템', content: '작은 플라스틱 조각' },
    { type: '아이템', content: '낡은 우표' },
    { type: '아이템', content: '작은 고무 조각' },
    { type: '아이템', content: '빈 카드보드' },
    { type: '아이템', content: '깨진 구슬' },
    { type: '아이템', content: '작은 직물 조각' }
];

const fortune_colors = [
    { name: '석류색', hex: '#D2042D' }, // 실제 체리/석류색
    { name: '감귤색', hex: '#FF8C00' }, // 다크 오렌지
    { name: '호박색', hex: '#FF7F00' }, // 호박색
    { name: '금잔화색', hex: '#FDD835' },
    { name: '라임색', hex: '#32CD32' }, // 라임 그린
    { name: '비취색', hex: '#00FF7F' }, // 스프링 그린
    { name: '청록색', hex: '#00CED1' }, // 다크 터키아
    { name: '하늘색', hex: '#87CEEB' }, // 스카이 블루
    { name: '바다색', hex: '#006994' }, // 깊은 바다색
    { name: '남색', hex: '#191970' }, // 미드나이트 블루
    { name: '자수정색', hex: '#9966CC' }, // 실제 자수정색
    { name: '자홍색', hex: '#FF1493' }, // 딥 핑크
    { name: '장미색', hex: '#FF69B4' }, // 핫 핑크
    { name: '산호색', hex: '#FF7F50' }, // 코랄
    { name: '모래색', hex: '#F4A460' }, // 샌디 브라운
    { name: '숲의 녹색', hex: '#228B22' }, // 포레스트 그린
    { name: '황혼색', hex: '#778899' }, // 라이트 슬레이트 그레이
    { name: '코코아색', hex: '#D2691E' }, // 초콜릿색
    { name: '은회색', hex: '#C0C0C0' }, // 실버
    { name: '상아색', hex: '#FFFFF0' }, // 아이보리
    // 30종 추가
    { name: '루비색', hex: '#E0115F' }, // 루비
    { name: '에메랄드색', hex: '#50C878' }, // 에메랄드
    { name: '사파이어색', hex: '#082567' }, // 사파이어
    { name: '토파즈색', hex: '#FFC87C' }, // 토파즈
    { name: '오팔색', hex: '#A8C3BC' }, // 오팔
    { name: '다이아몬드색', hex: '#B9F2FF' }, // 다이아몬드
    { name: '진주색', hex: '#EAE0C8' }, // 펄
    { name: '가넷색', hex: '#733C3C' }, // 가넷
    { name: '터키석색', hex: '#40E0D0' }, // 터키아
    { name: '마노색', hex: '#3C3C3C' }, // 어겐트
    { name: '와인색', hex: '#722F37' }, // 버건디
    { name: '카키색', hex: '#F0E68C' }, // 카키
    { name: '올리브색', hex: '#808000' }, // 올리브
    { name: '네이비색', hex: '#000080' }, // 네이비
    { name: '베이지색', hex: '#F5F5DC' }, // 베이지
    { name: '크림색', hex: '#FFFDD0' }, // 크림
    { name: '살구색', hex: '#FBCEB1' }, // 복숭아
    { name: '라벤더색', hex: '#E6E6FA' }, // 라벤더
    { name: '민트색', hex: '#98FB98' }, // 페일 그린
    { name: '로즈골드색', hex: '#ECC5C0' }, // 로즈 골드
    { name: '플라티넘색', hex: '#E5E4E2' }, // 플라티넘
    { name: '브론즈색', hex: '#CD7F32' }, // 브론즈
    { name: '구리색', hex: '#B87333' }, // 구리
    { name: '황금색', hex: '#FFD700' }, // 골드
    { name: '은색', hex: '#C0C0C0' }, // 실버 재정의
    { name: '펀치색', hex: '#DC143C' }, // 크림슨
    { name: '세이지색', hex: '#9CAF88' }, // 세이지
    { name: '틸색', hex: '#008080' }, // 틸
    { name: '스틸색', hex: '#4682B4' }, // 스틸 블루
    { name: '슬레이트색', hex: '#708090' }, // 슬레이트 그레이
    { name: '아쿠아색', hex: '#00FFFF' } // 아쿠아
];
