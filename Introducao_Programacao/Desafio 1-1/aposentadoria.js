const nome = "Alberto";
const sexo = "F";
const idade = 60;
const contrib = 31;
const soma = idade + contrib;

const valHomem = sexo == 'M' && contrib >= 35 && soma >= 95;
const valMulher = sexo == 'F' && contrib >= 30 && soma >= 85;

if (valHomem || valMulher){
    console.log(`${nome} você pode se aposentar`)
}
else{
    console.log(`${nome} você não pode se aposentar`)
}


/* if (sexo == "M" && contrib >= 35){
    if(soma >= 95){
        console.log(`${nome} você pode se aposentar`)
    }
    else{
        console.log(`${nome} você não pode se aposentar`)
    }
}else if (sexo == "F" && contrib >= 30 ){
    if (soma >= 85) {
        console.log(`${nome} você pode se aposentar`)
    }
    else{
        console.log(`${nome} você não pode se aposentar`)
    }
}
 */
