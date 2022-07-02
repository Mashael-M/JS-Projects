// JavaScript 101 project. Mashael Alshlash.

let Books = [
    [1, 'Start with why', 'Simon Sinek', 80.0, 13],
    [2, 'But how do it know', 'J.Clark Scott', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero to One', 'Peter Thiel', 45.0, 12],
    [5, 'You don\'t Know Js', 'Kyle Simpson', 39.9, 9]
];


function checkbook(element){
    let e = element;
    for ( let i = 0; i < Books.length; i++) {
        for (let j = 0; j < Books[i].length; j++) {
            if (Books[i][j] == e){
                console.log('The Book is found :'+Books[i].join(' | '));
            }                            
        }                                   
    }
}
checkbook('Peter Thiel'); 


bill = (Btitle, Quantity, currentBalance) =>{
    for(book of Books){
        if(Btitle === book[1] && book[4] - Quantity > 0 && currentBalance >= book[3] * Quantity){
            console.log(`Bill For Book "${book[1]}" is available.
            Item      Description         Amount
            ------  -----------------  ------
            ${book[0]}         ${book[1]}          ${book[3] * Quantity}
            `)
            book[4] -= Quantity
            break
        }
        else if(Btitle === book[1] && book[4] - Quantity < 0){
            console.log("This Book is Out of Stuck");
        }
        else if(Btitle === book[1] && currentBalance < book[3] * Quantity){
            console.log("Your Balance is Not Enough To Buy This Book");
        }
    }
}
bill('But how do it know', 2, 70);
bill('You don\'t Know Js', 1, 250)