import { AnyAction } from "redux";

import * as actionTypes from "../actions/actionTypes";
import { FoodUnit } from "../../types/shared";
import { getInventory, getCart } from "../../utils/storageLocal";

export type BarData = [string, number, number][];
export interface State {
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
  updateItemSum: BarData;
  errors?: null;
}

const initialState: State = {
  foods: getInventory(),
  cart: getCart(),
  allItemSum: null,
  updateItemSum: [],
  errors: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  const payload = action.payload;

  switch (action.type) {
    case actionTypes.SET_INVENTORY:
      return {
        ...state,
        foods: payload.foods,
        cart: payload.cart,
      };
    case actionTypes.FETCH_INVENTORY_FAILED:
      return {
        ...state,
        errors: payload,
      };
    case actionTypes.SAVE_INVENTORY_START:
      return {
        ...state,
        foods: payload,
      };
    case actionTypes.SAVE_INVENTORY_SUCCESS:
      return {
        ...state,
        foods: payload.foods,
        cart: payload.cart,
      };
    case actionTypes.SAVE_INVENTORY_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case actionTypes.FILL_STORAGE:
      return {
        ...state,
        foods: [...state.foods, payload],
      };
    case actionTypes.ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, payload],
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case actionTypes.ADD_TO_STORAGE:
      return {
        ...state,
        foods: [...state.foods, payload],
      };
    case actionTypes.TOGGLE_FOOD:
      return {
        ...state,
        foods: state.foods.map((food) =>
          food.id === payload ? { ...food, picked: !food.picked } : food
        ),
      };
    case actionTypes.UPDATE__QUANTITY:
      return {
        ...state,
        foods: state.foods.map((item) =>
          item.id === payload[1] ? payload[0] : item
        ),
      };
    case actionTypes.DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter((food) => food.id !== payload),
      };
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        cart: state.cart.map((food) =>
          food.id === payload ? { ...food, picked: !food.picked } : food
        ),
      };
    case actionTypes.DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((food) => food.id !== payload),
      };
    case actionTypes.DELETE_STORAGE:
      return {
        ...state,
        cart: state.cart.filter((food) => food.id !== payload),
      };
    case actionTypes.APPLY_FILTER_RESET:
      return {
        ...state,
        foods: [...payload],
      };
    case actionTypes.APPLY_CART_REFRESH:
      return {
        ...state,
        cart: [...payload],
      };
    case actionTypes.APPLY_FILTER_PICKED:
      return {
        ...state,
        foods: state.foods.filter((food) => food.picked === payload),
      };
    case actionTypes.APPLY_FILTER_WORD:
      return {
        ...state,
        foods: [...payload[0]],
        cart: [...payload[1]],
      };
    case actionTypes.DISPLAY_INFO:
      return {
        ...state,
        foods: state.foods.map((food) => {
          return { ...food, picked: !food.picked };
        }),
        cart: state.cart.map((item) => {
          return { ...item, picked: !item.picked };
        }),
      };
    case actionTypes.APPLY_CALCULATE_SUM:
      return {
        ...state,
        allItemSum: payload,
      };
    case actionTypes.UPDATE_CALCULATE_SUM:
      return {
        ...state,
        updateItemSum: payload,
      };
    default:
      return state;
  }
};

export default reducer;
