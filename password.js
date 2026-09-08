const correctPassword = "1892008";

const password =
    document.getElementById("password");

const enterBtn =
    document.getElementById("enterBtn");

const error =
    document.getElementById("error");

const showPassword =
    document.getElementById("showPassword");


/* إظهار وإخفاء كلمة السر */

showPassword.onclick = () => {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "🙈";

    } else {

        password.type = "password";

        showPassword.textContent = "👁️";

    }

};


/* فتح الهدية */

function checkPassword() {

    if (password.value === correctPassword) {

        enterBtn.textContent =
            "💖 جاري فتح الهدية...";

        error.textContent = "";

        setTimeout(() => {

            window.location.href =
                "iindex.html";

        }, 800);

    } else {

        error.textContent =
            "❌ كلمة السر مش صحيحة، جربي تاني ❤️";

        password.value = "";

        password.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 300
            }
        );
    }
}

enterBtn.onclick = checkPassword;


/* السماح بزر Enter */

password.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {
            checkPassword();
        }

    }
);


/* القلوب */

const hearts =
    document.getElementById("hearts");

const types = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "💘"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        types[
            Math.floor(
                Math.random() * types.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    hearts.appendChild(heart);

    setTimeout(
        () => heart.remove(),
        12000
    );
}

setInterval(
    createHeart,
    350
);