const input = document.getElementById('num-input');
const result = document.getElementById('result');
const ans = document.getElementById('ans');
const clear = document.getElementById('clear');

clear.addEventListener('click',reset());

function reset(){
    input.value = null;
    result.value = null;
}

ans.addEventListener('click', () =>{
    result.value = eval(exp);
})
var exp;
function handleClick(el){
    exp = `${input.value}${el.innerText}`;
    input.value = exp;
    if(['+','-','*','/'].includes(el.innerText)) return; 
}

