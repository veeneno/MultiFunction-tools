const itens = document.getElementById('itens');
const itemSorteado = document.getElementById('itemSorteado');
const addItem = document.getElementById('addItem');
const querRemover = document.getElementById('querRemover');
let elementos = [];
itens.textContent = elementos.join('\n');

function adicionarItem(){
    let add_item = String(addItem.value);
    elementos.push(add_item);
    itens.textContent = elementos.join('\n');
    return elementos;
}
function removerItem(){
    elementos.pop();
    itens.textContent = elementos.join('\n');
    console.log(elementos);
    return elementos;
}
function girarRoleta(){
    let elements = Number(elementos.length);
    if(elements <= 0){
        itemSorteado.textContent = 'adicione pelo menos 1 item'
    }
    let num = Math.floor(Math.random() * elements);
    console.log(elementos[num]);
    itemSorteado.textContent = elementos[num];
    if(querRemover.checked) {
        elementos.splice(num, 1);
    }
    itens.textContent = elementos.join('\n');
    return elementos;
}
