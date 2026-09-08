document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // الكتابة المتحركة
    // =========================
    const typing = document.getElementById("typing");
    const message = `النهارده مش يوم عادي.. ❤️
النهارده يوم ميلاد أجمل جنجونتي.

كل سنة وانتي طيبة،
وكل سنة وضحكتك منورة الدنيا حواليكي. ✨

أتمنى السنة الجديدة من عمرك
تكون مليانة فرحة وسعادة ونجاح.

عيد ميلاد سعيد يا جنجونتي 😍
وعقبال سنين كتير كلها فرحة وحب. ❤️`;

    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            typing.textContent += message.charAt(i);
            i++;

            setTimeout(typeWriter, 35);
        }
    }
    setTimeout(typeWriter, 800);
    // =========================
    // القلوب
    // =========================

    const hearts = document.querySelector(".hearts");

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize =
            Math.random() * 30 + 15 + "px";

        heart.style.animationDuration =
            Math.random() * 5 + 6 + "s";
        hearts.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 12000);
    }

    for (let i = 0; i < 20; i++) {
        createHeart();
    }

    setInterval(createHeart, 500);
    // =========================
    // زر الانتقال
    // =========================

    const next = document.getElementById("next");
    const transition = document.querySelector(".transition");

    if (next && transition) {

        next.addEventListener("click", function () {

            transition.classList.add("active");
            
            setTimeout(function () {
                window.location.href = "INlove.html";
            }, 800);

        });

    }

});
