import get from 'lodash/get'
import { createSelector } from 'reselect'

export const getLeadData = state => get(state, 'Lead', {})

export const getLeads = createSelector([ getLeadData ], item => {
    return item.get('leads').toArray();
});

export const getLeadPage = createSelector([ getLeadData ], item => {
    return item.get('page')
})
