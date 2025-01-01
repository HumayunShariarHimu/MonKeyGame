let gameState = 0; // 0 for first round (win), 1+ for loss rounds
let totalMoney = 0;

function playGame(choice) {
  const moneyInput = document.getElementById('money');
  const resultElement = document.getElementById('result');
  const totalMoneyElement = document.getElementById('total-money');
  const messageElement = document.getElementById('message');

  const investment = parseFloat(moneyInput.value);

  if (isNaN(investment) || investment <= 0) {
    resultElement.textContent = "Please enter a valid investment amount!";
    return;
  }

  if (totalMoney === 0) {
    totalMoney = investment; // Initialize total money
  }

  if (gameState === 0) {
    totalMoney += investment; // Win: Double the money
    resultElement.textContent = `You chose ${choice}! You win! Your money is doubled.`;
    messageElement.textContent = "Be careful! Luck may turn against you...";
    gameState = 1; // Move to losing state
  } else {
    totalMoney -= investment; // Loss: Deduct investment
    resultElement.textContent = `You chose ${choice}. You lose! Your investment is gone.`;
    messageElement.textContent = "Choose Red or Green to play again!";
    gameState++; // Stay in losing state
  }

  // Display total money left
  totalMoneyElement.textContent = `Total Money: $${totalMoney}`;

  // Check if the player has lost all money
  if (totalMoney <= 0) {
    totalMoneyElement.textContent = "Total Money: $0. Game Over!";
    messageElement.textContent = "You ran out of money! Refresh to start again.";
    moneyInput.disabled = true; // Disable further inputs
    gameState = null; // Stop the game
  }
}