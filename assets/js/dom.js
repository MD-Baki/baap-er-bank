// Deposit Js Start
document.getElementById('deposit_btn').addEventListener('click', function () {

    const depositField = document.getElementById('deposit_field');
    const depositAmountString = depositField.value;
    const depositAmountNumber = parseFloat(depositAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotalNumber + depositAmountNumber;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalNumber = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalNumber + depositAmountNumber;
    balanceTotalElement.innerText = newBalanceTotal;

})
// ||Deposit Js End||

// Withdrow Js Start
document.getElementById('withdrow_btn').addEventListener('click', function () {

    const withdrowField = document.getElementById('withdrow_field');
    const withdrowAmountString = withdrowField.value;
    const withdrowAmountNumber = parseFloat(withdrowAmountString);

    withdrowField.value = '';

    const withdrowTotalElement = document.getElementById('withdraw_total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotalNumber = parseFloat(previousWithdrowTotalString);

    const newWithdrowTotal = previousWithdrowTotalNumber + withdrowAmountNumber;
    withdrowTotalElement.innerText = newWithdrowTotal;

    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalNumber = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalNumber - withdrowAmountNumber;
    balanceTotalElement.innerText = newBalanceTotal;

})
// ||Withdrow Js End||