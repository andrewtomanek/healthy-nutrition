import { FoodUnit } from "../types/shared";

export const filterItems = (
  foods: FoodUnit[],
  cart: FoodUnit[],
  selectedSortType: string,
  selectedSortBy: string
) => {
  let foodArray: FoodUnit[] = [];
  let cartArray: FoodUnit[] = [];
  if (selectedSortBy === "Nejnižší") {
    foodArray = foods.sort((a: FoodUnit, b: FoodUnit) =>
      a[selectedSortType] > b[selectedSortType] ? 1 : -1
    );
    cartArray = cart.sort((a: FoodUnit, b: FoodUnit) =>
      a[selectedSortType] > b[selectedSortType] ? 1 : -1
    );
  } else if (selectedSortBy === "Nejvyšší") {
    foodArray = foods.sort((a: FoodUnit, b: FoodUnit) =>
      a[selectedSortType] < b[selectedSortType] ? 1 : -1
    );
    cartArray = cart.sort((a: FoodUnit, b: FoodUnit) =>
      a[selectedSortType] < b[selectedSortType] ? 1 : -1
    );
  }

  return [foodArray, cartArray];
};
