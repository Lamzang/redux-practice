import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;
const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, actions) => {
  switch (actions.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

countStore.subscribe(() => (number.innerText = countStore.getState()));

plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

/*
 * //vanilla JS method

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handlePlus = (e) => {
  count += 1;
  updateText();
};
const handleMinus = (e) => {
  count -= 1;
  updateText();
};


plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
*/
