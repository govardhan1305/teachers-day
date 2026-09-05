function celebrate() {

    for (let i = 0; i < 100; i++) {

        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-50px";

        confetti.style.fontSize =
            Math.random() * 30 + 20 + "px";

        confetti.style.transition = "top 3s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = "110vh";
        }, 100);

        setTimeout(() => {
            confetti.remove();
        }, 3500);

    }

}
