module.exports = {
    age: function age(timestamp){
        const today = new Date()
        const birth = new Date(timestamp)

        let age = today.getFullYear() - birth.getFullYear()
        const month = today.getMonth - birth.getMonth

        if (month < 0 || month == 0 && today.getDate() < birth.getDate()){
            age = age - 1
        }

        return age
    },
    graduation: function graduation(type){
        let graduation = type

        if (graduation == "Medio") graduation = "Ensino Médio"
        else if (graduation == "Superior") graduation = "Ensino Superior"
        else if (graduation == "Mestrado") graduation = "Mestrado"
        else if (graduation == "Superior") graduation = "Doutorado"

        return graduation
    },
    date: function date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return(`${year}-${month}-${day}`)
    }
}