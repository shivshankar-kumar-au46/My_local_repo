const btn = document.getElementById("btn");
btn.addEventListener("click", inputString);

function inputString(e) {
  const input = document.getElementById("input");
  const newString = input.value;

  const word = newString.split(",");
  console.log(word);
  let count = 0;
  for (let i = 0; i < word[0].length; i++) {
    if (word[0][i] != word[1][i]) {
      count++;
    }
  }
  const hamingDis = document.getElementById("hamingDis");
  hamingDis.value = count;
}
