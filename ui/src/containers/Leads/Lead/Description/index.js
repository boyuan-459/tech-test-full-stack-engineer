import React from 'react'

import { Wrapper, Desc } from './styles'

const Description = ({ lead }) => {
    return (
        <Wrapper>
            <Desc>{lead.description}</Desc>
        </Wrapper>
    )
}

export default Description
