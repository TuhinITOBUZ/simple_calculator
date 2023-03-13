let number1 = "";
let number2 = "";
let operation = "";

document.querySelectorAll(".number-button").forEach((element) => {
  element.addEventListener("click", () => {
    let inputValue = document.getElementById("user-input").value;
    document.getElementById("user-input").value =
      inputValue + element.textContent.toString();
  });
});

document.querySelectorAll(".special-button").forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "AC") {
      document.getElementById("user-input").value = null;
      document.getElementById("user-input").placeholder = null;
      document.getElementById("user-input-history").value = null;
      operation = "";
      number1 = "";
      number2 = "";
    } else if (element.textContent === "Clear") {
      let number = document.getElementById("user-input").value;
      document.getElementById("user-input").value = number.substring(
        0,
        number.length - 1
      );
    } else if (element.textContent === "x") {
      operation = element.textContent.toString();
      number1 = document.getElementById("user-input").value;
      document.getElementById("user-input").placeholder = number1;
      document.getElementById("user-input-history").value = number1 + operation;
      document.getElementById("user-input").value = "";
    } else if (element.textContent === "+") {
      operation = element.textContent.toString();
      number1 = document.getElementById("user-input").value;
      document.getElementById("user-input").placeholder = number1;
      document.getElementById("user-input-history").value = number1 + operation;
      document.getElementById("user-input").value = "";
    } else if (element.textContent === "-") {
      operation = element.textContent.toString();
      number1 = document.getElementById("user-input").value;
      document.getElementById("user-input").placeholder = number1;
      document.getElementById("user-input-history").value = number1 + operation;
      document.getElementById("user-input").value = "";
    } else if (element.textContent === "/") {
      operation = element.textContent.toString();
      number1 = document.getElementById("user-input").value;
      document.getElementById("user-input").placeholder = number1;
      document.getElementById("user-input-history").value = number1 + operation;
      document.getElementById("user-input").value = "";
    } else if (element.textContent === "=") {
      number2 = document.getElementById("user-input").value;
      if (operation === "+") {
        document.getElementById("user-input").value =
          Number(number1) + Number(number2);
      } else if (operation === "-") {
        document.getElementById("user-input").value =
          Number(number1) - Number(number2);
      } else if (operation === "x") {
        document.getElementById("user-input").value =
          Number(number1) * Number(number2);
      } else if (operation === "/") {
        document.getElementById("user-input").value =
          Number(number1) / Number(number2);
      }
    }
  });
});
