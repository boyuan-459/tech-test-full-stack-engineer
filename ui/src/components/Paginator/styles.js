import styled from 'styled-components'

import Box from 'components/Box'

export const Wrapper = styled(Box)`
`

export const Page = styled.button`
    cursor: pointer;
    border: none;
    font-size: 13px;
    font-weight: 400;
    padding: 10px 15px;
    border: 1px solid #F7F7F7;
    &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    &:first-of-type {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`
