const input1 = document.getElementById("firstNum");
const input2 = document.getElementById("secondNum");
const button = document.querySelector("button");
const results = document.querySelector(".results");

button.onclick = (b) => {
  const num1 = parseInt(input1.value, 10);
  input1.value = "";
  const num2 = parseInt(input2.value, 10);
  input2.value = "";
  const element = document.createElement("h2");
  element.textContent = `${num1} + ${num2} = ${num1 + num2}`;
  results.append(element);
  input1.focus();
};




