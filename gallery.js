function initGallery() {

    const screens = {

        start:
            document.getElementById(
                "startScreen"
            ),

        countdown:
            document.getElementById(
                "countdownScreen"
            ),

        moment:
            document.getElementById(
                "momentScreen"
            ),

        journey:
            document.getElementById(
                "journeyScreen"
            ),

        cake:
            document.getElementById(
                "cakeScreen"
            ),

        final:
            document.getElementById(
                "finalScreen"
            )

    };


    function showScreen(screen) {

        Object.values(screens)
            .forEach(element => {

                if (!element) return;

                element.classList.remove(
                    "active"
                );

            });

        if (screen) screen.classList.add("active");
    }


    // بداية الرحلة

    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener(
            "click",
            startJourney
        );
    }


    function startJourney() {

        showScreen(
            screens.countdown
        );

        const counter =
            document.getElementById(
                "counter"
            );

        const counterText =
            document.getElementById(
                "counterText"
            );

        let number = 3;

        if (counter) counter.textContent =
            "03";

        if (counterText) counterText.textContent =
            "استعد...";

        const timer =
            setInterval(() => {

                number--;

                if (number > 0) {

                    if (counter) counter.textContent =
                        "0" + number;

                    if (counterText) counterText.textContent =
                        number === 2
                            ? "الزمن بيتحرك..."
                            : "اقتربنا...";

                }

                else {

                    clearInterval(timer);

                    if (counter) counter.textContent =
                        "00";

                    if (counterText) counterText.textContent =
                        "وصلنا!";

                    setTimeout(() => {

                        showScreen(
                            screens.moment
                        );

                    }, 900);

                }

            }, 1000);

    }


    // استمرار الرحلة

    const continueBtn = document.getElementById("continueBtn");
    if (continueBtn) {
        continueBtn.addEventListener(
            "click",
            () => {

                showScreen(
                    screens.journey
                );

            }
        );
    }


    // كروت الزمن

    document
        .querySelectorAll(".time-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    card.style.transform =
                        "scale(.95)";

                    setTimeout(() => {

                        card.style.transform =
                            "";

                    }, 150);

                }
            );

        });


    // الوصول للكيكة

    const cakeBtn = document.getElementById("cakeBtn");
    if (cakeBtn) {
        cakeBtn.addEventListener(
            "click",
            () => {

                showScreen(
                    screens.cake
                );

            }
        );
    }


    // الشموع

    const candles =
        document.querySelectorAll(
            ".candle"
        );

    let candlesOff = 0;


    candles.forEach(candle => {

        candle.addEventListener(
            "click",
            () => {

                if (!candle) return;

                if (
                    candle.classList.contains(
                        "off"
                    )
                ) {
                    return;
                }

                candle.classList.add(
                    "off"
                );

                candlesOff++;

                const remaining =
                    3 - candlesOff;

                const counter =
                    document.getElementById(
                        "candleCounter"
                    );

                if (counter) {
                    if (remaining > 0) {

                        counter.textContent =
                            `${remaining} شمعة لسه منورة`;

                    }

                    else {

                        counter.textContent =
                            "✨ الأمنية اتحققت ✨";

                        const blowText = document.getElementById(
                            "blowText"
                        );
                        if (blowText) blowText.textContent =
                            "✨ الزمن وقف هنا ✨";

                        createConfetti();

                        setTimeout(() => {

                            showScreen(
                                screens.final
                            );

                            createConfetti();

                        }, 1800);

                    }
                }

            }
        );

    });


    // الكونفيتي

    function createConfetti() {

        const container =
            document.getElementById(
                "confetti"
            );

        if (!container) return;

        for (
            let i = 0;
            i < 80;
            i++
        ) {

            const piece =
                document.createElement(
                    "span"
                );

            piece.textContent =
                Math.random() > .5
                    ? "❤️"
                    : "✦";

            piece.style.position =
                "fixed";

            piece.style.left =
                Math.random() * 100 +
                "vw";

            piece.style.top =
                "-20px";

            piece.style.fontSize =
                10 +
                Math.random() * 20 +
                "px";

            piece.style.zIndex =
                "999";

            piece.style.transition =
                "transform 3s ease, opacity 3s ease";

            container.appendChild(
                piece
            );

            setTimeout(() => {

                piece.style.transform =
                    `translateY(${window.innerHeight + 100}px)
                    rotate(${Math.random() * 720}deg)`;

                piece.style.opacity =
                    "0";

            }, 50);

            setTimeout(() => {

                piece.remove();

            }, 3200);

        }

    }


    // إعادة التجربة

    const restartBtn = document.getElementById("restartBtn");
    if (restartBtn) {
        restartBtn.addEventListener(
            "click",
            () => {

                location.reload();

            }
        );
    }

    const nextPageBtn = document.getElementById("nextPageBtn");
    if (nextPageBtn) {
        nextPageBtn.addEventListener("click", () => {

            const transition =
                document.createElement("div");

            transition.className =
                "page-transition";

            document.body.appendChild(
                transition
            );

            requestAnimationFrame(() => {
                transition.classList.add("active");
            });

            setTimeout(() => {

                window.location.href =
                    "love.html";

            }, 550);
        });
    }

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
} else {
    initGallery();
}
