const ratingCards = document.querySelectorAll('.rating span');
const submutBtn = document.querySelector('.btn');
const ratePoint = document.getElementById('rate');
const blockSection = document.querySelector('.block');
const thankSection = document.querySelector('.thank');
const modeIcon = document.querySelector('.mode');

let rate = null;

ratingCards.forEach((ratingCards) => {
	
	ratingCards.addEventListener('click', (e) => {
		e.preventDefault()
		const activ = document.querySelector('.checked');
		if (activ) {
			activ.classList.remove('checked');
		}
		const card = e.target;
		card.classList.add('checked');
		rate = e.target.innerText;
	});
});

submutBtn.addEventListener('click', () => {
	if(rate) {
		ratePoint.innerText = rate;
		thankSection.classList.remove("hidden");
		blockSection.classList.add("hidden");

	}
})

modeIcon.addEventListener('click', () => {
	document.body.classList.toggle("white-mod");
	if(document.body.classList.contains("white-mod")) {
		modeIcon.src= "./images/moon.svg"
	} else {
		modeIcon.src= "./images/sun.svg"
	}
})
