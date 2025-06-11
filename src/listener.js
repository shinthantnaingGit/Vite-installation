import { addBtnHandler, alertBtnHandler } from "./handlers";
import { addBtn, alertBtn } from "./selectors";

const listener = () => {
  addBtn.addEventListener(`click`,addBtnHandler);
  alertBtn.addEventListener(`click`,alertBtnHandler);
}
export default listener;