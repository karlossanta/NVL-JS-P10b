var impares = [];
var pares = [];
for(i = 0; i < 50; i++) {
    var numero = Math.floor((Math.random() * 100) + 1)
    if (numero % 2 === 0) {
        pares.push(numero)
    } else {
        impares.push(numero)
    }
}
console.log(impares);
console.log(pares);