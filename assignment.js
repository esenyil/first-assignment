console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter((transaction) => {
        if(transaction.credit_card_company == 'VISA'){
            const date = new Date(transaction.transaction_date);
            const year = date.getFullYear()
            if( year >= 2015){
                if(transaction.price > 50){
                    return transaction
                }
                
            }
        }
    });
}
console.log(filterFunction(transactions))

// Assignment 2:
const aboveAverageFunction = (data) => {
    let sum = 0;
    data.forEach(item => {
        sum = sum + parseFloat(item.price);
    })
    let average = sum / data.length;
    console.log(sum)
    console.log(average)
    return data.map(transaction => {
        if (parseFloat(transaction.price) < average) {
            transaction.isAboveAverage = false;
            return transaction;
        } else {
            transaction.isAboveAverage = true;
            return transaction
        }
    })
}

console.log(aboveAverageFunction(transactions))

