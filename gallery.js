```javascript
/* =========================
   GALLERY / TIME MACHINE
========================= */

const stars =
    document.getElementById("stars");

const startButton =
    document.getElementById("startTime");

const counter =
    document.getElementById("counter");

const memoryBox =
    document.getElementById("memoryBox");

const memoryNumber =
    document.getElementById("memoryNumber");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryText =
    document.getElementById("memoryText");

const clockSymbol =
    document.getElementById("clockSymbol");


/* =========================
   CREATE STARS
========================= */

for (let i = 0; i < 130; i++) {

    const star =
        document.createElement("span");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 3 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    star.style.animationDuration =
        `${5 + Math.random() * 10}s,
         ${1 + Math.random() * 3}s`;

    star.style.animationDelay =
        `${Math.random() * 5}s`;

    stars.appendChild(star);
}


/* =========================
   MEMORIES
========================= */

const memories = [

    {
        title: "أول لحظة ✦",
        text: "بعض البدايات الصغيرة بتفتح أبواب لحاجات جميلة جدًا."
    },

    {
        title: "لحظة ضحكة ❤️",
        text: "في ضحكات بسيطة بتفضل عالقة في الذاكرة مهما الوقت عدى."
    },

    {
        title: "تفصيلة صغيرة ✨",
        text: "أوقات أجمل الذكريات بتكون في تفاصيل محدش خد باله منها."
    },

    {
        title: "اللحظة الحالية 🌙",
        text: "يمكن أحلى حاجة إننا لسه بنضيف لحظات جديدة للذكرى."
    },

    {
        title: "ولو الزمن رجع...",
        text: "هختار أعيش اللحظات الحلوة من جديد بدون تردد ❤️"
    }

];


let memoryIndex = 0;
let started = false;


/* =========================
   START
========================= */

startButton.onclick = () => {

    if (started) return;

    started = true;

    startButton.disabled = true;

    startButton.textContent =
        "الزمن بيتحرك... ⏳";

    let count = 3;

    counter.textContent =
        "0" + count;


    const countdown =
        setInterval(() => {

            count--;

            if (count > 0) {

                counter.textContent =
                    "0" + count;

            } else {

                clearInterval(countdown);

                counter.textContent =
                    "✦";

                memoryBox.classList.add("show");

                showMemory();

            }

        }, 800);

};


/* =========================
   SHOW MEMORY
========================= */

function showMemory() {

    if (
        memoryIndex >= memories.length
    ) {

  
    memoryText.textContent =
        memory.text;


    clockSymbol.textContent =
        memoryIndex % 2 === 0
            ? "✦"
            : "∞";
function showMemory() {
    if (memoryIndex >= memories.length) {
        memoryNumber.textContent = "∞";
        memoryTitle.textContent = "بعض اللحظات تستاهل للأبد ❤️";
        memoryText.textContent = "ومهما الوقت عدى، تفضل الذكرى الحلوة هي أجمل حاجة.";
        startButton.textContent = "الرحلة انتهت ✨";
        clockSymbol.textContent = "∞";
        createExplosion();
        return; // ✅ هذا بيوقف الدالة هنا
    }
    
    // باقي الكود...
}

    createExplosion();


    memoryIndex++;


    setTimeout(() => {

        showMemory();

    }, 2300);

}


/* =========================
   PARTICLE EXPLOSION
========================= */

function createExplosion() {

    const symbols = [
        "✦",
        "✧",
        "✨",
        "·",
        "♡"
    ];


    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("span");

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "48%";

        particle.style.zIndex =
            "20";

        particle.style.pointerEvents =
            "none";

        particle.style.color =
            "white";

        particle.style.textShadow =
            "0 0 12px #a99cff";

        document.body.appendChild(
            particle
        );


        const x =
            (Math.random() - .5) * 350;

        const y =
            (Math.random() - .5) * 350;


        particle.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(0)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    1300 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }

        );


        setTimeout(() => {

            particle.remove();

        }, 2300);

    }

}


/* =========================
   TEXT ANIMATION
========================= */

const style =
    document.createElement("style");

style.textContent = `

@keyframes fadeText {

    from {
        opacity: 0;
        transform:
            translateY(15px)
            scale(.95);
    }

    to {
        opacity: 1;
        transform:
            translateY(0)
            scale(1);
    }

}`;

document.head.appendChild(style);
```
