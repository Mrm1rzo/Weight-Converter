const input = document.querySelector(".input");
const result = document.querySelector(".result");

function updateUi() {
  if (input.value == "") {
    result.textContent = `Please enter a valid number!`;
    result.style.color = "#c0392b";
  } else {
    result.textContent = `Your weight in kg is: ${(input.value / 2.2).toFixed(
      2
    )}`;
    result.style.color = "antiquewhite";
  }
}

input.addEventListener("input", (e) => {
  console.log(input.value);
  updateUi();
});

result.addEventListener("click", (e) => {
  console.log(input.value);
});
