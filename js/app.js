// Deposit Id: deposit-amount, deposit-input, deposit-button
// Withdraw Id: withdraw-amount, withdraw-input, withdraw-button
// Total Amount Id: total-balace

//All Function
function getValueById(idName) {
  const tagId = document.getElementById(idName);
  const previousValueText = tagId.innerText;
  const value = parseFloat(previousValueText);
  return value;
}

function getInputValue(idName) {
  const inputField = document.getElementById(idName);
  const inputValue = inputField.value;
  let inputValueNum;
  if (!isNaN(inputValue)) {
    inputValueNum = parseFloat(inputValue);
  } else {
    alert("Please enter a valid number");
  }
  inputField.value = "";
  return inputValueNum;
}

function inputToTotal(idName, getAmount) {
  const previousTotal = getValueById(idName);

  const newTotal = previousTotal + getAmount;
  document.getElementById(idName).innerText = newTotal;

  return newTotal;
}

function updateTotal(amount, isAdd) {
  const previousTotal = getValueById("total-balance");
  console.log(previousTotal);
  const withdrawBalance = getValueById("withdraw-amount");
  const depositBalance = getValueById("deposit-amount");
  const newTotal = depositBalance - withdrawBalance + 1200;

  document.getElementById("total-balance").innerText = newTotal;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    let inputValue = getInputValue("deposit-input");
    if (inputValue > 0) {
      inputToTotal("deposit-amount", inputValue);
      updateTotal(inputValue);
    } else {
      alert("Please enter a number more than zero");
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    let inputValue = getInputValue("withdraw-input");
    let totalBalace = getValueById("total-balance");
    if (inputValue > 0 && totalBalace >= inputValue) {
      inputToTotal("withdraw-amount", inputValue);
      updateTotal(inputValue);
    } else {
      alert(
        "Please enter a number more than zero or your withdraw amount is bigger than total amount!"
      );
    }
  });

// Keypress event
document
  .getElementById("deposit-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let inputValue = getInputValue("deposit-input");
      if (inputValue > 0) {
        inputToTotal("deposit-amount", inputValue);
        updateTotal(inputValue, true);
      } else {
        alert("Please enter a number more than zero");
      }
    }
  });

document
  .getElementById("withdraw-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let inputValue = getInputValue("withdraw-input");
      let totalBalace = getValueById("total-balance");
      if (inputValue > 0 && totalBalace >= inputValue) {
        inputToTotal("withdraw-amount", inputValue);
        updateTotal(inputValue, false);
      } else {
        alert(
          "Please enter a number more than zero or your withdraw amount is bigger than total amount!"
        );
      }
    }
  });
