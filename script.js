// النص الذي سيظهر بطريقة الكتابة
const text ="مفيش دخول غير لما تديني بوثة الاول 🙄"
const typing = document.getElementById("typing");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

typeWriter();

// إنشاء القلوب
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 250);

// تشغيل الموسيقى بعد أول لمسة
const music = document.getElementById("/music/kol hyaty.mp3");

document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// عند الضغط على الزر
document.getElementById("enter").addEventListener("click", () => {
    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        // غيّر "page2.html" لاسم الصفحة التالية
        window.location.href = "gallery.html";
    }, 1000);
});