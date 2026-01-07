let input = document.getElementById("input");

// input par click karte hi zero hat jaye
function removeZero() {
    if (input.value === "0") {
        input.value = "";
    }
}

// sirf valid keys allow + double operator block
function validateInput(e) {

    const allowKey = [
        "0","1","2","3","4","5","6","7","8","9",
        ".", "+", "-", "/", "*", "%",
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Enter"
    ];

    let lastChar = input.value.slice(-1);

    // invalid key block
    if (!allowKey.includes(e.key)) {
        e.preventDefault();
    }

    // double operator block (keyboard)
    if (isOperator(e.key) && isOperator(lastChar)) {
        e.preventDefault();
    }
}

// helper function
function isOperator(char) {
    return ["+", "-", "*", "/", "%"].includes(char);
}

// number button
function num(n) {
    if(input.value === "0"){
        input.value = "";
    }
    input.value += n;
}

// operator button (double operator block)
function opr(o) {
    let lastChar = input.value.slice(-1);

    if (input.value === "") return;
    if (isOperator(lastChar)) return;

    input.value += o;
}

// clear all
function clearAll() {
    input.value = "";
}

// delete last
function Delete() {
    input.value = input.value.slice(0, -1);
}

// calculate
function Calculate() {
    let result = eval(input.value);
    input.value = result;
}
