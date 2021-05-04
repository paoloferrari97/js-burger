// array con ingrediente e prezzo
var ingredienti = [
    ["cheese", "2"],
    ["tomato", "1.50"],
    ["egg", "1.50"],
    ["lettuce", "1.50"],
    ["mustard", "1"],
    ["ketchup", "1"]
];

// lista coupon (codice sconto | percentuale di sconto)
var listaCoupon = [
    ["unto123", "20"],
    ["coupon87", "50"],
    ["approfitta2021", "75"],
    ["gratis00", "100"]
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

// richiamo la funzione per scrivere ingredienti in html
listaIngredienti(ingredienti, document.querySelector(".row"));

// funzione click del bottone (prezzo + prezzo ingrediente - sconto coupon)
document.querySelector("button").addEventListener("click", function () {
    var nomeBurger = document.getElementById("nome_burger").value;
    var sconto = document.getElementById("coupon").value.toLowerCase();
    if (nomeBurger != "") {
        var prezzo = 7.99;
        var checks = document.querySelectorAll("input[type=\"checkbox\"]");
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                prezzo += Number(checks[i].getAttribute("data-price"));
            }
        }
        var scontoyn = false;
        for (var i = 0; i < listaCoupon.length; i++){
            if (listaCoupon[i][0] == sconto) {
                prezzo = (prezzo * (100 - listaCoupon[i][1])) / 100;
                document.getElementById("sconto").innerHTML = `[-${listaCoupon[i][1]}%]`;
                scontoyn = true;
            }
        }
        if (scontoyn) {
        } else {
            document.getElementById("sconto").innerHTML = "";
        }
        document.getElementById("prezzo").innerHTML = prezzo.toFixed(2);
    } else {
        alert("Inserisci il nome del tuo burger!");
    }
});