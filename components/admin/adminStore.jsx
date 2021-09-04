import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { adminReducer, adminSaga, USER_LOGOUT } from "react-admin";
import { composeWithDevTools } from "redux-devtools-extension";

const AdminStore = ({ authProvider, dataProvider, history }) => {
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
  });
  const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() {
    yield all(
      [adminSaga(dataProvider, authProvider)] //.map(fork)
    );
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    process.env.NODE_ENV === "development" && typeof window !== "undefined"
      ? compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
      : composeWithDevTools(
          applyMiddleware(sagaMiddleware, routerMiddleware(history))
        );

  const store = createStore(resettableAppReducer, {}, composeEnhancers);
  sagaMiddleware.run(saga);
  return store;
};
export default AdminStore;
