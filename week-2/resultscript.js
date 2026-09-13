function calculate(operation) {

    let m1 = Number(document.getElementById("sub1").value);
    let m2 = Number(document.getElementById("sub2").value);
    let m3 = Number(document.getElementById("sub3").value);
    let m4 = Number(document.getElementById("sub4").value);
    let m5 = Number(document.getElementById("sub5").value);

    let result;
    let label;

    if (operation === "add") { 
        result = m1 + m2 + m3 + m4 + m5;
        label = "Sum";
    } else if (operation === "sub") {
        result = m1 - m2 - m3 - m4 - m5;
        label = "Difference";
    } else if (operation === "mul") {
        result = m1 * m2 * m3 * m4 * m5;
        label = "Product";
    } else if (operation === "div") {
        result = m1 / m2 / m3 / m4 / m5;
        label = "Division Result";
    }

    let resultBox = document.getElementById("result");
    resultBox.innerHTML = label + ": " + result;
    resultBox.style.color = "blue";
}