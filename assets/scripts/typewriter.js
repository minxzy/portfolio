$(document).ready(function() {
        const text = document.getElementById("typeStyle");

        const typewriter = new Typewriter(text, {
            loop: true
        });

        typewriter.typeString('반갑습니다!<br>저는 디자인과 퍼블리싱을<br>공부하는 멀티 플레이어<br>김민지예요.<img src="../images/waving_hand.png" alt="hand_waving_icon" class="hand_waving">')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Feel이 찌르르 왔나요?<br>그렇다면 언제든지<br>저에게 연락주세요.<br>기다릴게요!')
            .pauseFor(2000)
            .deleteChars(2)
            .start();
    });