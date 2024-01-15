const passwordTamanho = document.getElementById('passwordLenght');
const lc = document.getElementById('lc');
const uc = document.getElementById('uc');
const num = document.getElementById('num');
const sym = document.getElementById('sym');
const passgenerated = document.getElementById('passgenerated');

let passwordLenght;
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;

function generatePassword(lenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@#$%&*';

    lenght = passwordTamanho.value;

    let allowedChars = "";
    let password = "";

    if(lc.checked){
        includeLowercase = true;
    }else{
        includeLowercase = false;
    }
    if(uc.checked){
        includeUppercase = true;
    }else{
        includeUppercase = false;
    }
    if(num.checked){
        includeNumbers = true;
    }else{
        includeNumbers = false;
    }
    if(sym.checked){
        includeSymbols = true;
    }else{
        includeSymbols = false;
    }

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    console.log(allowedChars);

    if(lenght <= 0){
        return '(password lenght must be at least 1)';

    }
    if(allowedChars.length === 0){
        return '(at least 1 set of character needs to be selected)';
    }
    
    for(let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
    
}

function showPass(){

    const password = generatePassword(passwordLenght, 
        includeLowercase, 
        includeUppercase, 
        includeNumbers, 
        includeSymbols);

    passgenerated.textContent = 'a senha gerada foi\n' + password

    console.log(password);
}

