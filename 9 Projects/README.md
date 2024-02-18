# Projects related to DOM

## project link

[Click here](https://github.com/abdulrahmans0414/MasteryJavaScript)

# Solution code

## Project - 1

## Color Scheme Switcher

```javascript
console.log("Abdul Rahman");

// Select Body and Button
const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

// event
buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project - 2

## BMI Calculator

```javascript
// select form
const form = document.querySelector("form");

// Event -> submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    // show the results
    results.innerHTML = `<span> ${bmi}</span>`;
  }
});

```
