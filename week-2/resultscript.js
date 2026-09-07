 function calculateResult() {
            
            let m1 = Number(document.getElementById("sub1").value);
            let m2 = Number(document.getElementById("sub2").value);
            let m3 = Number(document.getElementById("sub3").value);
            let m4 = Number(document.getElementById("sub4").value);
            let m5 = Number(document.getElementById("sub5").value);

            
            let total = m1 + m2 + m3 + m4 + m5;

            
            let division = "";

            if (total >= 600) {
                division = "Distinction";
            } else if (total >= 450) {
                division = "First Division";
            } else if (total >= 350) {
                division = "Second Division";
            } else if (total >= 250) {
                division = "Third Division";
            } else {
                division = "Fail";
            }

            
            let resultBox = document.getElementById("result");
            resultBox.innerHTML = "Total Marks: " + total + " | Result: " + division;

            
            if (division === "Fail") {
                resultBox.style.color = "red";
            } else {
                resultBox.style.color = "green";
            }
        }