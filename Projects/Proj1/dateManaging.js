let d;
let year;
let month;
let date;
let day;
let hrs1;
let mins1;
let sec1;
let setAmOrPm;

const settingDate = () => {
	d = new Date();

	year = d.getFullYear();
	month = d.getMonth();
	date = d.getDate();
	day = d.getDay();

	switch(day){
		case 0: 
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		};

	switch(month){
		case 0:
			month = "Jan";
			break;
		case 1:
			month = "Feb";
			break;
		case 2:
			month = "Mar";
			break;
		case 3:
			month = "Apr";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "Jun";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "Aug";
			break;
		case 8:
			month = "Sep";
			break;
		case 9:
			month = "Oct";
			break;
		case 10:
			month = "Nov";
			break;
		case 11:
			month = "Dec";
			break;
		
	}
}
settingDate();

const setDate = () => {
	document.getElementById("date").innerHTML = `${day}, ${date} ${month} ${year}`;
}
setDate();

const changeDay = () => {
	hrs1 = d.getHours();
	mins1 = d.getMinutes();
	sec1 = d.getSeconds();
	if (hrs1 >= 12){
		hrs1 %= 12;
		setAmOrPm = "PM";
	} else {
		setAmOrPm = "AM";
	}
	settingDate();
	setDate();
}

setInterval(changeDay, 1000);

