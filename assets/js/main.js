// array con ingrediente e prezzo
var ingredienti = [
    ["cheese", "2"],
    ["tomato", "1.50"],
    ["egg", "1.50"],
    ["lettuce", "1.50"],
    ["mustard", "1"],
    ["ketchup", "1"]
];

// funzione per mettere gli ingredienti nell'html
function listaIngredienti(lista, el) {
    var i = 0;
    while (i < lista.length) {
        el.insertAdjacentHTML("beforeend", `
        
        <div class="col-6 form-group">
            <img src="./assets/img/${lista[i][0]}.svg" alt="${lista[i][0]}">
            <label for="${lista[i][0]}">${lista[i][0]}</label>
            <input type="checkbox" name="${lista[i][0]}" id="${lista[i][0]}" data-price="${lista[i][1]}">
            <span>add</span>
        </div>

        `);
        i++;
    }
}

listaIngredienti(ingredienti, document.querySelector(".row"));

console.log(ingredienti);