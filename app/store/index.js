import { createStore , applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';


import rootSaga from "../store/middleware/index";
import rootReducer from '../store/reducers/index';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware( sagaMiddleware, logger ));
sagaMiddleware.run( rootSaga );

export default store


