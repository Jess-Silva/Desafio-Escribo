function somatorioMultiplos() {
    let numero = parseInt(document.getElementById("numero").value)
    if (numero < 0 || numero % 1 !== 0 || !Number.isInteger(numero)) {
        alert("Digite um nÃºmero inteiro e positivo.")
        return;
    }
    let soma = 0;
    let numerosDivisiveis = []
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
        numerosDivisiveis.push(i)
    }
    }
    document.getElementById("resultado").innerText = `O somatÃ³rio Ã©: ${soma}`
    document.getElementById("numerosDivisiveis").innerText = `Foram somados os nÃºmeros: ${numerosDivisiveis}`
}