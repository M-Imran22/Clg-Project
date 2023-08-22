let textDisplay = document.querySelector(".calculatorDisplay");
      let calculation = "";

      function updateCalculation(value = "") {
        if (!isValidOperator(value)) {
          calculation += value;
          textDisplay.innerHTML = calculation;
          return;
        } else if (isValidOperator(value)) {
          if (calculation === "") {
            textDisplay.innerHTML = "Invalid operater";
            return;
          } else {
            calculation += value;
            textDisplay.innerHTML = calculation;
            return;
          }
        }
      }

      function isValidOperator(value) {
        return value === "*" || value === "-" || value === "+" || value === "/";
      }