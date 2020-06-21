import React from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'
import Price from '../Price'
import * as actions from 'redux/lead/action'
import { Wrapper } from './styles'

const Actions = ({ lead, acceptLead, declineLead }) => {
    return (
        <Wrapper>
            <Button className="primary" onClick={() => acceptLead(lead.id)}>Accept</Button>
            <Button onClick={() => declineLead(lead.id)}>Decline</Button>
            <Price lead={lead} />
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        acceptLead (id) {
            dispatch(actions.accept(id))
        },
        declineLead (id) {
            dispatch(actions.decline(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Actions)
