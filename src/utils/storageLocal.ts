import database from "../data/db.json";

export const getInventory = () => {
  let inventory = localStorage.getItem("inventory");

  let initialArray;
  if (inventory) {
    initialArray = JSON.parse(inventory);
  } else {
    initialArray = [];
    for (let i = 0; i < 5; i++) {
      initialArray.push(database[i]);
    }
  }

  return initialArray;
};

export const getCart = () => {
  let cartSession = localStorage.getItem("cart");

  let initialCart;
  if (cartSession) {
    initialCart = JSON.parse(cartSession);
  } else {
    initialCart = [];
  }

  return initialCart;
};
