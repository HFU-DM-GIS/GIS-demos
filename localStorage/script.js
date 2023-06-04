// code copied from Stephanie Heintz (https://heintz-s.github.io/GIS/lecture/json-localStorage/1)

const counter = document.getElementById("counter");
const plusOne = document.getElementById("plusOne");
const reset = document.getElementById("reset");

let value = Number(localStorage.getItem("value"));
counter.textContent = value;
plusOne.addEventListener("click", () => {
  setValue(value + 1);
});
reset.addEventListener("click", () => {
  setValue(0);
});

function setValue(x) {
  value = x;
  counter.textContent = value;
  localStorage.setItem("value", value);
}
