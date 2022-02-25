import "./src/styles/app.scss";
import App from "./src/App.js";
import { $ } from "./src/utils/helpers";

const fetchHtmlAsText = (url) => {
  return $.ajax(url);
};

const render = async () => {
  const cardElement = await fetchHtmlAsText("src/components/card.html");
  $("#app").html(cardElement);
  $("#app").append(
    `<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Tamir Assayag</a>
  </div>`
  );
};

$(async () => {
  await render();
  App();
});
