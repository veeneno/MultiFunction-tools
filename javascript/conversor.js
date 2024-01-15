const textBox = document.getElementById('textBox');
const toF = document.getElementById('toF');
const toC = document.getElementById('toC');
const result = document.getElementById('result');
let temp;
function convert() {
    if(toF.checked){
        temp = Number(textBox.value);
        temp = toFa(temp);
        result.textContent = temp.toFixed(1) + 'F';
    } else if(toC.checked) {
        temp = Number(textBox.value);
        temp = toCe(temp);
        result.textContent = temp.toFixed(1) + 'C';
    } 
    else {
        result.textContent = 'select a unit'
    }
}
function toFa(x) {
    return x = x * 9 / 5 + 32;
}
function toCe(x){
    return x = (x - 32) * (5/9);
}