const angle = document.querySelectorAll('.input');
const op = document.querySelector('.ind_output');
function calculate_angles(){
	let sum = Number(angle[0].value)+Number(angle[1].value)+Number(angle[2].value);
	if(sum == 180){
		op.innerHTML = "It is a Triangle";
	}
	else{
		op.innerHTML = "It is not a Triangle";
	}
}