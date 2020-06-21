import React from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'
import Price from '../Price'
import { getLeadPage, getPageSize, getLeadStatus } from 'selectors'
import * as actions from 'redux/lead/action'
import { Wrapper } from './styles'

const Actions = ({ lead, acceptLead, declineLead, page, pageSize, status }) => {
    return (
        <Wrapper>
            <Button className="primary" onClick={() => acceptLead(lead.id, { page, pageSize, status })}>Accept</Button>
            <Button onClick={() => declineLead(lead.id, { page, pageSize, status })}>Decline</Button>
            <Price lead={lead} />
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        page: getLeadPage(state),
        pageSize: getPageSize(state),
        status: getLeadStatus(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        acceptLead (id, params) {
            dispatch(actions.accept(id, params))
        },
        declineLead (id, params) {
            dispatch(actions.decline(id, params))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Actions)
