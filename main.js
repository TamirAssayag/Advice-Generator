import "./src/styles/app.scss";
import App from "./src/App.js";
import { $ } from "./src/utils/helpers";
import Card from "./src/components/Card";

const render = async () => {
  const cardElement = new Card().render();
  $("#app").html(cardElement);
  $("#app").append(
    `<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://tamirassayag.com">Tamir Assayag</a>
  </div>`
  );
};

$(async () => {
  await render();
  App();
});
