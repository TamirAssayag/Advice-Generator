import axios from "axios";
import { $ } from "./utils/helpers";

let advice = "";
const fetchRandomAdvice = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    return res.data;
  } catch (error) {
    console.log({ Error: error.message });
  }
};

const App = () => {
  const adviceNumber = $(".advice-card__header").find("p");
  const adviceText = $(".advice-card__body").find("p");
  const adviceBtn = $(".advice-card__btn");

  adviceText.text("Roll the Dice for Advice");
  adviceBtn.on("click", async () => {
    advice = await fetchRandomAdvice();
    if (advice) {
      adviceNumber.text(`ADVICE #${advice?.slip.id}`);
      adviceText.text(`"${advice?.slip.advice}"`);

      // Since the API caches the results for 2 seconds,
      // we need to wait for the cache to expire before we can fetch again.
      adviceBtn.attr("disabled", true);
      adviceBtn.css({ backgroundColor: "gray", "pointer-events": "none" });

      setTimeout(() => {
        adviceBtn.removeAttr("disabled");
        adviceBtn.css({ backgroundColor: "#53ffaa", "pointer-events": "auto" });
      }, 2000);
    }
  });
};

export default App;
