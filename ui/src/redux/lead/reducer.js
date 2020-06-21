import { Map, List } from 'immutable'

import * as actions from './action'

const initState = new Map({
    leads: List(),
    page: 1,
    pageSize: 2,
    status: '',
})

export default function leadReducer (state = initState, action) {
    switch (action.type) {
        case actions.FETCH_LEADS_SUCCESS:
            return state.set('leads', new List(action.payload.leads))
                    .set('totalPage', action.payload.totalPage)
        case actions.ACCEPT_SUCCESS:
            return state.set('leads', state.get('leads').filter(lead => lead.id !== action.lead.id))
        case actions.DECLINE_SUCCESS:
            return state.set('leads', state.get('leads').filter(lead => lead.id !== action.lead.id))
        case actions.CHANGE_PAGE:
            return state.set('page', action.page)
        case actions.CHANGE_STATUS:
            return state.set('status', action.status)
                    .set('page', 1)
        default:
            return state
    }
}
