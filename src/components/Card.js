import Component from "./Component";
import { $ } from "./../utils/helpers";

class Card extends Component {
  render() {
    return $(`
        <div class="advice">
            <div class="advice-card">
                <div class="advice-card__header">
                    <p></p>
                </div>
                <div class="advice-card__body">
                    <p></p>
                </div>
                <div class="advice-card__divider"></div>
                <button class="advice-card__btn">
                    <span id="icon-dice"></span>
                </button>
            </div>
        </div>
        `);
  }
}

export default Card;
