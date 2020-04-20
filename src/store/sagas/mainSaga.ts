import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";

export function* watchStoreBuilder() {
  yield takeEvery(actionTypes.INIT_INVENTORY, initInventorySaga);
  yield takeLatest(actionTypes.SAVE_INVENTORY, purchaseStoreSaga);
}

type SagaAction = { payload: { token: string; uid: string }; type: string };

export function* initInventorySaga(action: SagaAction) {
  const queryParams =
    "?auth=" +
    action.payload.token +
    '&orderBy="uid"&equalTo="' +
    action.payload.uid +
    '"';
  try {
    const response = yield axios.get(
      "https://strava-b193a.firebaseio.com/storage.json" + queryParams
    );
    yield put(actions.setInventory(response.data[action.payload.uid]));
  } catch (error) {
    yield put(actions.fetchInventoryFailed());
  }
}

export function* purchaseStoreSaga(action: SagaAction) {
  try {
    const response = yield axios.put(
      `https://strava-b193a.firebaseio.com/storage/${action.payload.uid}.json?auth=${action.payload.token}`,
      action.payload
    );
    yield put(actions.saveToStoreSuccess(response.data));
  } catch (error) {
    yield put(actions.saveToStoreFail(error));
  }
}
