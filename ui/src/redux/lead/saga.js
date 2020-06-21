import { all, takeEvery, put, fork, call } from 'redux-saga/effects'

import { list, accept, decline } from 'services/leads'
import * as actions from './action'

export function* handleLeadsFetch () {
    yield takeEvery(actions.FETCH_LEADS, function* (action) {
        try {
            const res = yield call(list, action.params)
            console.log('res', res)
            yield put(actions.fetchLeadsSuccess(res))
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
            // yield put(actions.acceptSuccess(lead))
            yield put(actions.fetchLeads(action.params))
        } catch (error) {
            yield put(actions.acceptFailed(error))
        }
    })
}

export function* handleLeadDecline () {
    yield takeEvery(actions.DECLINE, function* (action) {
        try {
            const lead = yield call(decline, action.id)
            // yield put(actions.declineSuccess(lead))
            yield put(actions.fetchLeads(action.params))
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
