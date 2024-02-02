const userInput = document.getElementById("number"),
  button = document.getElementById("convert-btn"),
  output = document.getElementById("output");

const romanNumeralArray = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const romanNumeralConvertor = (num) => {
  for (let i = 0; i < romanNumeralArray.length; i++) {
    while (num >= romanNumeralArray[i][1]) {
      output.innerText += romanNumeralArray[i][0];
      num -= romanNumeralArray[i][1];
    }
  }
};

const inputValidator = (input) => {
  output.innerText = "";
  if (!input) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (input < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (input > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  romanNumeralConvertor(parseInt(userInput.value));
  userInput.value = "";
};

button.addEventListener("click", () => {
  inputValidator(userInput.value);
});

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});
