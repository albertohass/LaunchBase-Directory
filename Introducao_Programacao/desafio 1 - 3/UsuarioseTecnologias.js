const usuarios = [
    {
        nome: "Alberto",
        tecnologias: ["SQL","JavaScript"]
    },
    {   nome: "Pedro",
        tecnologias: ["PHP","Java"]
    },
    {
        nome: "Arthur",
        tecnologias: ["C","Python"]
    }
];

for (let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}` )
}

