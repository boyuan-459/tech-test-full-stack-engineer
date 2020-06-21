export const FETCH_LEADS = 'FETCH_LEADS'
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS'
export const FETCH_LEADS_FAILED = 'FETCH_LEADS_FAILED'
export const ACCEPT = 'ACCEPT'
export const ACCEPT_SUCCESS = 'ACCEPT_SUCCESS'
export const ACCEPT_FAILED = 'ACCEPT_FAILED'
export const DECLINE = 'DECLINE'
export const DECLINE_SUCCESS = 'DECLINE_SUCCESS'
export const DECLINE_FAILED = 'DECLINE_FAILED'

export const fetchLeads = params => ({
    type: FETCH_LEADS,
    params,
})

export const fetchLeadsSuccess = leads => ({
    type: FETCH_LEADS_SUCCESS,
    leads,
})

export const fetchLeadsFailed = error => ({
    type: FETCH_LEADS_FAILED,
    error,
})

export const accept = id => ({
    type: ACCEPT,
    id,
})

export const acceptSuccess = lead => ({
    type: ACCEPT_SUCCESS,
    lead,
})

export const acceptFailed = error => ({
    type: ACCEPT_FAILED,
    error,
})

export const decline = id => ({
    type: DECLINE,
    id,
})

export const declineSuccess = lead => ({
    type: DECLINE_SUCCESS,
    lead,
})

export const declineFailed = error => ({
    type: DECLINE_FAILED,
    error,
})
