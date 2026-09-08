// ============================
// شاشة البداية
// ============================

const intro = document.getElementById("intro");
const main = document.querySelector("main");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {
        main.style.opacity = "1";
    }, 500);

});


// ============================
// مشغل الأغنية
// ============================

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const disc = document.querySelector(".music-disc");
const progress = document.getElementById("progress");

let playing = false;

playBtn.addEventListener("click", () => {

    if (!playing) {

        song.play();

        playing = true;

        playBtn.textContent = "❚❚";

        disc.classList.add("playing");

    } else {

        song.pause();

        playing = false;

        playBtn.textContent = "▶";

        disc.classList.remove("playing");

    }

});


// تحديث شريط الأغنية

song.addEventListener("timeupdate", () => {

    if (!song.duration) return;

    const percent =
        (song.currentTime / song.duration) * 100;

    progress.style.width = percent + "%";

});


// لما الأغنية تخلص

song.addEventListener("ended", () => {

    playing = false;

    playBtn.textContent = "▶";

    disc.classList.remove("playing");

    progress.style.width = "0%";

});


// ============================
// ظهور الصور عند النزول
// ============================

const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: .15
    }
);

photos.forEach(photo => {
    observer.observe(photo);
});


// ============================
// فتح الصورة بحجم كبير
// ============================

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeLightbox =
    document.getElementById("closeLightbox");


photos.forEach(photo => {

    photo.addEventListener("click", () => {

        const image =
            photo.querySelector("img");

        lightboxImg.src = image.src;

        lightbox.classList.add("active");

    });

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


// ============================
// قلوب عند الضغط
// ============================

document.addEventListener("click", event => {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button")
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.textContent = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.color = "#ff5c9d";

    heart.style.fontSize = "20px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);


    heart.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(.5)",
                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -120px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );


    setTimeout(() => {

        heart.remove();

    }, 900);

});



// ============================
// الانتقال للصفحة الثانية
// ============================

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {

    // تشغيل أنيميشن الـ Zoom Out
    document.body.classList.add("zoom-out");

    // منع الضغط أثناء الانتقال
    nextBtn.disabled = true;

    // الانتقال بعد انتهاء الأنيميشن
    setTimeout(() => {

        window.location.href = "message.html";

    }, 1100);

});