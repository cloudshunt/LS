/**
 * 
 */


function isItemAvailable(targetId, transactions) {
  // filter and get all the specific targetId tansaction
  let targetIdTransactions = transactionsFor(targetId, transactions);

  let result = targetIdTransactions.reduce((totalQuantity, curTransaction) => {
    if (curTransaction.movement === 'in') {
      return totalQuantity + curTransaction.quantity;
    } else {
      return totalQuantity - curTransaction.quantity;
    }
  }, 0);

  if (result > 0) console.log(true);
  else console.log(false);
}

function transactionsFor(targetId, transactions) {
  return transactions.filter((transaction) => transaction.id === targetId);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true