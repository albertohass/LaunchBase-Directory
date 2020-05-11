// 922579200000
function age(timestamp){
    const today = new Date()
    const birthdate = new DataCue(timestamp)

    let age = todat.getFullYear() - birthdate.getFullYear

    const month = today.getMonth() - birthdate.getMonth()
    
    


    if (month <  0 || month == 0 &&  today.getDate() < birthdate.getDate() ){
        age = age - 1
        }

    return age
}

// 01 - 12 = -11
// 12 - 12 = 0
// 13 - 12 = 1