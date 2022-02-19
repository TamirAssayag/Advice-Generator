import "./src/styles/app.scss";
import App from "./src/App.js";
import { $ } from "./src/utils/helpers";

async function fetchHtmlAsText(url) {
  return await $.ajax(url);
}

$("#app").html(await fetchHtmlAsText("src/components/card.html")); // inefficient af

$("#app").append(
  `<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Tamir Assayag</a>
  </div>`
);

$("document").ready(() => {
  App();
});
