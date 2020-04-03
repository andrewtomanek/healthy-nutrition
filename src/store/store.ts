import { createStore, applyMiddleware } from "redux";
import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import  rootReducer  from "./reducers/rootReducer";
import { watchStoreBuilder } from "./sagas/mainSaga";

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchStoreBuilder);

  return store;
}
