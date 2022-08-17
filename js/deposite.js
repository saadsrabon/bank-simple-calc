// Caching Elements For Working
const depositeItem = document.getElementById('deposite-item')
const balanceItem = document.getElementById('balance-item')
const WithdrawElement = document.getElementById('withdraw-item')
const withdrawBtn = document.getElementById('withdraw-btn')
const depositeInputElement =document.getElementById('deposite-input')
const depsoiteBtn = document.getElementById('deposite-btn')
/*** step1:  Clcik button
 *   input value push to DEposit 
 * input value add to Balance
 *   ***/
// addEvent Listener To Depsoite Button
depsoiteBtn.addEventListener('click' ,(e)=> {
 e.preventDefault()
    // getting Deposite value
   const depositeValue =depositeInputElement.value;
   const depositeValuemain = parseFloat(depositeValue)
   const previousValuestring = depositeItem.innerText;
   const presviousValue =parseFloat(previousValuestring)

//    adding to value to get final result
   const currentDepositValue =depositeValuemain + presviousValue;

   depositeItem.innerText =currentDepositValue

//    Balance value calculation
   const balanceValue =depositeInputElement.value;
   
   const balanceValuemain = parseFloat(balanceValue)
   const previousbalanceValuestring = balanceItem.innerText;
   const presviousbalanceValue =parseFloat(previousbalanceValuestring)

//    adding to value to get final result
   const currentbalanceValue =balanceValuemain + presviousbalanceValue ;

   balanceItem.innerText = currentbalanceValue;
  
   depositeInputElement.value = "";
})
console.log(balanceItem)

// Withdraw Calculation
withdrawBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // 
   const withdrawInput = document.getElementById('withdraw-input')
   const withdrawInputValuestring  =withdrawInput.value;
   const withdrawInputValue  =parseFloat(withdrawInputValuestring)

//    withdraw dashboard
const previousValuestring = WithdrawElement.innerText;
const presviousValue =parseFloat(previousValuestring)
const currentDepositValue =presviousValue + withdrawInputValue;

// balance

WithdrawElement.innerText =currentDepositValue;

const previousbalanceValuestring = balanceItem.innerText;
const presviousbalanceValue =parseFloat(previousbalanceValuestring)

const currentbalanceValue = presviousbalanceValue - withdrawInputValue;
balanceItem.innerText =currentbalanceValue;

})