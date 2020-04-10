const user = {
    name: "Alberto",
    transactions: [],
    balance: 0
};

function createTransaction (transaction){
    user.transactions.push(transaction)
    
    if(transaction.type == "Credit"){
        user.balance = user.balance + transaction.value
    }
    else if (transaction.type == "Debit") {
        user.balance =  user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){
    let hightransaction
    let highvalue = 0

    for (transaction of user.transactions){
        if (transaction.type == type && transaction.value > highvalue){
            
            highvalue = transaction.value
            hightransaction = transaction

        }
    }
    return hightransaction
}

function getAverageTransactionValue(){
    let AvgTransaction = 0
    for (transaction of user.transactions){
        AvgTransaction = AvgTransaction + transaction.value
    }
    AvgTransaction = AvgTransaction / user.transactions.length
    return AvgTransaction
}

function getTransactionsCount(){
    let count = {
        debit: 0,
        credit: 0
    }

    for (transaction of user.transactions){
        if (transaction.type == "Credit"){
            count.credit++
        }
        else if(transaction.type == "Debit"){
            count.debit++
        }
    }
    return count
}

createTransaction({type: "Credit",value: 50})
createTransaction({type: "Credit",value: 120})
createTransaction({type: "Debit",value: 80})
createTransaction({type: "Debit",value: 30})

console.log(user.balance) // 60

console.log(getHigherTransactionByType("Credit"))
console.log(getHigherTransactionByType("Debit"))

console.log(getAverageTransactionValue())
console.log(getTransactionsCount())