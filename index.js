let numeros = [];
let nomeDePessoa = null; 

function converter_letrastonumeros_array_numeros(nomedePessoa) {

    let ind = 0;
    let temp = null;
    for (let caractere of nomedePessoa) {
        temp = caractere.normalize("NFD").toLowerCase();
        numeros[ind] = ((temp == "1") || (temp == "a") || (temp == "j") || (temp == "s")) ? 1 : 0;
        numeros[ind] = ((temp == "2") || (temp == "b") || (temp == "k") || (temp == "t")) ? 2 : numeros[ind];
        numeros[ind] = ((temp == "3") || (temp == "c") || (temp == "l") || (temp == "u")) ? 3 : numeros[ind];
        numeros[ind] = ((temp == "4") || (temp == "d") || (temp == "m") || (temp == "v")) ? 4 : numeros[ind];
        numeros[ind] = ((temp == "5") || (temp == "e") || (temp == "n") || (temp == "w")) ? 5 : numeros[ind];
        numeros[ind] = ((temp == "6") || (temp == "f") || (temp == "o") || (temp == "x")) ? 6 : numeros[ind];
        numeros[ind] = ((temp == "7") || (temp == "g") || (temp == "p") || (temp == "z")) ? 7 : numeros[ind];
        numeros[ind] = ((temp == "8") || (temp == "h") || (temp == "q")) ? 8 : numeros[ind];
        numeros[ind] = ((temp == "9") || (temp == "i") || (temp == "r")) ? 9 : numeros[ind];
        ind++;
    }
    temp = null;
    ind = 0;
}


nomeDePessoa = "João da Silva Soares de Sá";
converter_letrastonumeros_array_numeros(nomeDePessoa);
console.log(numeros);