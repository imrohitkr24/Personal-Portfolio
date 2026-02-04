function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDiv.innerHTML = "Please enter valid values.";
        resultDiv.style.color = "red";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db'; // Blue
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        color = '#2ecc71'; // Green
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        color = '#f1c40f'; // Yellow
    } else {
        category = 'Obese';
        color = '#e74c3c'; // Red
    }

    resultDiv.innerHTML = `BMI: <span>${bmi}</span> <br> <span style="color:${color}">${category}</span>`;
    resultDiv.style.color = "#fff";
}
