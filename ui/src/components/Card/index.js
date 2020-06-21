import React from 'react'

import { Wrapper } from './styles'

const Card = ({ children, ...rest }) => {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    )
}

export default Card
