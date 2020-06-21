import React from 'react'
import format from 'date-fns/format'

import Box from 'components/Box'
import { Wrapper, Avatar, Name, DateWrapper } from './styles'

const BasicInfo = ({ lead }) => {
    return (
        <Wrapper>
            <Box height="100%" justify="center" align="center">
                <Avatar justify="center" align="center">{lead.contact_name.charAt(0)}</Avatar>
            </Box>
            <Box direction="column">
                <Name>{lead.contact_name}</Name>
                <DateWrapper>{format(new Date(lead.created_at), 'MMM d @ h:mm a')}</DateWrapper>
            </Box>
        </Wrapper>
    )
}

export default BasicInfo
