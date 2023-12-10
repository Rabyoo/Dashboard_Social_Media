let Mode = document.getElementById("mode");
let textMode = document.getElementById("text_mode");
let Body = document.querySelector("body");
let Header = document.querySelector("header");
let textLogo = document.querySelector(".container header .logo h2");
let overviewTitle = document.querySelector(".container .overview .title h2");
let doubleFourBoxesH2 = document.querySelector(
  ".container .overview .boxes > div .bottom h2"
);
let i = document.querySelector("i");

//! Followers
let totalFollowers = document.querySelector(".container header .logo p span");
let numberOfFollowers = document.querySelectorAll(
  ".container .followers .boxes .box h1"
);

let Result = 0;

for (let i = 0; i < numberOfFollowers.length; i++) {
  let numbers = +numberOfFollowers[i].innerHTML;
  Result += numbers;
}
totalFollowers.innerHTML = `${Result} Followers`;

//! Test Map to Calc Numbers
// let add = Total.map((ele) => {
//   return +ele.innerHTML;
// });
// totalFollowers.innerHTML = add;

//! Title Head
let titleHead = document.querySelector(".container header .logo h2");
let Span = document.querySelector(".container header .logo p span");

let darkTitle = document.querySelector(".container header .mode form label");

//! Four Boxes
let fourBoxes = document.querySelectorAll(".container .followers .boxes .box");
let allH1 = document.querySelectorAll(".container .followers .boxes .box h1");

//? Title Section Two
let titleTwo = document.querySelector(".container .overview .title h2");

//! doubleFourBoxes
let doubleFourBoxes = document.querySelectorAll(
  ".container .overview .boxes .box"
);
let doubleFourBoxes_h2 = document.querySelectorAll(
  ".container .overview .boxes .box .bottom h2"
);

// let followersH1 = document.getElementsByTagName("h1");
// followersH1.style.color = '#000';

// Body Mode
let Label = document.querySelector("label");
let Moon = document.getElementById("moon");
let Sun = document.getElementById("sun");
Moon.style.display = "none";

function clickSun() {
  Moon.style.display = "block";
  Sun.style.display = "none";
  Label.textContent = "Dark Mode";
  Body.style.background = "#e7e7e7";
  Header.style.background = "#f5f5f5";
  titleHead.style.color = "#111";
  Span.style.color = "#111";
  darkTitle.style.color = "#111";
  for (let i = 0; i < fourBoxes.length; i++) {
    let bgBoxes = fourBoxes[i];
    bgBoxes.style.background = "#fff";
  }
  for (let j = 0; j < allH1.length; j++) {
    let color_h1 = allH1[j];
    color_h1.style.color = "#000";
  }
  for (let k = 0; k < doubleFourBoxes.length; k++) {
    let bgDoubleBoxes = doubleFourBoxes[k];
    bgDoubleBoxes.style.background = "#fff";
  }

  for (let g = 0; g < doubleFourBoxes_h2.length; g++) {
    let color_doubleFour = doubleFourBoxes_h2[g];
    color_doubleFour.style.color = "#000";
  }
  titleTwo.style.color = "#111";
}

function clickMoon() {
  Moon.style.display = "none";
  Sun.style.display = "block";
  Label.textContent = "Light Mode";
}
