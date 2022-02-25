import axios from "axios";
import { $ } from "./utils/helpers";

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
  const adviceBtn = $(".advice-card__btn");

  adviceText.text("Roll the Dice for Advice");
  adviceBtn.on("click", async () => {
    advice = await fetchRandomAdvice();
    adviceNumber.text(`ADVICE #${advice.slip.id}`);
    adviceText.text(`"${advice.slip.advice}"`);
  });
};

export default App;
