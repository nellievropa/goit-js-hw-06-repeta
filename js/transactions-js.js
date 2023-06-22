import transactionHistory from './data/transactions.js';
//  так виглядає наша строка і ми будемо її робити
//   <tr>
/* <td>ID транзакції</td>
<td>Сума</td>  
<td>Дата</td>  
<td>Хто</td>  
<td>Тип транзакції</td> 
<td>Ім'я рахунку</td>  
<td>Номер рахунку</td>    
</tr> */

const makeTransactionTableRowMarkup = ({id, amount, date, business, type, name, account}) => {
    console.log(transaction);

    return
    <tr>
    <td>${id}</td>
    <td>${amount}</td>  
    <td>${date}</td>  
    <td>${business}</td>  
    <td>${name}</td> 
    <td>${type}</td>  
    <td>${account}</td>    
    </tr> 
    ;

};
console.log(transactionHistory);
console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const tableEl = document.querySelector('.js-trasaction-table');
const makeTransactionTableRows = transactionHistory
.map(makeTransactionTableRowMarkup)
.join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

console.log(makeTransactionTableRows);

