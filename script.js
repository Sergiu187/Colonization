"use strict";

const card = document.querySelectorAll(".card");

card.forEach((n) =>
  n.addEventListener("mouseover", function () {
    n.querySelector(".hidden").style.display = "inline-block";
  })
);

card.forEach((n) =>
  n.addEventListener("mouseout", function () {
    n.querySelector(".hidden").style.display = "none";
  })
);
