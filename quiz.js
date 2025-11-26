// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option was selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
