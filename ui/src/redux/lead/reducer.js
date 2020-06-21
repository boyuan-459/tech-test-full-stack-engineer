import { Map, List } from 'immutable'

import * as actions from './action'

const initState = new Map({
    leads: List(),
    page: 1,
})

export default function leadReducer (state = initState, action) {
    switch (action.type) {
        case actions.FETCH_LEADS_SUCCESS:
            return state.set('leads', new List(action.leads))
        case actions.ACCEPT_SUCCESS:
            return state.set('leads', state.get('leads').filter(lead => lead.id !== action.lead.id))
        case actions.DECLINE_SUCCESS:
            return state.set('leads', state.get('leads').filter(lead => lead.id !== action.lead.id))
        default:
            return state
    }
}
