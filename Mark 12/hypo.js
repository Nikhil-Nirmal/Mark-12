const inp = document.querySelectorAll('.input');
const op = document.querySelector('.hypo_output');
function btn() {
    let sum = Number(inp[0].value)*Number(inp[0].value) + Number(inp[1].value)*Number(inp[1].value);
    let underRoot = Math.sqrt(sum);
    op.innerHTML = 'The Hypotaneous is '+underRoot;
}