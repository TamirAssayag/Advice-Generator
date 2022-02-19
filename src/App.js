import axios from "axios";
import { imageUrl, $ } from "./utils/helpers";

let advice = "";
const fetchRandomAdvice = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const adviceNumber = $(".advice-card__header").find("p");
  const adviceText = $(".advice-card__body").find("p");
  const adviceDivider = $(".advice-card__divider").find("img");
  const adviceBtn = $(".advice-card__btn");
  const adviceBtnImg = adviceBtn.find("img");

  adviceText.text("Roll the Dice for Advice");
  adviceDivider.attr("src", imageUrl("pattern-divider-desktop.svg"));
  adviceBtnImg.attr("src", imageUrl("icon-dice.svg"));
  adviceBtn.on("click", async () => {
    advice = await fetchRandomAdvice();
    adviceNumber.text(`ADVICE #${advice.slip.id}`);
    adviceText.text(`"${advice.slip.advice}"`);
  });
};

export default App;
