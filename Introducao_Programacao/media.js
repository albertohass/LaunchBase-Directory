const alunosDaTurmaA = [
    {
        nome:"Alberto",
        nota:10
    },
    {
        nome:"Evelen",
        nota: 10
    },
    {
        nome:"Pedro",
        nota: 9
    },
    {
        nome: "novo aluno",
        nota: 6
    }
]

const alunosDaTurmaB = [
    {
        nome:"Matheus",
        nota:1
    },
    {
        nome:"Gustavo",
        nota: 4
    },
    {
        nome:"Natan",
        nota: 10
    },
    {
        nome:"Najatan",
        nota: 10
    }
]

function calculaMedia (alunos){
    let soma = 0;
    for(let i = 0; i < alunos.length; i++){
        soma +=  alunos[i].nota
    }
    const media = soma / alunos.length;
    return media
}

function validaNota(media, turma){
    if (media > 5){
        console.log(`A media da ${turma} foi de ${media} Parabéns`)
    }
    else {
        console.log(`A media da ${turma} foi de ${media} está abaixo`)
    }
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);


validaNota(media1, "turma A")
validaNota(media2, "turma B")