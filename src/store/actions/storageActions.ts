import * as actionTypes from "./actionTypes";
import { FoodUnit, UserObject } from "../../types/shared";
import { AuthObject } from "../../components/navigation/DatabaseControl";

export const initInventory = (authData: AuthObject) => {
  return {
    type: actionTypes.INIT_INVENTORY,
    payload: authData,
  };
};

export const setInventory = (uid: string) => {
  return {
    type: actionTypes.SET_INVENTORY,
    payload: uid,
  };
};

export const fetchInventoryFailed = () => {
  return {
    type: actionTypes.FETCH_INVENTORY_FAILED,
  };
};

export const saveToStore = (userData: UserObject) => {
  return {
    type: actionTypes.SAVE_INVENTORY,
    payload: userData,
  };
};

export const saveToStoreSuccess = (userData: UserObject) => {
  return {
    type: actionTypes.SAVE_INVENTORY_SUCCESS,
    payload: userData,
  };
};

export const saveToStoreFail = (error: {}) => {
  return {
    type: actionTypes.SAVE_INVENTORY_FAIL,
    payload: error,
  };
};

export const fillStorage = (item: FoodUnit) => {
  return {
    type: actionTypes.FILL_STORAGE,
    payload: item,
  };
};
export const addFoodAction = (item: FoodUnit) => {
  return {
    type: actionTypes.ADD_FOOD,
    payload: item,
  };
};

export const addToCart = (item: FoodUnit) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const addToStorage = (item: FoodUnit) => {
  return {
    type: actionTypes.ADD_TO_STORAGE,
    payload: item,
  };
};

export const toggleFoodComplete = (id: number) => {
  return {
    type: actionTypes.TOGGLE_FOOD,
    payload: id,
  };
};

export const updateQuantity = (quantity: [FoodUnit, number]) => {
  return {
    type: actionTypes.UPDATE__QUANTITY,
    payload: quantity,
  };
};

export const deleteFoodAction = (id: number) => {
  return {
    type: actionTypes.DELETE_FOOD,
    payload: id,
  };
};

export const toggleCartComplete = (id: number) => {
  return {
    type: actionTypes.TOGGLE_CART,
    payload: id,
  };
};

export const deleteCartAction = (id: number) => {
  return {
    type: actionTypes.DELETE_CART,
    payload: id,
  };
};

export const deleteStorageAction = (id: number) => {
  return {
    type: actionTypes.DELETE_STORAGE,
    payload: id,
  };
};

export const applyFilterReset = (initialArray: FoodUnit[]) => {
  return {
    type: actionTypes.APPLY_FILTER_RESET,
    payload: initialArray,
  };
};

export const applyCartRefresh = (cartSession: string) => {
  return {
    type: actionTypes.APPLY_CART_REFRESH,
    payload: cartSession,
  };
};

export const applyFilterPicked = (sortBool: boolean) => {
  return {
    type: actionTypes.APPLY_FILTER_PICKED,
    payload: sortBool,
  };
};

export const applyFilterWord = (filteredData: [FoodUnit[], FoodUnit[]]) => {
  return {
    type: actionTypes.APPLY_FILTER_WORD,
    payload: filteredData,
  };
};

export const displayInformation = () => {
  return {
    type: actionTypes.DISPLAY_INFO,
  };
};

export const applycalculateSum = (sum: number) => {
  return {
    type: actionTypes.APPLY_CALCULATE_SUM,
    payload: sum,
  };
};

export const updateCalculateSum = (sum: [string, number][]) => {
  return {
    type: actionTypes.UPDATE_CALCULATE_SUM,
    payload: sum,
  };
};
