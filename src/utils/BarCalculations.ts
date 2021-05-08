import { FoodUnit } from "../types/shared";

export const calculateCart = (cartContent: FoodUnit[]) => {
  let oldValue = 0;
  let newCart = null;
  const emtyItem = {
    id: 0,
    image: "",
    picked: false,
    bílkoviny: 0,
    cena: 0,
    kalorie: 0,
    množství: 0,
    sacharidy: 0,
    tuky: 0,
    vláknina: 0,
  };
  const initCart = [emtyItem];
  let map = new Map();
  let set = new Set();
  if (cartContent.length > 0) {
    newCart = cartContent;
  } else {
    newCart = initCart;
  }
  for (let item of newCart) {
    for (let itemEntry of Object.entries(item)) {
      if (
        typeof itemEntry[1] === "number" &&
        typeof itemEntry[1] !== "boolean" &&
        itemEntry[0] !== "id"
      ) {
        set.add(itemEntry[0]);
        for (let key of set.keys()) {
          oldValue = map.get(key) || 0;
          if (key === itemEntry[0]) {
            map.set(key, itemEntry[1] + oldValue);
          }
        }
      }
    }
  }
  return [...map.entries()];
};

export const createItemValues = (
  currentValue: number,
  item: FoodUnit,
  oldItem: FoodUnit
) => {
  const oldAmount = oldItem.množství;

  const multiplyValues = (
    oldValue: number,
    amount: number,
    currentValue: number
  ) => {
    return +((+oldValue.toPrecision(3) / amount) * currentValue);
  };

  return {
    ...item,
    picked: true,
    cena: multiplyValues(oldItem.cena, oldAmount, currentValue),
    kalorie: multiplyValues(oldItem.kalorie, oldAmount, currentValue),
    tuky: multiplyValues(oldItem.tuky, oldAmount, currentValue),
    sacharidy: multiplyValues(oldItem.sacharidy, oldAmount, currentValue),
    vláknina: multiplyValues(oldItem.vláknina, oldAmount, currentValue),
    bílkoviny: multiplyValues(oldItem.bílkoviny, oldAmount, currentValue),
    množství: +currentValue,
  };
};
