import styled from 'styled-components'
import Phone from 'react-feather/dist/icons/phone'
import Mail from 'react-feather/dist/icons/mail'

import Box from 'components/Box'

export const Wrapper = styled(Box)`
    padding: 20px 20px 10px;
`

export const AttributeWrapper = styled(Box)`
    margin-right: 20px;
`

export const PhoneIcon = styled(Phone)`
    color: #858B88;
`

export const Attribute = styled.div`
    margin: 0 5px;
    font-weight: 600;
    color: rgb(255, 102, 0, 0.8);
`

export const MailIcon = styled(Mail)`
    color: #858B88;
`
