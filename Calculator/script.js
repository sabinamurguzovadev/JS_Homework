let valueOneInput = document.getElementById("value1");
let valueTwoInput = document.getElementById("Value2");
let totalButton = document.querySelector(".buttonOne");
let addButton = document.getElementById("additionBtn");
let divideBtn = document.getElementById("divideBtn");
let subtractBtn = document.getElementById("subtractBtn");
let multiplyBtn = document.getElementById("multiplyBtn")

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (valueOneInput.value === "" && valueTwoInput.value === "") {
      alert("Please enter a number")
    } else {
      var value1 = parseFloat(valueOneInput.value);
      var value2 = parseFloat(valueTwoInput.value);
      var result = value1 + value2;
      totalButton.textContent = result;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  subtractBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (valueOneInput.value === "" && valueTwoInput.value === "") {
      alert("Please enter a number")
    } else {
      var value1 = parseFloat(valueOneInput.value);
      var value2 = parseFloat(valueTwoInput.value);
      var result = value1 - value2;
      totalButton.textContent = result;
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  divideBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (valueOneInput.value === "" && valueTwoInput.value === "") {
      alert("Please enter a number")
    } else {
      var value1 = parseFloat(valueOneInput.value);
      var value2 = parseFloat(valueTwoInput.value);
      var result = value1 / value2;
      totalButton.textContent = result;
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  multiplyBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (valueOneInput.value === "" && valueTwoInput.value === "") {
      alert("Please enter a number")
    } else {
      var value1 = parseFloat(valueOneInput.value);
      var value2 = parseFloat(valueTwoInput.value);
      var result = value1 * value2;
      totalButton.textContent = result;
    }
  });

})



