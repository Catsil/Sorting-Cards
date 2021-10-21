/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");

window.onload = function() {
  createcard();
};

function createcard() {
  const CARDS = ["♥", "♠", "♣", "♦"];
  const COLORS = ["RED", "BLACK"];
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);
  let element = document.querySelector(".card");
  let heart = document.createElement("div");

  let cardtype = Math.floor(Math.random() * CARDS.length);
  let colorcard = "";
  if (cardtype == 0 || cardtype == 3) {
    colorcard = COLORS[0];
  } else {
    colorcard = COLORS[1];
  }

  heart.innerHTML = CARDS[cardtype];
  heart.style.color = colorcard;
  element.appendChild(heart);

  let number = document.createElement("div");
  number.innerHTML = Math.floor(Math.random() * 12 + 1);
  if (number.innerHTML == 10) {
    number.innerHTML = "J";
  } else if (number.innerHTML == 11) {
    number.innerHTML = "Q";
  } else if (number.innerHTML == 12) {
    number.innerHTML = "K";
  } else {
  }

  element.appendChild(number);
  let heart2 = document.createElement("div");
  heart2.innerHTML = CARDS[cardtype];
  heart2.style.color = colorcard;
  heart2.classList.add("heart");
  element.appendChild(heart2);
}
