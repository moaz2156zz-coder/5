const message = `النهارده مش يوم عادي.. ❤️

النهارده يوم ميلاد أجمل جنجونتي.

كل سنة وانتي طيبة،
وكل سنة وضحكتك منورة الدنيا حواليكي. ✨

أتمنى السنة الجديدة من عمرك
تكون مليانة فرحة وسعادة ونجاح.

وأتمنى دايمًا أشوفك مبسوطة،
لأن ابتسامتك بتخلي كل حاجة أجمل. ❤️

عيد ميلاد سعيد يا جنجونتي 😍
وعقبال سنين كتير كلها فرحة وحب. ❤️`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < message.length) {

        typing.textContent += message[i];

        i++;

        let speed = 35;

        if (message[i - 1] === "\n") {
            speed = 250;
        }

        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, 1000);


/* القلوب */

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "♥";

    const size = Math.random() * 35 + 15;
    const duration = Math.random() * 7 + 7;

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = duration + "s";
    heart.style.opacity = Math.random() * .6 + .3;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


/* قلوب البداية */

for (let x = 0; x < 25; x++) {

    setTimeout(createHeart, x * 200);

}

setInterval(createHeart, 500);


/* زر الانتقال */

const next = document.getElementById("next");
const transition = document.querySelector(".transition");

next.addEventListener("click", () => {

    transition.classList.add("active");

    setTimeout(() => {

        window.location.href = "MESSAGE.html";

    }, 850);

});
