document.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector("#start");

	if (btn) {
		btn.onclick = (e) => {
			btn.classList.toggle("is-active");

			// On cible l'oeil DROIT
			const rightEye = document.querySelector(".eye.right");

			if (btn.classList.contains("is-active")) {
				// ACTIVATION DU CLIN D'OEIL JOYEUX
				if (rightEye) rightEye.classList.add("winking");

				document.body.style.background =
					"radial-gradient(circle, #4a1e36 0%, #000000 100%)";

				// Explosion de paillettes
				const rect = btn.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;

				for (let i = 0; i < 25; i++) {
					creerPaillette(centerX, centerY);
				}
			} else {
				// RETOUR À LA NORMALE
				if (rightEye) rightEye.classList.remove("winking");
				document.body.style.background =
					"radial-gradient(circle, #2d3436 0%, #000000 100%)";
			}
		};
	}

	function creerPaillette(x, y) {
		const p = document.createElement("div");
		const shapes = ["⭐", "✨", "🌸", "💖"];
		p.innerText = shapes[Math.floor(Math.random() * shapes.length)];

		p.style.position = "fixed";
		// Éparpillage sur tout Kirby
		p.style.left = x + (Math.random() - 0.5) * 140 + "px";
		p.style.top = y + (Math.random() - 0.5) * 140 + "px";

		p.style.fontSize = Math.random() * 15 + 20 + "px";
		p.style.pointerEvents = "none";
		p.style.zIndex = "2000";
		p.style.transition = "all 1s cubic-bezier(0.1, 0.5, 0.5, 1)";

		document.body.appendChild(p);

		const angle = Math.random() * Math.PI * 2;
		const distance = Math.random() * 250 + 50;
		const destX = Math.cos(angle) * distance;
		const destY = Math.sin(angle) * distance;

		setTimeout(() => {
			p.style.transform = `translate(${destX}px, ${destY}px) rotate(${
				Math.random() * 360
			}deg) scale(0)`;
			p.style.opacity = "0";
		}, 10);

		setTimeout(() => p.remove(), 1100);
	}
});
