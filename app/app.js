// Array of color names
const colorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "gold",
  "silver",
  "purple",
];

// Get the button element with the ID "btn"
const btnEl = document.getElementById("btn");

// Get the element with the class "color"
const colorEl = document.querySelector(".color");

// Add a click event listener to the button
btnEl.addEventListener("click", function () {
  // Generate a random index using the fixedColorGenerator function
  const colorGenerated = fixedColorGenerator();

  // Change the background color of the body to the generated color
  document.body.style.backgroundColor = colorArray[colorGenerated];

  // Update the text content of the colorEl with the generated color name
  colorEl.textContent = colorArray[colorGenerated];
});

// Function to generate a random index for the colorArray
function fixedColorGenerator() {
  // Generate a random index within the length of colorArray
  return Math.floor(Math.random() * colorArray.length);
}
