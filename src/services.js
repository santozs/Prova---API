export function dobro(numero)
{
    return numero*2;
}

export function coresprimaria(cor1){
    let situ;
    if(cor1 == "azul" || cor1 == "vermelho" || cor1 == "amarelo" ){
     situ= true;
    }
    else{
        situ =false
    }
    

     return situ;
}

export function cinema(ingresso){
    let situ = 15
    if(ingresso = "Meia"){
        situ = situ/2;
    }

    return situ;
}