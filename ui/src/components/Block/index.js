import React from 'react'

import { Wrapper } from './styles'

const Block = ({ children, ...rest }) => {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    )
}


export default Block
