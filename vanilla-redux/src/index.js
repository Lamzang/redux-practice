import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, actions) => {
  if (actions.type === "PLUS") {
    return count + 1;
  } else if (actions.type === "MINUS") {
    return count - 1;
  }
  return count;
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: "PLUS" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

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
