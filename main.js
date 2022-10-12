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
    var loss = Math.abs((initial - current) * quantity);
    var lossPercentage = Math.abs(((loss / initial) * 100);

    showOutput(
      `You suffered a loss of ${loss} and by ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = Math.abs((current - initial) * quantity);
    var profitPercentage = Math.abs((profit / initial) * 100);

    showOutput(
      `You gained a profit of ${profit} and by ${profitPercentage}%`
    );
  } else {
    showOutput(`No Gain, No Loss`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
