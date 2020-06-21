import React from 'react'
import { connect } from 'react-redux'

import Lead from './Lead'
import { getLeads, getLeadPage } from 'selectors'
import * as actions from 'redux/lead/action'

class Leads extends React.Component {
    componentDidMount () {
        const { fetchLeads, status, page } = this.props
        fetchLeads({ status, page })
    }
    render () {
        const { leads } = this.props
        return leads.map(lead => <Lead key={lead.id} lead={lead}/> )
    }
}

const mapStateToProps = state => {
    return {
        leads: getLeads(state),
        page: getLeadPage(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLeads (params) {
            dispatch(actions.fetchLeads(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)
