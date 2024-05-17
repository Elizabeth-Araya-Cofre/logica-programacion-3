function calcularFactorial() {
    let input;
    do {
        input = prompt("Ingrese un número:");
        input = parseFloat(input);
        if (isNaN(input)) {
            alert("Error: Por favor, ingrese un número válido.");
        }
    } while (isNaN(input));

    let factorial = 1;
    for (let i = 2; i <= input; i++) {
        factorial *= i;
    }

    document.getElementById('result').innerText = `El factorial de ${input} es: ${factorial}`;
}
