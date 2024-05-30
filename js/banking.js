//Deposite by clickilg deposite button--------

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposit-input');
    const newDepositeText = depositeInput.value ;
    const newDepositeAmount = parseFloat(newDepositeText);
    
  // input field error solve ---------
    if (typeof (newDepositeAmount) == 'false' | newDepositeText == '') {
      document.getElementById('deposite-field-error').style.display = 'block'
      return
    }
    document.getElementById('deposite-field-error').style.display = 'none'


   // min value error solve ------
    if(newDepositeAmount < 1) {
      document.getElementById('min-deposit-error').style.display = 'block'
      return
    }
    document.getElementById('min-deposit-error').style.display = 'none'

   //deposite total----
    const depositeTotal = document.getElementById('deposit-total');
    const priviousDepositext = depositeTotal.innerText;
    const priviousDepositeTotal = parseFloat(priviousDepositext);

    const newDepositeTotal = newDepositeAmount + priviousDepositeTotal;
    depositeTotal.innerText = newDepositeTotal;
    

   //balance update for Deposite -----
   const balanceTotal = document.getElementById('balace-total');
   const priviousBalanceTotalText = balanceTotal.innerText;
   const priviousBalanceTotalAmount = parseFloat(priviousBalanceTotalText);

   const newBalanceTotal = priviousBalanceTotalAmount + newDepositeAmount;
   balanceTotal.innerText = newBalanceTotal;

   //clear value 
   depositeInput.value = ''


})






//withdraw by clicking withdraw button-----

document.getElementById('withdra-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInput = withdrawInput.value ;
    const newWithdrawAmount = parseFloat(newWithdrawInput);

  //  withdraw input field error solve ---------
        if (typeof (newWithdrawAmount) == 'false' | newWithdrawInput == '') {
          document.getElementById('withdraw-input-error').innerText = 'Withdraw input field is required'
          return
        }
        document.getElementById('withdraw-input-error').innerText = '';
    
    
 // min value error solve ------
        if(newWithdrawAmount < 10) {
          document.getElementById('withdraw-input-error').innerText = 'Withdraw should be min 10'
          return
        }
        document.getElementById('withdraw-input-error').innerText = '';

 //withdraw total------
     const withdrawTotal = document.getElementById('withdraw-total');
     const priviousWithdrawTotalText = withdrawTotal.innerText;
     const priviousWithdrawTotalAmount = parseFloat(priviousWithdrawTotalText);
   
     const NewWithdrawTotalAmount = priviousWithdrawTotalAmount + newWithdrawAmount;
     withdrawTotal.innerText = NewWithdrawTotalAmount;

 //Balance update for withdraw ------
    const balanceTotal = document.getElementById('balace-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmount = parseFloat(priviousBalanceTotalText);


 //withdraw should be less then total balance-------
    if(priviousBalanceTotalAmount < newWithdrawAmount) {
      document.getElementById('withdraw-input-error').innerText = 'NOO MONEY'
      return
    }

     document.getElementById('withdraw-input-error').innerText = ''

  const newBalanceTotal = priviousBalanceTotalAmount - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

 //clear value
  withdrawInput.value = ''


})