const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  const stringInput = document.getElementById("stringInput");
  const combinedString = stringInput.value;
  const words = combinedString.split(",");
  let count = 0;
  for (let i = 0; i < words[0].length; i++) {
    if (words[0][i] != words[1][i]) {
      count++;
      const hammingDistance = (document.getElementById(
        "hammingDistance"
      ).value = count);
    }
  }
});