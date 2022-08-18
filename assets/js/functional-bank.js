// Main Function Js Start
// Set Input Field 
function getInputFieldValueById(inputFildId) {
    const inputField = document.getElementById(inputFildId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
// Set Inner Text 
function getInnerTextById(innerTextElementId) {
    const innerTextField = document.getElementById(innerTextElementId);
    const innerTextString = innerTextField.innerText;
    const innerTextValue = parseFloat(innerTextString);
    return innerTextValue;
}
// Set Inner Text By ID
function textElementValueById(innerTextElementId, newValue) {
    const textElement = document.getElementById(innerTextElementId);
    textElement.innerText = newValue;
}
// ||Main Function Js End||

// Deposit Total Js Start
document.getElementById('deposit_btn').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit_field');
    const previousDepositTotal = getInnerTextById('deposit_total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    textElementValueById('deposit_total', newDepositTotal);

    const previousBalanceTotal = getInnerTextById('balance_total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    textElementValueById('balance_total', newBalanceTotal);

})
// ||Deposit Total Js End||

// Withdrow Total Js Start
document.getElementById('withdrow_btn').addEventListener('click', function () {

    const newWithdrowAmount = getInputFieldValueById('withdrow_field');
    const previousWithdrowTotal = getInnerTextById('withdraw_total');
    const newWithdrowTotal = newWithdrowAmount + previousWithdrowTotal;
    textElementValueById('withdraw_total', newWithdrowTotal);

    const previousBalanceTotal = getInnerTextById('balance_total');
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    textElementValueById('balance_total', newBalanceTotal);

})
// ||Withdrow Total Js End||