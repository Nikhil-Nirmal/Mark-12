const inpt = document.querySelectorAll('.input');
const op = document.querySelector('.area_output');
function btn_onclick() {
    let sum =  (Number(inpt[0].value) * Number(inpt[1].value))/2;
    op.innerHTML = 'The Area is '+sum+' units.';
    console.log(sum);
}

