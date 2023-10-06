
let total = "";

const displayLength = () => {
	if (total.length >= 17){
		document.getElementById("display").innerHTML = total.slice(-17);
	} else {
		document.getElementById("display").innerHTML = total;
	}
}

const calcTotal = () => {
	
	total = eval(total);
	
}

const onClear = () => {
	document.getElementById("display").innerHTML = "";
	total = "";
	displayLength();
}

const onDelete = () => {
	const content = document.getElementById('display').innerText;
	const delContent = content.slice(0, -1);
	document.getElementById("display").innerHTML = delContent;

	total = delContent;
	displayLength();

}

const onNumberBtnClick = ({target})=> {
	const value = target.value;
	document.getElementById("display").innerHTML += value;

	total += value;
	displayLength();
}

const onOperatorClick = ({target}) => {
	const operator = target.value;
	document.getElementById("display").innerHTML += operator;

	total += operator;
	displayLength();
}

const onClickEqualTo = ()=>{
	calcTotal();
	document.getElementById("display").innerHTML = total;
	displayLength();
}


const equalToMouseOver = ({target}) => {
	target.style.backgroundColor = "rgb(255, 87, 51)";
}

const equalToMouseOut = ({target}) => {
	target.style.backgroundColor = "rgb(255, 110, 51)"
}
