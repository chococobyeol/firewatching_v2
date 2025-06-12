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
    }
]; 