function convertToBinary() {
    const decimalInput = document.getElementById('decimal');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const stepsDiv = document.getElementById('steps');

    
    errorDiv.style.display = 'none';
    
    const decimal = parseInt(decimalInput.value);

    if (isNaN(decimal) || decimal < 0) {
        errorDiv.style.display = 'block';
        resultDiv.textContent = 'Binary will appear here';
        stepsDiv.textContent = '';
        return;
    }

    const binary = decimal.toString(2);
    resultDiv.textContent = binary;

    let steps = `${decimal} in binary is ${binary}`;
    stepsDiv.textContent = steps;
}

document.getElementById('decimal').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertToBinary();
    }
});