let Background = document.getElementById("background");
let text = document.getElementById("text");
let btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  Background.style.left = value * 0.25 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  
});

// Function to check if all input fields are filled
function areAllFieldsFilled() {
  const mass = document.getElementById("mass").value;
  const radius = document.getElementById("radius").value;
  const distance = document.getElementById("distance").value;
  const temperature = document.getElementById("temperature").value;
  const gravity = document.getElementById("gravity").value;
  const density = document.getElementById("density").value;

  // Check if any of the fields are empty
  return mass !== "" && radius !== "" && distance !== "" && temperature !== "" && gravity !== "" && density !== "";
}

// Function to redirect to the prediction link if all fields are filled
function redirectToPrediction() {
  if (areAllFieldsFilled()) {
    // Redirect to the prediction link
    window.location.href = "https://mlh1.onrender.com/docs";
  } else {
    alert("Please fill in all input fields before predicting.");
  }
}

// Attach the redirectToPrediction function to the Predict button
document.getElementById("predictBtn").addEventListener("click", redirectToPrediction);