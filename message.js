/* =========================
   القلوب
========================= */

const heartsContainer =
    document.getElementById("hearts");

const heartTypes = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "💘",
    "💓"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        14 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(
        () => heart.remove(),
        12000
    );
}

setInterval(
    createHeart,
    350
);


/* =========================
   الرسالة المتحركة
========================= */

const message = `
عمر مالكلام يوصف الي جوانا بس 
بنحاول،كل سنة ونت طيب كل سنة ونتي معايا كل سنة ونت جنجونتي كل سنة ونت حببتي كل سنة ونتي صحبتي كل سنة ونت اختي كل سنة ونت كل حاجة حلوة ليا يا اجمل جنجونة (بحبك) ويارب تكون معايا دايما وتكوني معايا حببتي صحبتي اختي قلبي قمري نجمتي مظتي بجرتي😂كل حاجة حلوة بالنسبالي 
ودي ممكن تكون هدية صغيرة لو كان بأيدي اجبلك الدنيا كلها هجيبهالك مفيش حالجة كتيرة عليكي ولا تغلى عليكي يا حببتي ........... 
)
دي اقل حاجة قدمهالك عشان دي مش من مقامك 
بحبك 

معاذ ♡
`;

const typing =
    document.getElementById("typing");

let index = 0;

function typeMessage() {

    if (index < message.length) {

        typing.innerHTML =
            message
                .substring(0, index + 1)
                .replace(/\n/g, "<br>");

        index++;

        setTimeout(
            typeMessage,
            45
        );

    }

}

setTimeout(
    typeMessage,
    1000
);


/* =========================
   الموسيقى
========================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const progress =
    document.getElementById("progress");

let playing = false;

musicBtn.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play();

            musicBtn.innerHTML =
                "❚❚";

            playing = true;

        } else {

            music.pause();

            musicBtn.innerHTML =
                "▶";

            playing = false;

        }

    }
);


/* شريط تقدم الأغنية */

music.addEventListener(
    "timeupdate",
    () => {

        if (music.duration) {

            const percent =
                (music.currentTime /
                 music.duration) * 100;

            progress.style.width =
                percent + "%";
        }

    }
);


/* =========================
   زر الهدية
========================= */

const giftBtn =
    document.getElementById("giftBtn");

const gift =
    document.getElementById("gift");

giftBtn.addEventListener(
    "click",
    () => {

        gift.classList.toggle("show");

        if (
            gift.classList.contains("show")
        ) {

            giftBtn.innerHTML =
                "💖 الهدية اتفتحت";

            createConfetti();

        } else {

            giftBtn.innerHTML =
                "🎁 افتحي هديتك";

        }

    }
);


/* =========================
   انفجار القلوب
========================= */

function createConfetti() {

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "✨",
        "🎀",
        "🎉"
    ];

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const item =
            document.createElement("div");

        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.zIndex =
            "1000";

        item.style.pointerEvents =
            "none";

        item.style.fontSize =
            15 + Math.random() * 20 + "px";

        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            100 + Math.random() * 300;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        item.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(360deg)
                        scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1000 +
                    Math.random() * 800,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );

        document.body.appendChild(item);

        setTimeout(
            () => item.remove(),
            2000
        );
    }
}


/* =========================
   قلوب عند الضغط
========================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            event.target.closest(
                "button"
            )
        ) return;

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        "translate(-50%,-120px) scale(1.5)",
                    opacity: 0
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );

        setTimeout(
            () => heart.remove(),
            800
        );
    }
);