import { all } from 'redux-saga/effects'

import leadSaga from './lead/saga'

export default function* rootSaga (getState) {
    yield all([
        leadSaga(),
    ])
}
