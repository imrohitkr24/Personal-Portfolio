let currentBalance = 0;

const balanceDisplay = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const messageDisplay = document.getElementById('message');

function updateDisplay() {
    balanceDisplay.innerText = `$${currentBalance.toFixed(2)}`;
}

function showMessage(msg, color) {
    messageDisplay.innerText = msg;
    messageDisplay.style.color = color;
    setTimeout(() => {
        messageDisplay.innerText = '';
    }, 3000);
}

function deposit() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid amount.", "red");
        return;
    }

    currentBalance += amount;
    updateDisplay();
    showMessage(`Successfully deposited $${amount}`, "#00ff88");
    amountInput.value = '';
}

function withdraw() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Please enter a valid amount.", "red");
        return;
    }

    if (amount > currentBalance) {
        showMessage("Insufficient funds!", "red");
        return;
    }

    currentBalance -= amount;
    updateDisplay();
    showMessage(`Successfully withdrew $${amount}`, "#ff3333");
    amountInput.value = '';
}
