const pinInput = document.getElementById('pin');
const submitButton = document.getElementById('submit');
const outputDiv = document.getElementById('output');

const correctPin = '0000';
let balance = 100000; 

function displayBalance() {
    outputDiv.innerHTML = `Current Balance: $${balance}`;
}


submitButton.addEventListener('click', function () {
    const enteredPin = pinInput.value;

    if (enteredPin === correctPin) {

        displayBalance();

        outputDiv.innerHTML += '<br><label for="withdrawAmount">Enter Withdrawal Amount:</label>';
        outputDiv.innerHTML += '<input type="number" id="withdrawAmount" placeholder="Amount">';
        outputDiv.innerHTML += '<button id="withdraw">Withdraw</button>';


        const withdrawAmountInput = document.getElementById('withdrawAmount');
        const withdrawButton = document.getElementById('withdraw');


        withdrawButton.addEventListener('click', function () {
            const amount = parseFloat(withdrawAmountInput.value);

            if (amount <= balance) {
                balance -= amount;
                displayBalance();
                outputDiv.innerHTML += `<br>Withdrawal of $${amount} successful.`;
            } else {

                outputDiv.innerHTML += '<br>Insufficient funds. Please enter a valid amount.';
            }

    
            withdrawAmountInput.value = '';
        });
    } else {
    
        outputDiv.innerHTML = 'Incorrect PIN. Please try again.';
    }

    pinInput.value = '';
});
