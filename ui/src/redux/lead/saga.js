import { all, takeEvery, put, fork, call } from 'redux-saga/effects'

import { list, accept, decline } from 'services/leads'
import * as actions from './action'

export function* handleLeadsFetch () {
    yield takeEvery(actions.FETCH_LEADS, function* (action) {
        try {
            const res = yield call(list, action.params)
            yield put(actions.fetchLeadsSuccess(res.leads))
        } catch (error) {
            console.log(error)
            yield put(actions.fetchLeadsFailed(error))
        }
    })
}

export function* handleLeadAccept () {
    yield takeEvery(actions.ACCEPT, function* (action) {
        try {
            const lead = yield call(accept, action.id)
            yield put(actions.acceptSuccess(lead))
        } catch (error) {
            yield put(actions.acceptFailed(error))
        }
    })
}

export function* handleLeadDecline () {
    yield takeEvery(actions.DECLINE, function* (action) {
        try {
            const lead = yield call(decline, action.id)
            console.log('decline lead', lead)
            yield put(actions.declineSuccess(lead))
        } catch (error) {
            yield put(actions.declineFailed(error))
        }
    })
}

export default function* rootSaga () {
    yield all([
        fork(handleLeadsFetch),
        fork(handleLeadAccept),
        fork(handleLeadDecline),
    ])
}
