import { FoodUnit } from "../types/shared";

export const calculateCart = (cartContent: FoodUnit[]) => {
  let oldValue = 0;
  let initCart = [
    {
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
    },
  ];
  let map = new Map();
  let set = new Set();
  if (cartContent.length > 0) {
    initCart = cartContent;
  }
  for (let item of initCart) {
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
  let mapEntriesArray = [];
  for (let entry of map.entries()) {
    mapEntriesArray.push(entry);
  }
  return mapEntriesArray;
};

export const createItemValues = (
  currentValue: number,
  item: FoodUnit,
  oldItem: FoodUnit
) => {
  return {
    ...item,
    picked: true,
    cena: +((oldItem.cena / oldItem.množství) * currentValue),
    kalorie: +((oldItem.kalorie / oldItem.množství) * currentValue),
    tuky: +((oldItem.tuky / oldItem.množství) * currentValue),
    sacharidy: +((oldItem.sacharidy / oldItem.množství) * currentValue),
    vláknina: +((oldItem.vláknina / oldItem.množství) * currentValue),
    bílkoviny: +((oldItem.bílkoviny / oldItem.množství) * currentValue),
    množství: +currentValue,
  };
};
