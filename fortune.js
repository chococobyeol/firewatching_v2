class Fortune {
    constructor() {
        this.fortunes = {
            colors: [
                { name: "빨강", meaning: "열정과 에너지가 넘치는 하루!" },
                { name: "주황", meaning: "긍정적인 기운이 당신을 감쌀 거예요." },
                { name: "노랑", meaning: "명랑함과 웃음이 가득할 거예요." },
                { name: "초록", meaning: "편안하고 안정적인 하루를 보내세요." },
                { name: "파랑", meaning: "맑은 하늘처럼 상쾌한 일이 생길 거예요." },
                { name: "남색", meaning: "차분하게 지혜를 발휘할 시간입니다." },
                { name: "보라", meaning: "신비로운 매력이 빛나는 날이에요." },
                { name: "분홍", meaning: "사랑과 다정함이 샘솟을 거예요." },
                { name: "하양", meaning: "새로운 시작을 하기에 좋은 날입니다." },
                { name: "검정", meaning: "강인함과 자신감으로 무장하세요." }
            ],
            items: [
                "따뜻한 차 한 잔", "좋아하는 노래", "작은 초콜릿", "오래된 책", "편안한 신발",
                "창가에 둔 화분", "부드러운 담요", "아침 햇살", "친한 친구와의 통화", "메모장과 펜"
            ],
            messages: [
                "작은 변화가 큰 행운을 가져다줄 거예요.", "당신의 미소가 주변을 밝게 만듭니다.",
                "오늘은 당신의 잠재력이 최대한 발휘되는 날!", "예상치 못한 곳에서 좋은 소식이 들려올 거예요.",
                "잠시 쉬어가도 괜찮아요. 여유를 즐기세요.", "새로운 도전을 하기에 완벽한 날입니다.",
                "감사한 마음을 가지면 더 큰 행복이 찾아와요.", "당신의 친절이 누군가에게 큰 힘이 될 거예요.",
                "스스로를 믿으세요. 당신은 생각보다 강합니다.", "웃음은 최고의 행운 부적입니다!"
            ]
        };
        this.popup = null;
        this.outsideClickListener = null;
        this.closeButtonListener = null;
    }

    getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generateFortune() {
        const number = Math.floor(Math.random() * 100) + 1;
        const color = this.getRandomElement(this.fortunes.colors);
        const item = this.getRandomElement(this.fortunes.items);
        const message = this.getRandomElement(this.fortunes.messages);
        return { number, color, item, message };
    }

    showFortune(x, y) {
        if (this.popup) {
            this.hideFortune();
        }

        const fortune = this.generateFortune();
        this.popup = document.createElement('div');
        this.popup.id = 'fortunePopup';
        this.popup.className = 'fortune-popup';
        this.popup.innerHTML = `
            <div class="fortune-header">오늘의 행운</div>
            <div class="fortune-close-btn">&times;</div>
            <div class="fortune-content">
                <p><strong>행운의 숫자:</strong> ${fortune.number}</p>
                <div class="fortune-item">
                    <p><strong>행운의 색상:</strong> ${fortune.color.name}</p>
                    <p class="fortune-description">${fortune.color.meaning}</p>
                </div>
                <p><strong>행운의 아이템:</strong> ${fortune.item}</p>
                <hr>
                <p class="fortune-message">"${fortune.message}"</p>
            </div>
        `;
        document.body.appendChild(this.popup);

        this.popup.style.visibility = 'hidden';
        this.popup.style.display = 'block';
        const popupWidth = this.popup.offsetWidth;
        const popupHeight = this.popup.offsetHeight;
        this.popup.style.display = 'none';
        this.popup.style.visibility = 'visible';
        
        const margin = 20;
        let left = x - popupWidth / 2;
        let top = y - popupHeight - margin;

        if (top < margin) top = y + margin;
        if (top + popupHeight > window.innerHeight - margin) top = window.innerHeight - popupHeight - margin;
        if (left < margin) left = margin;
        if (left + popupWidth > window.innerWidth - margin) left = window.innerWidth - popupWidth - margin;

        this.popup.style.left = `${left}px`;
        this.popup.style.top = `${top}px`;
        this.popup.style.display = 'block';

        this.closeButtonListener = (e) => {
            e.stopPropagation();
            this.hideFortune();
        };
        this.popup.querySelector('.fortune-close-btn').addEventListener('click', this.closeButtonListener);

        this.outsideClickListener = (event) => {
            if (this.popup && !this.popup.contains(event.target)) {
                this.hideFortune();
            }
        };
        setTimeout(() => {
            document.addEventListener('click', this.outsideClickListener);
        }, 0);
    }

    hideFortune() {
        if (this.popup) {
            document.removeEventListener('click', this.outsideClickListener);
            this.popup.querySelector('.fortune-close-btn').removeEventListener('click', this.closeButtonListener);
            this.popup.remove();
            this.popup = null;
        }
    }
}

window.fortuneTeller = new Fortune();

function showRandomFortune(x, y) {
    window.fortuneTeller.showFortune(x, y);
} 