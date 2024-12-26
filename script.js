"use strict";

const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const btn = document.querySelector("#btn");
const eBtn = document.querySelector("#e_btn");
const input = document.querySelector("#text");
const range = document.querySelector("#range");
const rangeSpan = document.querySelector("#range-span");

btn.addEventListener("click", function (event) {
  square.style.backgroundColor = input.value;
  input.value = "";
});

eBtn.style.display = "none";

range.addEventListener("input", function (event) {
  rangeSpan.textContent = `${range.value}%`;
  circle.style.height = `${range.value}%`;
  circle.style.width = `${range.value}%`;
});
