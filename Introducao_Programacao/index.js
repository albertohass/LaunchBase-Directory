// Criar um programa que calcula a média
// das notas entre os alunos e envia
// msg do calculo da media 
// se a media foi maioe que 6 parabenizar a turma

const alunos = [
    {
        nome: "Alberto",
        nota: 10
    },
    {
        nome: "Evelen",
        nota: 9
    },
    {
        nome: "Fulano",
        nota: 2
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
if(media >= 5){
    console.log(`Parábens pelo ${media} turma`);
}
else{
    console.log("Nota baixa");
}


const nomeAlunos = ["Alberto", "Evelen", "fulano"];
console.log(nomeAlunos[0])