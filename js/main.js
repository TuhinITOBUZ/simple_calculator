let number1 = "";
let number2 = "";
let operation = "";

function clear() {
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").placeholder = "0";
  document.getElementById("user-input-history").value = "";
  number1 = "";
  operation = "";
  number2 = "";
}

function performOperation(number1, operation, number2) {
  let result = 0;
  if (operation === "+") {
    result = Number(number1) + Number(number2);
  } else if (operation === "-") {
    result = Number(number1) - Number(number2);
  } else if (operation === "x") {
    result = Number(number1) * Number(number2);
  } else if (operation === "/") {
    result = Number(number1) / Number(number2);
  }
  clear();
  return result;
}

function addValueInInputField(element) {
  let inputValue = document.getElementById("user-input").value;
  document.getElementById("user-input").value =
    inputValue + element.textContent.toString();
}

function changeOperation(element) {
  operation = element.textContent.toString();
  document.getElementById("user-input-history").value = number1 + operation;
}

function number1ValueAddition(element) {
  if (document.getElementById("user-input").value != "") {
    operation = element.textContent.toString();
    number1 = document.getElementById("user-input").value;
    document.getElementById("user-input").placeholder = number1;
    document.getElementById("user-input-history").value = number1 + operation;
    document.getElementById("user-input").value = "";
  } else {
    alert("No Value given!");
  }
}

function setUserInput(){
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").placeholder = "0";
}

document.querySelectorAll(".number-button").forEach((element) => {
  element.addEventListener("click", () => {
    addValueInInputField(element);
  });
});

document.querySelectorAll(".special-button").forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "AC") {
      clear();
    } else if (element.textContent === "del") {
      let number = document.getElementById("user-input").value;
      document.getElementById("user-input").value = number.substring(
        0,
        number.length - 1
      );
    } else if (element.textContent === ".") {
      let inputArr = document.getElementById("user-input").value.split(".");
      if (inputArr.length == 1) {
        addValueInInputField(element);
      }
    } else if (element.textContent === "x") {
      if (number1 === "") {
        number1ValueAddition(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value === ""
      ) {
        changeOperation(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value != ""
      ) {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, operation, number2);
        changeOperation(element);
        setUserInput()
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "*", number2)
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput()
      }
    } else if (element.textContent === "+") {
      if (number1 === " ") {
        number1ValueAddition(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value === ""
      ) {
        changeOperation(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value != ""
      ) {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, operation, number2);
        changeOperation(element);
        setUserInput()
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "+", number2)
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput()
      }
    } else if (element.textContent === "-") {
      if (number1 === "") {
        number1ValueAddition(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value === ""
      ) {
        changeOperation(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value != ""
      ) {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, operation, number2);
        changeOperation(element);
        setUserInput()
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "-", number2)
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput()
      }
    } else if (element.textContent === "/") {
      if (number1 === "") {
        number1ValueAddition(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value === ""
      ) {
        changeOperation(element);
      } else if (
        operation != "" &&
        number1 != "" &&
        document.getElementById("user-input").value != ""
      ) {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, operation, number2);
        changeOperation(element);
        setUserInput()
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "/", number2)
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput()
      }
    } else if (element.textContent === "=") {
      number2 = document.getElementById("user-input").value;
      document.getElementById("user-input").value = result = performOperation(
        number1,
        operation,
        number2
      );
    }
  });
});