const min = document.getElementById('min');
const max = document.getElementById('max');
const vzs = document.getElementById('vzs');
const sort = document.getElementById('sort');

function sortearNumero(){

    maxn = Number(max.value);
    minn = Number(min.value);
    vzsn = Number(vzs.value);
    let numeros = [];

    if(maxn < 1 || minn < 1 || vzsn < 1){
        sort.textContent = "insira no minimo 1!";
    }else{
        for(let i = 0; i < vzsn; i++){
            let num = Math.floor(Math.random() * (maxn - minn + 1)) + minn;
            numeros.push(num);
        }
        
        if(vzsn < 2) {
            sort.textContent = 'o numero sorteado foi: ' + numeros;
        }else{
            sort.textContent = 'os numeros sorteados foram: ' + numeros.join("  |  ");
        }
    }

    
    
}
