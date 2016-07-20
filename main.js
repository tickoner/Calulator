var firstNum = document.getElementById("num1"), //.value,
    secondNum = document.getElementById("num2"),
    resultBtn = document.getElementById("resultBtn"),
    resultArea = document.getElementById("resultArea"),
    sel = document.getElementById("sel"), //обєкт
    selopt = sel.options; //масив

resultBtn.onclick = function() {
    var a = parseInt(firstNum.value),
        b = parseInt(secondNum.value);
    switch (selopt[selopt.selectedIndex].value) {
        case "sum":
            resultArea.innerHTML = a + b;
            break;
        case "sub":
            resultArea.innerHTML = a - b;
            break;
        case "mult":
            resultArea.innerHTML = a * b;
            break;
        case "div":
            resultArea.innerHTML = a / b;
            break;
        default:
    }
}
