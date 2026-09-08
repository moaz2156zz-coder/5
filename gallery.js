/* =========================
   الكتابة حرف حرف
========================= */

const text = `
النهارده مش يوم عادي.. ❤️
النهارده اليوم اللي اتولدت فيه أجمل إنسانة بالنسبة ليا.

كل سنة وانتي طيبة يا جنجونتي،
وكل سنة وضحكتك منورة الدنيا حواليكي. ✨

أتمنى السنة الجديدة من عمرك تكون مليانة
فرحة ونجاح وأيام حلوة كتير.

وأتمنى دايمًا تفضلي مبسوطة،
لأن ابتسامتك لوحدها كفاية تخلي اليوم أجمل. ❤️

عيد ميلاد سعيد يا جنجونتي 😍
وعقبال سنين كتير كلها فرحة وحب. ❤️
`;

const typingText = document.getElementById("typingText");

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typingText.textContent += text.charAt(index);

        index++;

        let speed = 35;

        if (text.charAt(index - 1) === "\n") {
            speed = 300;
        }

        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, 1200);


/* =========================
   إنشاء القلوب
========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    const size = Math.random() * 35 + 15;

    const duration = Math.random() * 8 + 8;

    const delay = Math.random() * 8;

    const opacity = Math.random() * .55 + .25;

    heart.style.left = Math.random() * 100 + "%";

    heart.style.setProperty("--size", size + "px");
    heart.style.setProperty("--duration", duration + "s");
    heart.style.setProperty("--delay", delay + "s");
    heart.style.setProperty("--opacity", opacity);

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

for (let i = 0; i < 30; i++) {
    createHeart();
}

setInterval(createHeart, 500);


/* =========================
   زر الانتقال
========================= */

function goNext() {

    const transition = document.querySelector(".transition-screen");

    transition.classList.add("active");

    setTimeout(() => {

        /*
          غير اسم الصفحة هنا لو الصفحة التالية
          عندك باسم مختلف
        */

        window.location.href = "message.html";

    }, 900);
}
