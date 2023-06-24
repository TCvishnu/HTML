let hours;
let amOrPm;
let dispHrs;
let dispMin;
let dispSec;
let hours24;
let pageElement;

const timer = () => {
	const d = new Date();
	hours24 = d.getHours();
	hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
		
		if (hours >= 12){
			hours %= 12;
			amOrPm = "PM";
		} else {
			amOrPm = "AM";
		}
		dispHrs = hours.toString().padStart(2, "0");
		dispMin = minutes.toString().padStart(2, "0");
		dispSec = seconds.toString().padStart(2, "0");

		document.getElementById("time").innerHTML = `${dispHrs}:${dispMin}:${dispSec} ${amOrPm}`
		pageElement = document.getElementById("page1");

		if (hours24 < 5){
			pageElement.style.backgroundImage = "url('images/night.png')";
			pageElement.style.color = "indianred";
		} else if (hours24 < 12){
			pageElement.style.backgroundImage = "url('images/morning.png')";
			pageElement.style.backgroundRepeat = "no-repeat";
			pageElement.style.backgroundSize = "cover";
			pageElement.style.color = "tomato";


		} else if (hours24 < 17){
			pageElement.style.backgroundImage = "url('images/noon.png')";
			pageElement.style.color = "mintcream";
		} else if (hours24 < 19){
			pageElement.style.backgroundImage = "url('images/sunset.png')";
			pageElement.style.color = "black";
		} else {
			pageElement.style.backgroundImage = "url('images/night.png')";
			pageElement.style.color = "indianred";
		}
	}



timer();
setInterval(timer, 1000);
