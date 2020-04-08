const usuarios = [
    {
        nome:"Alberto",
        receitas:[100,15.5,20.4],
        despesas:[80,13.5,5]
    },
    {
        nome:"Evelen",
        receitas:[180,35.5,60.4],
        despesas:[200,40.5,30]
    },
    {
        nome:"Pedro",
        receitas:[50,35.5,40.4],
        despesas:[80,45.5,60]
    },
];

function somaNumeros (numeros){
    let soma = 0;
    for (let i= 0; i < numeros.length; i++){
        soma = soma + numeros[i];
    }
    return soma;
}

function calculaSaldo(receitas,despesas){
    let saldo;
    despesas = somaNumeros(despesas);
    receitas = somaNumeros(receitas);
    saldo = receitas - despesas;
    return saldo;
}

for (let i = 0; i < usuarios.length; i++){
    const saldo = calculaSaldo(usuarios[i].receitas,usuarios[i].despesas)

    if(saldo >= 0){
        console.log(`${usuarios[i].nome} possui saldo Positivo de R$${saldo}`)
    }
    else{
        console.log(`${usuarios[i].nome} possui saldo Negativo de R$${saldo}`)
    }
}