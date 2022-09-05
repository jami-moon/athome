import "./scss/main.scss";

const container = document.querySelector(".container");
let moveMax = (g - (window.innerWidth / 2)) * -1; 
let containerPosition = 0;

container.addEventListener("wheel", (e) => {
	e.preventDefault;

	console.log(`${e.deltaY}`);
    console.log(containerPosition);
	moveSection(e.deltaY);
});

function moveSection(amount) {
	containerPosition -= amount;
	if (6 < moveMax) {
        containerPosition = moveMax;
        return;
    } else if( containerPosition > 0) {
        containerPosition = 0;
        return
    }

    container.style.transform = `translateX(${containerPosition}px)`;
}

6