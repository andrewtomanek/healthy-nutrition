import { put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";
import axiosApi from "../../api/axiosApi";
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

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
    const response: ResponseGenerator = yield axiosApi(
      "get",
      "storage.json" + queryParams
    );
    yield put(actions.setInventory(response.data[action.payload.uid]));
  } catch (error) {
    yield put(actions.fetchInventoryFailed());
  }
}

export function* purchaseStoreSaga(action: SagaAction) {
  try {
    const response: ResponseGenerator = yield axiosApi(
      "put",
      `storage/${action.payload.uid}.json?auth=${action.payload.token}`,
      action.payload
    );
    yield put(actions.saveToStoreSuccess(response.data));
  } catch (error) {
    yield put(actions.saveToStoreFail(error));
  }
}
