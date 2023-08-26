// Get the button element with the ID "btn"
const btnEl = document.getElementById("btn");

// Array of characters and numbers used for generating hex color codes
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Function to generate a random hex color code
function randomHexGenerator() {
  let hexString = "#";

  // Loop to generate 6 characters for the hex color code
  for (let i = 0; i < 6; i++) {
    // Generate a random index within the length of hexArray
    const randomNum = Math.floor(Math.random() * hexArray.length);

    // Add the selected character/number to the hexString
    hexString += hexArray[randomNum].toString();
  }

  return hexString;
}

// Add a click event listener to the button
btnEl.addEventListener("click", function () {
  // Generate random hex values for each segment of the gradient
  const randomHexValueOne = randomHexGenerator();
  const randomHexValueTwo = randomHexGenerator();
  const randomHexValueThree = randomHexGenerator();
  const randomHexValueFour = randomHexGenerator();
  const randomHexValueFive = randomHexGenerator();

  // Set the background using a linear gradient
  document.body.style.backgroundImage = `linear-gradient(to right top, ${randomHexValueOne}, ${randomHexValueTwo}, ${randomHexValueThree}, ${randomHexValueFour}, ${randomHexValueFive})`;
});
