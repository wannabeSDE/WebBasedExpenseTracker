let expenseNameObj = document.querySelector('#expenseName');
let expenseAmountObj = document.querySelector('#expenseAmount');
const table = document.querySelector('.tablebody');
let total = document.querySelector('.total-expense').textContent;
total = 0;
localStorage.setItem('Total', '0');

document.querySelector('#btn').addEventListener('click', addExpense);

function addExpense(e){
     console.log(e.target.className);
     let expenseName = expenseNameObj.value;
     let expenseAmount = expenseAmountObj.value;
     console.log("Input Values: "+expenseName+" "+expenseAmount);

     const td1 = document.createElement('td');
     td1.className = "column";
     td1.appendChild(document.createTextNode(expenseName));
     const td2 = document.createElement('td');
     td2.appendChild(document.createTextNode(expenseAmount));
     td2.className = "column";

     const tr = document.createElement('tr');
     tr.className = 'row';
     tr.appendChild(td1);
     tr.appendChild(td2);

     table.appendChild(tr);

     console.log(tr);
     console.log(table);

     let calTotal = parseInt(localStorage.getItem('Total'));
     calTotal = calTotal + parseInt(expenseAmount);
     localStorage.setItem('Total', calTotal);
     console.log(calTotal);

     document.querySelector('.total-expense').innerText = calTotal;

     expenseNameObj.value = "";
     expenseAmountObj.value = "";
     e.preventDefault(); 
}