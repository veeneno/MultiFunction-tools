const pessoas = document.getElementById('pessoas');
const gasto = document.getElementById('gasto');
const submit = document.getElementById('submit');
const rests = document.getElementById('rests');
const local = document.getElementById('local');
let numeroPessoas;
let gastoTotal;
let localidad;
let possivelRestaurant = [];
let res1 = { nome: "McDonalds", valor: 30 };
let res2 = { nome: "spoleto", valor: 40 };
let res3 = { nome: "miwasushi", valor: 90 };
let res4 = { nome: "outback", valor: 120 };
let res5 = { nome: "bar do ze", valor: 20 };
let res6 = { nome: "feijoada", valor: 45 };
let res7 = { nome: "feira de rua", valor: 10 };
let res8 = { nome: "Restaurante do jaquim", valor: 200 };
let res9 = { nome: "fervoroso", valor: 60};
let restaurantes = [res1, res2, res3, res4, res5, res6, res7, res8, res9];

function showRestaurants() {
    numeroPessoas = Number(pessoas.value);
    gastoTotal = Number(gasto.value);
    possivelRestaurant = [];

    if(gastoTotal < 10){
        rests.textContent = 'O gasto minimo e 10 reais';
    }
    else if(numeroPessoas < 1 ){
        rests.textContent = 'Ao menos 1 pessoa tem que ir';
    }
    else{
        for (let i = 0; i < restaurantes.length; i++) {
            if (restaurantes[i].valor * numeroPessoas <= gastoTotal) {
                possivelRestaurant.push(restaurantes[i].nome + " $" + restaurantes[i].valor * numeroPessoas);
            }
        }
        
        mudarP();
    }
}

function mudarP(){

    rests.textContent = possivelRestaurant.join(' | ');

}


