

function setDate() {
	const now = new Date();
	
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const secondHand = document.querySelector('.second-hand');
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	
	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	const minHand = document.querySelector('.min-hand');
	minHand.style.transform = `rotate(${minsDegrees}deg)`;
	
	const hours = now.getHours();
	const hourDegrees = ((hours / 12) * 360) + 90;
	const hourHand = document.querySelector('.hour-hand');
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	console.log(seconds);
}

setInterval (setDate, 1000);