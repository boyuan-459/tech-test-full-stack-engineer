import React from 'react'

import { StyledButton } from './styles'

const Button = ({ className, onClick, children }) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button
