const usuarios = [
    {
        nome: "Alberto",
        tecnologias: ["PHP","JavaScript"]
    },
    {   nome: "Pedro",
        tecnologias: ["C","Java"]
    },
    {
        nome: "Arthur",
        tecnologias: ["C","Python"]
    }
];


function checaTecnologia(usuario){
    for(let i= 0; i < usuario.tecnologias.length; i++){
        if (usuario.tecnologias[i] == "PHP"){
            return true;
        }
        else{
            return false;
        }
    }
}

for (let i = 0; i < usuarios.length; i++){
    const usaPHP = checaTecnologia(usuarios[i]);

    if (usaPHP){
        console.log(`O usuário ${usuarios[i].nome} usa PHP`);
    }
}
