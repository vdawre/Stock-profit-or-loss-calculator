var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = Math.trunc(Math.abs(loss / initial) * 100);

    showOutput(
      `Your loss is ${loss} and ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = Math.trunc(Math.abs(profit / initial) * 100);

    showOutput(
      `Your gained a profit of ${profit} and ${profitPercentage}%`
    );
  } else if (initial === current) {
    showOutput(`No Profit, No Loss`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
