import { createLogger } from "redux-logger";
import thunk from "redux-thunk/es/index";
import promise from "redux-promise-middleware/src/index";
import { applyMiddleware, createStore } from "redux";

import reducer from './reducers';

// 分为调试环境 和 release环境，调试环境就有log日志
const middleware = __DEV__ ?
    applyMiddleware(promise, thunk, createLogger())
    :
    applyMiddleware(promise, thunk)


export default createStore(reducer, middleware)
