// const front = document.querySelectorAll(".card-front");
// const back = document.querySelectorAll(".card-back");
const inners = document.querySelectorAll(".card-inner");

const radios = document.querySelectorAll("[type=radio]");

radios.forEach((r) => {
	r.addEventListener("change", setImage);
});

function setImage(e) {
	e.preventDefault();
	let status = e.target.value;
	if (status === "on") {
		inners.forEach((inner) => {
			inner.classList.add("flip");
		});
	} else {
		inners.forEach((inner) => {
			inner.classList.remove("flip");
		});
	}
}