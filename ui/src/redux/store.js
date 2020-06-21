import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const initState = {}
const sagaMiddleware = createSagaMiddleware()
const middlewares = [ thunk, sagaMiddleware ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({ ...reducers }),
    initState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)

sagaMiddleware.run(rootSaga)

export default store
