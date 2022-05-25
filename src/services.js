export function dobro(numero) {
    return numero * 2;
}

export function coresprimaria(cor1) {
    let situ;
    if (cor1 == "azul" || cor1 == "vermelho" || cor1 == "amarelo") {
        situ = true;
    } else {
        situ = false
    }


    return situ;
}

export function cinema(inteira, meia, dia, brasil) {
    let mei = 14.25 * meia
    let situ = 28.5 * inteira

    if (brasil == 'Brasileira') {
        situ = 5 * situeira
        mei = 5 * meia

        return situ + mei;
    }
    if (dia == 'Quarta') {
        situ = 14.25 * situeira

        return situ + mei
    }
    return mei + situ
}

export function somar(a, b) {
    return a + b;
}

export function media(media1, media2, media3) {
    return (media1 + media2 + media3) / 3;
}

export function temperatura(temp) {
    if (temp >= 37) {
        return true
    } else {
        return false
    }
}

export function tabuada(numero) {
    let array = [];

    for (let i = 0; i <= 10; i++) {
        array[i] = i * numero;
    }
    return array;
}

export function text(t, c) {
    let e = 0
    for (let letter of t) {

        if (letter == c) {
            e++
        }

    }
    return e;
}

export function maiornumero(array) {
    let maior = 0;
    for (let item of array) {
        if (item > maior) {
            maior = item;
        }
    }
    return maior;
}