let number1 = "";
let number2 = "";
let operation = "";

// function to clear the input screen and free all variables
function clear() {
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").placeholder = "0";
  document.getElementById("user-input-history").value = "";
  number1 = "";
  operation = "";
  number2 = "";
}

// function to perform operations
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

// function to add values in the input screen
function addValueInInputField(element) {
  let inputValue = document.getElementById("user-input").value;
  document.getElementById("user-input").value =
    inputValue + element.textContent.toString();
}

// function to change operator
function changeOperation(element) {
  operation = element.textContent.toString();
  document.getElementById("user-input-history").value = number1 + operation;
}

// function to add value to number1 variable
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

// function to clear input screen
function setUserInput() {
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").placeholder = "0";
}

// adding event to all the number buttons
document.querySelectorAll(".number-button").forEach((element) => {
  element.addEventListener("click", () => {
    addValueInInputField(element);
  });
});

// adding event to all the special buttons and logic
document.querySelectorAll(".special-button").forEach((element) => {
  element.addEventListener("click", () => {
    // if AC button is clicked
    if (element.textContent === "AC") {
      clear();
    }
    // if 'del'  button is clicked
    else if (element.textContent === "del") {
      let number = document.getElementById("user-input").value;
      document.getElementById("user-input").value = number.substring(
        0,
        number.length - 1
      );
    } else if (element.textContent === ".") {
      let inputArr = document.getElementById("user-input").value.split(".");
      if (inputArr.length == 1) {
        if (inputArr[0] === "") {
          document.getElementById("user-input").value = "0";
        }
        addValueInInputField(element);
      }
    }
    // if multiplication button is clicked
    else if (element.textContent === "x") {
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
        setUserInput();
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "*", number2);
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput();
      }
    }
    // if plus button is clicked
    else if (element.textContent === "+") {
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
        setUserInput();
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "+", number2);
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput();
      }
    }
    // if minus button is clicked
    else if (element.textContent === "-") {
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
        setUserInput();
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "-", number2);
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput();
      }
    }
    // if division button is clicked
    else if (element.textContent === "/") {
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
        setUserInput();
      } else {
        number2 = document.getElementById("user-input").value;
        number1 = performOperation(number1, "/", number2);
        operation = element.textContent.toString();
        document.getElementById("user-input-history").value =
          number1 + operation;
        setUserInput();
      }
    }
    // if '=' button is clicked
    else if (element.textContent === "=") {
      number2 = document.getElementById("user-input").value;
      document.getElementById("user-input").value = result = performOperation(
        number1,
        operation,
        number2
      );
    }
  });
});
