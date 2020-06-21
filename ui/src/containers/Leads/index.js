/* eslint-disable react-hooks/exhaustive-deps */
import { array, func, string, number } from 'prop-types'
import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

import Paginator from 'components/Paginator'
import Lead from './Lead'
import { getLeads, getLeadPage, getPageSize, getTotalPage } from 'selectors'
import * as actions from 'redux/lead/action'

const Leads = ({ fetchLeads, status, page, pageSize, leads, totalPage, changePage, changeStatus }) => {
    useEffect(() => {
        fetchLeads({ status, page, pageSize })  
    }, [ status, page ])

    useEffect(() => {
        changeStatus(status)
    }, [ status ])

    const handlePageChange = useCallback(page => {changePage(page)}, [ page ])
    return (
        <>
            {leads.map(lead => <Lead key={lead.id} lead={lead}/>)}
            <Paginator page={page} totalPage={totalPage} onChange={handlePageChange} />
        </>
    )
}

Leads.propTypes = {
    leads: array,
    fetchLeads: func,
    status: string,
    page: number,
    pageSize: number,
    totalPage: number,
    changePage: func,
}

const mapStateToProps = state => {
    return {
        leads: getLeads(state),
        page: getLeadPage(state),
        pageSize: getPageSize(state),
        totalPage: getTotalPage(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLeads (params) {
            dispatch(actions.fetchLeads(params))
        },
        changePage (page) {
            dispatch(actions.changePage(page))
        },
        changeStatus (status) {
            dispatch(actions.changeStatus(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)
