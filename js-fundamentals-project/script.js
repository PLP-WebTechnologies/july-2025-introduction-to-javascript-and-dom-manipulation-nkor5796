// 🎯 JavaScript Assignment Demo by Martine

// ✅ Variables
let userName = "Martine";
let userAge = 20;

// ✅ Conditional Statement (if...else)
function checkNumber() {
  let output = document.getElementById("basic-output");
  if (userAge >= 18) {
    output.textContent = `${userName} is an adult ✅`;
    output.style.color = "green";
  } else {
    output.textContent = `${userName} is a minor ❌`;
    output.style.color = "red";
  }
}

// ✅ Function Example (returning values)
function square(num) {
  return num * num;
}

// Function calling another function
function showTotal() {
  let output = document.getElementById("function-output");
  let number = 5;
  output.textContent = `The square of ${number} is ${square(number)} ✨`;
  output.style.fontWeight = "bold";
}

// ✅ Loop Example (for loop)
function countdown() {
  let output = document.getElementById("loop-output");
  output.innerHTML = ""; // clear previous content
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    output.appendChild(li);
  }
}

// ✅ DOM Manipulation with class toggle
function toggleText() {
  const text = document.getElementById("dom-output");
  text.classList.toggle("toggle-active");
}

// ✅ DOM Manipulation with style change
function changeColor() {
  document.body.style.background =
    document.body.style.background === "linear-gradient(to right, #74ebd5, #ACB6E5)"
      ? "#f5f7fa"
      : "linear-gradient(to right, #74ebd5, #ACB6E5)";
}

// ✅ DOM Manipulation - Adding new elements dynamically
function addItem() {
  const list = document.getElementById("dynamic-list");
  let li = document.createElement("li");
  li.textContent = "🌟 New Item Added!";
  list.appendChild(li);
}

// ✅ Event Example - Runs when the page loads
window.onload = () => {
  alert(`👋 Hello ${userName}, welcome to your JavaScript interactive page!`);
};
