document.addEventListener("DOMContentLoaded", function () {
    const scoreInput = document.getElementById("score");
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");
  
    calculateButton.addEventListener("click", function () {
      const score = parseInt(scoreInput.value);
  
      if (isNaN(score) || score < 0 || score > 100) {
        resultElement.textContent = "Please enter a valid score between 0 and 100.";
        return;
      }
  
      let grade = "";
  
      if (score >= 90) {
        grade = "A";
      } else if (score >= 80) {
        grade = "B";
      } else if (score >= 70) {
        grade = "C";
      } else if (score >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
  
      resultElement.textContent = `Your grade is: ${grade}`;
    });
  });
  