let input = document.getElementById("input");

// INPUT PR CLICK KRTY HI ZERO HAT JYE 

    function removeZero(){
        if(input.value === "0"){
            input.value = "";
        }
    }

    // INPUT FIELD MAE SIRF NUMBER YA OPERATOR SELECT HON 

    function validateInput(e){
        const allowKey = [
            "0","1","2","3","4","5","6","7","8","9",".","+","-","/","*","%","Backspace", "Enter" , "Delete" , "ArrowLeft","ArrowRight"
        ]

        if(!allowKey.includes(e.key)){
            e.preventDefault();
        }
    }

    // Operator repetition prevention

    const operator = ["+", "-" , "*" , "/" , "%"]
    let lastChar = input.value.slice(-1);
    if(operator.includes(e.key) && operator.includes(lastChar)){
        e.preventDefault();
    }

function num(n){
    input.value += n;
}

function opr(o){
    input.value += o;
}

function clearAll(){
    input.value = "";
}

function Delete(){
    input.value = input.value.slice(0, -1)
}

function Calculate(){
    let result = eval(input.value);
    input.value = result;
}