import React from 'react'

import { Wrapper, Page } from './styles'

const Paginator = ({ page, totalPage, onChange }) => {
    const pages = []
    for(let i = 0; i < totalPage; i++) {
        pages.push(<Page onClick={() => onChange(i+1)} key={i} disabled={page === (i+1)}>{i+1}</Page>)
    }
    return (
        <Wrapper justify="center">
            {pages}
        </Wrapper>
    )
}

export default Paginator
