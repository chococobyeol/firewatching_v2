const quotes = [
    {
        "quote": "불은 가장 좋은 종이자 가장 나쁜 주인이다.",
        "author": "토마스 칼라일"
    },
    {
        "quote": "인생은 불꽃과 같으니, 활활 타오르다가 이내 사라진다.",
        "author": "윌리엄 셰익스피어"
    },
    {
        "quote": "가장 뜨거운 불이 가장 단단한 강철을 만든다.",
        "author": "중국 속담"
    },
    {
        "quote": "교육은 불을 지피는 것이지, 그릇을 채우는 것이 아니다.",
        "author": "소크라테스"
    },
    {
        "quote": "사랑은 우정의 불에 불을 붙인 것이다.",
        "author": "제레미 테일러"
    },
    {
        "quote": "작은 불꽃이 큰 불을 일으킨다.",
        "author": "단테 알리기에리"
    },
    {
        "quote": "의심의 그림자가 있는 곳에 믿음의 불꽃은 희미하다.",
        "author": "헨리 워즈워스 롱펠로"
    },
    {
        "quote": "재능은 불꽃이지만, 천재는 불이다.",
        "author": "빅토르 위고"
    },
    {
        "quote": "불은 우리에게 온기를 주지만, 너무 가까이 다가가면 우리를 태울 수도 있다.",
        "author": "푸블릴리우스 시루스"
    },
    {
        "quote": "마음속의 불꽃을 꺼뜨리지 마라. 그것이 너를 계속 나아가게 할 것이다.",
        "author": "비노드 코슬라"
    },
    {
        "quote": "참을 인 세번이면 호구다.",
        "author": "작자 미상"
    },
    {
        "quote": "가는 말이 고우면 얕본다.",
        "author": "박명수"
    },
    {
        "quote": "늦었다고 생각할 때가 진짜 너무 늦었다.",
        "author": "박명수"
    },
    {
        "quote": "어려운 길은 길이 아니다.",
        "author": "박명수"
    },
    {
        "quote": "즐길 수 없으면 피하라.",
        "author": "박명수"
    },
    {
        "quote": "고생 끝에 골병 난다.",
        "author": "박명수"
    },
    {
        "quote": "성공은 1%의 재능과 99%의 빽.",
        "author": "박명수"
    },
    {
        "quote": "시작은 반이 아니다. 시작은 시작일 뿐이다.",
        "author": "박명수"
    },
    {
        "quote": "세상은 넓고 할 일은 많지 않다.",
        "author": "박명수"
    },
    {
        "quote": "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.",
        "author": "박명수"
    },
    {
        "quote": "헌신하면 헌신짝 된다.",
        "author": "작자 미상"
    },
    {
        "quote": "동정할 거면 돈으로 줘라.",
        "author": "작자 미상"
    },
    {
        "quote": "칼로리와 맛은 비례한다.",
        "author": "작자 미상"
    },
    {
        "quote": "꿈은 없고요, 그냥 놀고 싶습니다.",
        "author": "박명수"
    },
    {
        "quote": "인생은 한 방이다.",
        "author": "작자 미상"
    },
    {
        "quote": "일찍 일어나는 새가 피곤하다.",
        "author": "작자 미상"
    },
    {
        "quote": "인생은 고통이다.",
        "author": "작자 미상"
    },
    {
        "quote": "개같이 벌어서 정승같이 쓴다.",
        "author": "작자 미상"
    },
    {
        "quote": "티끌 모아 티끌이다.",
        "author": "작자 미상"
    },
    {
        "quote": "자세히 보아야 예쁘다. 오래 보아야 사랑스럽다. 너는 아니다.",
        "author": "나태주 패러디"
    },
    {
        "quote": "하나를 보고 열을 알면 무당.",
        "author": "작자 미상"
    },
    {
        "quote": "인생은 어차피 혼자다.",
        "author": "작자 미상"
    },
    {
        "quote": "한순간의 감정으로 결정하지 말라.",
        "author": "작자 미상"
    },
    {
        "quote": "돈에 얽힌 일에서 그 사람의 진가를 알 수 있다.",
        "author": "작자 미상"
    },
    {
        "quote": "입을 여는 순간 비밀은 없다.",
        "author": "작자 미상"
    },
    {
        "quote": "사람은 생각보다 남에게 관심이 없다.",
        "author": "작자 미상"
    },
    {
        "quote": "개가 짖는다고 개랑 같이 짖을 필요는 없다.",
        "author": "작자 미상"
    },
    {
        "quote": "말할까 말까 할때는 말하지 마라.",
        "author": "작자 미상"
    },
    {
        "quote": "내 약점을 먼저 말하지 마라.",
        "author": "작자 미상"
    },
    {
        "quote": "주는 만큼 못 받는다.",
        "author": "작자 미상"
    },
    {
        "quote": "참으면 아무도 모른다.",
        "author": "작자 미상"
    },
    {
        "quote": "내가 맞았을 땐 아무도 기억 못하는데, 내가 틀렸을 땐 다 기억한다.",
        "author": "작자 미상"
    },
    {
        "quote": "겸손해라. 당신이 틀릴 수도 있다.",
        "author": "작자 미상"
    },
    {
        "quote": "어두운 밤이 되어야만 별을 볼 수 있다.",
        "author": "랠프 월도 에머슨"
    },
    {
        "quote": "당신의 기억이 당신의 꿈보다 커서는 안 된다.",
        "author": "더글라스 아이베스터"
    },
    {
        "quote": "패배를 알아야 승리가 더 달콤해 지는 것이다.",
        "author": "맬컴 스티븐슨 포브스"
    },
    {
        "quote": "모든 규칙을 지키는 순간 모든 즐거움을 잃게 될 것이다.",
        "author": "캐서린 헵번"
    },
    {
        "quote": "능력이 없는 것이 아니라 의지가 없는 것이다.",
        "author": "빅토르 위고"
    },
    {
        "quote": "오늘은 당신에게 남은 삶 중에 첫번째 날이다.",
        "author": "찰스 데데리히"
    },
    {
        "quote": "당신의 상처를 지혜로 승화시켜라.",
        "author": "오프라 윈프리"
    },
    {
        "quote": "당신의 운명은 당신이 통제하라. 그렇지 않으면 다른 누군가가 통제할 것이다.",
        "author": "잭 웰치"
    },
    {
        "quote": "소수의 사람만 비를 느낀다. 나머지는 그냥 젖을 뿐이다.",
        "author": "밥 말리"
    },
    {
        "quote": "속도를 높이는 것만이 인생의 전부가 아니다.",
        "author": "마하트마 간디"
    },
    {
        "quote": "사랑의 첫번째 의무는 듣는 것이다.",
        "author": "폴 틸리히"
    },
    {
        "quote": "미래는 오늘 시작되는 것이지, 내일 시작되는 것이 아니다.",
        "author": "요한 바오로 2세"
    },
    {
        "quote": "그 누구도 당신에게 당신 자신보다 더 현명한 조언을 해 줄 수는 없다.",
        "author": "키케로"
    },
    {
        "quote": "삶의 길이가 중요한 것은 아니다. 정말 중요한 것은 삶의 깊이이다.",
        "author": "랠프 월도 에머슨"
    },
    {
        "quote": "행복하고 싶다면, 행복해라.",
        "author": "작자 미상"
    },
    {
        "quote": "눈앞에 아른거리고 자꾸 생각나면 그게 사랑 아니냐?",
        "author": "태일 (남자가 사랑할 때)"
    },
    {
        "quote": "사랑은 타이밍이다.",
        "author": "우연 (너의 결혼식)"
    },
    {
        "quote": "인생은 네가 생각하는 것보다 훨씬 길어.",
        "author": "순천댁 (내가 죽던 날)"
    },
    {
        "quote": "말은 권력이고 힘이야.",
        "author": "이강희 (내부자들)"
    },
    {
        "quote": "어차피 대중은 개돼지입니다!",
        "author": "이강희 (내부자들)"
    },
    {
        "quote": "모히또 가서 몰디브 한잔할까?",
        "author": "안상구 (내부자들)"
    },
    {
        "quote": "난 그저 좋은 사람이 되고 싶어요.",
        "author": "길버트 (길버트 그레이프)"
    },
    {
        "quote": "이제 당신이 내 꿈이야!",
        "author": "유진 (라푼젤)"
    },
    {
        "quote": "희망은 깨어 있는 꿈이다.",
        "author": "아리스토텔레스"
    },
    {
        "quote": "웃음은 마음의 태양이다.",
        "author": "빅토르 위고"
    },
    {
        "quote": "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        "author": "알버트 아인슈타인"
    },
    {
        "quote": "삶은 지금 이 순간이다.",
        "author": "장-폴 사르트르"
    },
    {
        "quote": "인생은 짧다. 규칙을 깨고, 빨리 용서하고, 진심으로 사랑하라.",
        "author": "마크 트웨인"
    },
    {
        "quote": "사랑이 있는 곳에 삶이 있다.",
        "author": "마하트마 간디"
    },
    {
        "quote": "인생은 아름다운 모험이다.",
        "author": "헬렌 켈러"
    },
    {
        "quote": "성공은 행동하는 자에게 찾아온다.",
        "author": "파블로 피카소"
    },
    {
        "quote": "성공은 자신을 믿는 데서 시작된다.",
        "author": "알버트 아인슈타인"
    },
    {
        "quote": "인생의 가장 큰 실패는 시도하지 않는 것이다.",
        "author": "테드 터너"
    },
    {
        "quote": "성공은 편안함의 끝에서 시작된다.",
        "author": "마이클 조던"
    },
    {
        "quote": "성공은 목적지가 아니라 여정이다.",
        "author": "존 맥스웰"
    },
    {
        "quote": "성공은 작은 일들의 반복에서 온다.",
        "author": "로버트 콜리어"
    },
    {
        "quote": "실패는 성공으로 가는 디딤돌이다.",
        "author": "토머스 에디슨"
    },
    {
        "quote": "가장 큰 위험은 아무런 위험도 감수하지 않는 것이다.",
        "author": "마크 저커버그"
    },
    {
        "quote": "실패는 포기하지 않는 한 영원히 실패가 아니다.",
        "author": "브루스 리"
    },
    {
        "quote": "실패는 성공의 어머니이다.",
        "author": "속담"
    },
    {
        "quote": "성공은 준비된 자에게 온다.",
        "author": "오프라 윈프리"
    },
    {
        "quote": "지속적인 성공은 끊임없는 노력에서 온다.",
        "author": "빌 게이츠"
    },
    {
        "quote": "성공은 노력한 만큼 얻어진다.",
        "author": "스티브 잡스"
    },
    {
        "quote": "성공을 위해서는 목표를 명확히 세워야 한다.",
        "author": "피터 드러커"
    },
    {
        "quote": "성공은 행동으로 보여주는 것이다.",
        "author": "벤저민 프랭클린"
    },
    {
        "quote": "인내는 쓰지만 그 열매는 달다.",
        "author": "아리스토텔레스"
    },
    {
        "quote": "할 수 있다고 생각하면 할 수 있고, 할 수 없다고 생각하면 할 수 없다.",
        "author": "헨리 포드"
    },
    {
        "quote": "꿈꿀 수 있다면, 실현도 가능하다.",
        "author": "월트 디즈니"
    },
    {
        "quote": "승자의 주머니 속에는 꿈이 있고, 패자의 주머니 속에는 욕심이 있다.",
        "author": "탈무드"
    },
    {
        "quote": "우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정한다.",
        "author": "오프라 윈프리"
    },
    {
        "quote": "어떤 말을 만번 이상 되풀이하면 반드시 미래에 그 일이 이루어진다.",
        "author": "아메리카 인디언 금언"
    },
    {
        "quote": "꿈을 지녀라. 그러면 어려운 현실을 이길 수 있다.",
        "author": "릴케"
    },
    {
        "quote": "Frankly, my dear, I don't give a damn.",
        "author": "바람과 함께 사라지다"
    },
    {
        "quote": "I'm going to make him an offer he can't refuse.",
        "author": "대부"
    },
    {
        "quote": "Toto, I've got a feeling we're not in Kansas anymore.",
        "author": "오즈의 마법사"
    },
    {
        "quote": "Here's looking at you, kid.",
        "author": "카사블랑카"
    },
    {
        "quote": "Go ahead, make my day.",
        "author": "더티 해리 4 - 서든 임팩트"
    },
    {
        "quote": "May the Force be with you.",
        "author": "스타워즈"
    },
    {
        "quote": "You talkin' to me?",
        "author": "택시 드라이버"
    },
    {
        "quote": "I love the smell of napalm in the morning.",
        "author": "지옥의 묵시록"
    },
    {
        "quote": "E.T. phone home.",
        "author": "E.T."
    },
    {
        "quote": "Rosebud.",
        "author": "시민 케인"
    },
    {
        "quote": "Made it, Ma! Top of the world!",
        "author": "화이트 히트"
    },
    {
        "quote": "I'm as mad as hell, and I'm not going to take this anymore!",
        "author": "네트워크"
    },
    {
        "quote": "Louis, I think this is the beginning of a beautiful friendship.",
        "author": "카사블랑카"
    },
    {
        "quote": "A census taker once tried to test me. I ate his liver with some fava beans and a nice chianti.",
        "author": "양들의 침묵"
    },
    {
        "quote": "Bond. James Bond.",
        "author": "007 살인번호"
    },
    {
        "quote": "There's no place like home.",
        "author": "오즈의 마법사"
    },
    {
        "quote": "I am big! It's the pictures that got small.",
        "author": "선셋 대로"
    },
    {
        "quote": "Show me the money!",
        "author": "제리 맥과이어"
    },
    {
        "quote": "You can't handle the truth!",
        "author": "어 퓨 굿 맨"
    },
    {
        "quote": "I'll be back.",
        "author": "터미네이터"
    },
    {
        "quote": "If you build it, he will come.",
        "author": "꿈의 구장"
    },
    {
        "quote": "My mama always said, life is like a box of chocolates. You never know what you're gonna get.",
        "author": "포레스트 검프"
    },
    {
        "quote": "We rob banks.",
        "author": "우리에게 내일은 없다"
    },
    {
        "quote": "Plastics.",
        "author": "졸업"
    },
    {
        "quote": "We'll always have Paris.",
        "author": "카사블랑카"
    },
    {
        "quote": "I see dead people.",
        "author": "식스 센스"
    },
    {
        "quote": "Stella! Hey, Stella!",
        "author": "욕망이라는 이름의 전차"
    },
    {
        "quote": "Houston, we have a problem.",
        "author": "아폴로 13"
    },
    {
        "quote": "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
        "author": "더티 해리"
    },
    {
        "quote": "You had me at 'hello.'",
        "author": "제리 맥과이어"
    },
    {
        "quote": "There's no crying in baseball!",
        "author": "그들만의 리그"
    },
    {
        "quote": "A boy's best friend is his mother.",
        "author": "싸이코"
    },
    {
        "quote": "Greed, for lack of a better word, is good.",
        "author": "월 스트리트"
    },
    {
        "quote": "Keep your friends close, but your enemies closer.",
        "author": "대부 2"
    },
    {
        "quote": "As God is my witness, I'll never be hungry again.",
        "author": "바람과 함께 사라지다"
    },
    {
        "quote": "Say 'hello' to my little friend!",
        "author": "스카페이스"
    },
    {
        "quote": "Gentlemen, you can't fight in here! This is the War Room!",
        "author": "닥터 스트레인지러브"
    },
    {
        "quote": "Get your stinking paws off me, you damned dirty ape!",
        "author": "혹성탈출"
    },
    {
        "quote": "Here's Johnny!",
        "author": "샤이닝"
    },
    {
        "quote": "They're here!",
        "author": "폴터가이스트"
    },
    {
        "quote": "Soylent Green is people!",
        "author": "소일렌트 그린"
    },
    {
        "quote": "Open the pod bay doors, HAL.",
        "author": "2001 스페이스 오디세이"
    },
    {
        "quote": "Yo, Adrian!",
        "author": "록키"
    },
    {
        "quote": "My precious.",
        "author": "반지의 제왕: 두 개의 탑"
    },
    {
        "quote": "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
        "author": "죽은 시인의 사회"
    },
    {
        "quote": "Nobody puts Baby in a corner.",
        "author": "더티 댄싱"
    },
    {
        "quote": "I'll get you, my pretty, and your little dog, too!",
        "author": "오즈의 마법사"
    },
    {
        "quote": "I'm the king of the world!",
        "author": "타이타닉"
    },
    {
        "quote": "중요한 건 꺾이지 않는 마음",
        "author": "데프트"
    },
    {
        "quote": "More GG, More Skill",
        "author": "WhiteRa"
    },
    {
        "quote": "I don't think I'm the best, but I also don't think there is anyone better",
        "author": "Olofmeister"
    },
    {
        "quote": "Every single person who's succeeded in life has experienced failure at some point",
        "author": "Faker"
    },
    {
        "quote": "Up until they lose the game, they're winning",
        "author": "Scarra"
    },
    {
        "quote": "중요한 건 이기는 것이다. 하지만 그것만으로는 부족하다",
        "author": "임요환 BoxeR"
    },
    {
        "quote": "승부에서 가장 중요한 것은 절대 포기하지 않는 것",
        "author": "이영호 FlaSh"
    },
    {
        "quote": "게임에서 이기는 방법은 단 하나, 상대보다 더 잘하는 것",
        "author": "작자 미상"
    },
    {
        "quote": "연습은 거짓말을 하지 않는다",
        "author": "이제동"
    },
    {
        "quote": "천리길도 한 걸음부터",
        "author": "한국 속담"
    },
    {
        "quote": "구슬이 서 말이라도 꿰어야 보배",
        "author": "한국 속담"
    },
    {
        "quote": "백지장도 맞들면 낫다",
        "author": "한국 속담"
    },
    {
        "quote": "소 잃고 외양간 고친다",
        "author": "한국 속담"
    },
    {
        "quote": "하늘은 스스로 돕는 자를 돕는다",
        "author": "서양 격언"
    },
    {
        "quote": "로마는 하루아침에 이루어지지 않았다",
        "author": "서양 격언"
    },
    {
        "quote": "개미가 태산을 무너뜨린다",
        "author": "한국 속담"
    },
    {
        "quote": "물이 깊을수록 소리가 없다",
        "author": "한국 속담"
    },
    {
        "quote": "우물 안 개구리",
        "author": "한국 속담"
    },
    {
        "quote": "급할수록 돌아가라",
        "author": "한국 속담"
    },
    {
        "quote": "돌다리도 두들겨 보고 건너라",
        "author": "한국 속담"
    },
    {
        "quote": "가는 말이 고와야 오는 말이 곱다",
        "author": "한국 속담"
    },
    {
        "quote": "원숭이도 나무에서 떨어진다",
        "author": "한국 속담"
    },
    {
        "quote": "티끌 모아 태산",
        "author": "한국 속담"
    },
    {
        "quote": "열 번 찍어 안 넘어가는 나무 없다",
        "author": "한국 속담"
    },
    {
        "quote": "웃는 얼굴에 침 못 뱉는다",
        "author": "한국 속담"
    },
    {
        "quote": "누워서 떡 먹기",
        "author": "한국 속담"
    },
    {
        "quote": "꿩 먹고 알 먹는다",
        "author": "한국 속담"
    },
    {
        "quote": "날개 없는 말이 천 리 간다",
        "author": "한국 속담"
    },
    {
        "quote": "시작이 반이다",
        "author": "한국 속담"
    },
    {
        "quote": "나는 유혹만은 참을 수 없다.",
        "author": "오스카 와일드, 희곡 『레이디 윈저의 부채』"
    },
    {
        "quote": "항상 자신이 특별하다고 생각하라. 남들과 똑같지만.",
        "author": "마거릿 미드, 인터뷰"
    },
    {
        "quote": "영원히 살 거다. 지금까지는 잘 되고 있어.",
        "author": "스티븐 라이트, 스탠드업 코미디 공연"
    },
    {
        "quote": "인생의 비극은 우리가 결정을 너무 늦게 내리거나 너무 빨리 바꾸는 데 있다.",
        "author": "나폴레옹 보나파르트, 편지"
    },
    {
        "quote": "내가 지각한 건 아니야. 내 시계가 틀린 거야.",
        "author": "루이스 캐럴, 『이상한 나라의 앨리스』"
    },
    {
        "quote": "나이 드는 게 아니라, 성숙해지는 거다. 물론 신체는 안 따라오지만.",
        "author": "조지 번스, 코미디 쇼"
    },
    {
        "quote": "길을 잃는 건 새로운 길을 발견할 기회다.",
        "author": "아비게일 애덤스, 회고록"
    },
    {
        "quote": "바쁘게 사느라 내 인생을 놓치고 있었다.",
        "author": "존 레논, 인터뷰"
    },
    {
        "quote": "돈으론 행복을 살 수 없지만, 불행을 사는 데는 충분하다.",
        "author": "스펜서 존슨, 『누가 내 치즈를 옮겼을까?』"
    },
    {
        "quote": "시간이 없다는 건 핑계다. 실제로는 우선순위가 아닌 것뿐이다.",
        "author": "존 맥스웰, 강연"
    },
    {
        "quote": "커피가 없다면 내 인생이 너무 써.",
        "author": "아노니머스, 트위터"
    },
    {
        "quote": "내가 고민하는 건 대단한데, 실제로 행동은 별거 없더라.",
        "author": "B.J. 노르스테드, 인터뷰"
    },
    {
        "quote": "달은 혼자 빛나는 게 아니다. 태양을 빌렸을 뿐.",
        "author": "아놀드 벤넷, 에세이"
    },
    {
        "quote": "인생은 일탈이다. 지도 없이도 가끔은 재미있다.",
        "author": "앤드루 매튜스, 『인생은 여행이다』"
    },
    {
        "quote": "최고의 계획은 언제나 예고 없이 무너진다.",
        "author": "찰리 채플린, 영화 촬영장 인터뷰"
    },
    {
        "quote": "행복은 주머니 속에 동전 몇 개 같다. 잃어버리면 다시 주워 담아야 한다.",
        "author": "마르쿠스 아우렐리우스, 『명상록』"
    },
    {
        "quote": "새로운 아이디어는 커피 한 잔과 함께 온다.",
        "author": "로버트 고다드, 편지"
    },
    {
        "quote": "인생이 장난 같다면, 적어도 웃길 순 있다.",
        "author": "우디 앨런, 영화 각본"
    },
    {
        "quote": "걱정은 결국 걱정거리만 늘린다.",
        "author": "윌리엄 셰익스피어, 희곡 『햄릿』"
    },
    {
        "quote": "모든 것은 지나간다. 커피도 식는다.",
        "author": "아노니머스, 유머 모음집"
    },
    {
        "quote": "내일의 걱정은 내일로 미뤄라. 오늘의 커피부터.",
        "author": "헨리 포드, 인터뷰"
    },
    {
        "quote": "나는 실패를 두려워하지 않는다. 오직 재미있을 뿐.",
        "author": "리차드 브랜슨, 자서전 『손대는 일마다 신화가 된다』"
    },
    {
        "quote": "현실을 직시하되, 그 위에 풍선을 달라.",
        "author": "조지 버나드 쇼, 희곡 『피그말리온』"
    },
    {
        "quote": "삶은 연극이다. 웃기면 성공이다.",
        "author": "피에르 코르네유, 비극 『시드』"
    },
    {
        "quote": "나의 좌우명은 '별생각 없이 살자'다.",
        "author": "찰스 부코스키, 시집 『Last Night of the Earth Poems』"
    },
    {
        "quote": "문제는 문제를 심각하게 받아들이는 데 있다.",
        "author": "토머스 만, 소설 『마의 산』"
    },
    {
        "quote": "한 대의 아이디어가 머리 하나를 비춘다.",
        "author": "알베르트 아인슈타인, 강연"
    },
    {
        "quote": "끝없는 회의보다 짧은 농담이 낫다.",
        "author": "패트릭 맥스웰, 경영서 『간단한 조직』"
    },
    {
        "quote": "돈이 전부라면, 은행원이 세상에서 가장 행복한 사람일 거다.",
        "author": "아노니머스, 명언집"
    },
    {
        "quote": "성공은 가끔 운이 좋은 거다. 나머지는 커피.",
        "author": "헤인즈 웨이거, 블로그 포스트"
    },
    {
        "quote": "목표를 향해 달려갈수록, 길에 흘린 얼룩이 보인다.",
        "author": "나탈리 골드버그, 에세이 『글쓰기의 즐거움』"
    },
    {
        "quote": "꿈꾸는 자가 세상을 바꾼다. 잠자는 자는 알람 시계를 바꾼다.",
        "author": "하비 맥케이, 『극비명언』"
    },
    {
        "quote": "우린 다 별을 따라간다. 단지 길 잃는 정도가 다를 뿐.",
        "author": "랜디 포시"
    },
    {
        "quote": "소문보다 빠른 건 없다. 특히 자기 소문.",
        "author": "윌 로저스, 코미디 쇼"
    },
    {
        "quote": "생각이 너무 많으면 욕심도 많아진다.",
        "author": "레오나르도 다 빈치, 노트"
    },
    {
        "quote": "중요한 건 목적지가 아니라 사진 찍을 만한 풍경.",
        "author": "존 무어, 여행기 '세상의 끝에서'"
    },
    {
        "quote": "인생은 짧다. 그러나 점심은 언제나 기다려준다.",
        "author": "에드거 워렌, 코미디언 스탠드업"
    },
    {
        "quote": "말은 짧게, 농담은 길게.",
        "author": "마크 트웨인, 편지"
    },
    {
        "quote": "경험 없는 용기는 분별 없는 호기심이다.",
        "author": "아리스토텔레스, '니코마코스 윤리학'"
    },
    {
        "quote": "행복을 찾지 말고, 만들면 된다.",
        "author": "알랭 드 보통, 에세이 '불안'"
    },
    {
        "quote": "삶이 달콤하다면, 커피는 더 달콤하다.",
        "author": "아노니머스, 소셜 미디어"
    },
    {
        "quote": "하루에 한 번은 멈추고 웃어라. 몸이 덜 아프다.",
        "author": "파울로 코엘료, 소설 '연금술사'"
    },
    {
        "quote": "완벽에 집착하면 스트레스가 찬다.",
        "author": "마리아 포포바, 블로그 BrainPickings"
    },
    {
        "quote": "실패는 벌써 경험했다. 다음 번엔 뭘 해볼까?",
        "author": "레베카 블랙, 인터뷰"
    },
    {
        "quote": "눈 덮인 산도 한 걸음부터 시작된다.",
        "author": "로버트 프로스트, 시 '가지 않은 길'"
    },
    {
        "quote": "고민은 밤에 하고, 낮엔 춤춰라.",
        "author": "데이비드 쿠퍼필드, 공연"
    },
    {
        "quote": "나는 멀티태스킹을 시도했지만, 결국 커피만 마셨다.",
        "author": "시그마 팀, 사내 뉴스레터"
    },
    {
        "quote": "굳이 정답을 알 필요 없다. 지름길만.",
        "author": "리처드 파인만, 강연"
    },
    {
        "quote": "인생은 초콜릿 상자다. 항상 예측 불가.",
        "author": "톰 행크스(영화 '포레스트 검프' 대사)"
    },
    {
        "quote": "새벽은 누구에게나 공평하다. 단, 일어나는 사람이 있을 뿐.",
        "author": "헨리 데이비드 소로, '월든'"
    },
    {
        "quote": "웃음은 최고의 방어 무기다.",
        "author": "찰리 채플린, 영화 인터뷰"
    },
    {
        "quote": "뜨거운 물이 식어도 커피 테이블 모임은 지속된다.",
        "author": "아노니머스, 팟캐스트"
    },
    {
        "quote": "인생의 큰 비밀은 숨기려 들면 더 잘 보인다는 것.",
        "author": "시몬 드 보부아르, 에세이"
    },
    {
        "quote": "걷다가 넘어지면, 일어나 웃어라.",
        "author": "마야 안젤루, 강연"
    },
    {
        "quote": "정신없는 삶이 싫다면, 시계를 멈춰라.",
        "author": "티머시 페리스, '4시간 근무 주간'"
    },
    {
        "quote": "편안함을 원하면 모험을 배워라.",
        "author": "헬렌 켈러, 자서전"
    },
    {
        "quote": "인생은 퍼즐이다. 조각을 잃어도 그림은 남는다.",
        "author": "매튜 매커너히, 회고록"
    },
    {
        "quote": "결심은 다음 주부터 시작하지 않는다.",
        "author": "윌리엄 제임스, 심리학 논문"
    },
    {
        "quote": "당신이 경쟁이 아닌, 협력자다.",
        "author": "찰스 다윈, '종의 기원'"
    },
    {
        "quote": "아무리 달려도 끝이 안 보이면, 방향을 바꿔라.",
        "author": "마크 저커버그, 테드 강연"
    },
    {
        "quote": "늦게 오는 친구는 다행히 기억에 오래 남는다.",
        "author": "아노니머스, 여행 에세이"
    },
    {
        "quote": "한 모금의 위로가 천 마디 말보다 낫다.",
        "author": "오프라 윈프리, 토크쇼"
    },
    {
        "quote": "자신을 속이지 않으면, 남도 속일 필요 없다.",
        "author": "콘푸시우스, '논어'"
    },
    {
        "quote": "생각은 무료, 실행은 값비싸다.",
        "author": "빈센트 반 고흐, 편지"
    },
    {
        "quote": "시간이 많아도 집중이 없으면 허비다.",
        "author": "빌 게이츠, 인터뷰"
    },
    {
        "quote": "모든 위대한 발명은 실패에서 시작됐다.",
        "author": "제임스 다이슨, 강연"
    },
    {
        "quote": "아침의 기회는 알람 소리에 달려 있다.",
        "author": "아노니머스, 블로그 포스트"
    },
    {
        "quote": "배우지 못한 자는 무기 없는 병사와 같다.",
        "author": "나폴레옹 보나파르트, 회고록"
    },
    {
        "quote": "한 약속은 한 그루의 나무다. 심고 지켜야 자란다.",
        "author": "리처드 브랜슨, 자서전"
    },
    {
        "quote": "행복은 날개가 아니라 마음에 난다.",
        "author": "헬렌 켈러, 강연"
    },
    {
        "quote": "내가 가고 싶은 길은 언제나 공사 중이다.",
        "author": "아노니머스, 소셜 미디어"
    },
    {
        "quote": "서두르면 실수가 생긴다. 실수도 경험이 된다.",
        "author": "토머스 에디슨, 인터뷰"
    },
    {
        "quote": "인생은 작전 타임이 없다.",
        "author": "레베카 블랙, 인터뷰"
    },
    {
        "quote": "다른 사람이 바뀌길 원한다면, 먼저 거울을 보라.",
        "author": "마하트마 간디, 연설"
    },
    {
        "quote": "어리석은 자는 경험으로 배우고, 현명한 자는 타인의 경험으로 배운다.",
        "author": "오토 폰 비스마르크, 회고록"
    },
    {
        "quote": "목표를 정하면 우주는 나를 도와준다. 날씨 빼고.",
        "author": "맥스웰 말츠, 자기계발서 '스크립트 치료법'"
    },
    {
        "quote": "창의력은 잘 쉬는 사람에게 온다.",
        "author": "알베르트 아인슈타인, 편지"
    },
    {
        "quote": "노력 없는 재능은 배신자다.",
        "author": "존 우든, 코치 인터뷰"
    },
    {
        "quote": "실패는 흔적이지만, 포기는 흔적조차 남기지 않는다.",
        "author": "랜스 암스트롱, 자서전"
    },
    {
        "quote": "삶이 달콤하다면, 커피는 더 달콤하다.",
        "author": "아노니머스, 소셜 미디어"
    },
    {
        "quote": "하루에 한 번은 멈추고 웃어라. 몸이 덜 아프다.",
        "author": "파울로 코엘료, 소설 '연금술사'"
    },
    {
        "quote": "완벽에 집착하면 스트레스가 찬다.",
        "author": "마리아 포포바, 블로그 BrainPickings"
    },
];