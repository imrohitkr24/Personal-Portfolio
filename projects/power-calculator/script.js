function calculatePower() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(base) || isNaN(exponent)) {
        resultDiv.innerText = "Please enter valid numbers.";
        resultDiv.style.color = "red";
        return;
    }

    const result = Math.pow(base, exponent);

    resultDiv.innerText = `Result: ${result}`;
    resultDiv.style.color = "#fff";
}
