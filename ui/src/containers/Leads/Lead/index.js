import React from 'react'

import BasicInfo from './BasicInfo'
import DetailsInfo from './DetailsInfo'
import Description from './Description'
import Actions from './Actions'
import ContactInfo from './ContactInfo'
import { Wrapper } from './styles'

const Lead = ({ lead }) => {
    return (
        <Wrapper direction="column">
            <BasicInfo lead={lead} />
            <DetailsInfo lead={lead} />
            { lead.status === 'accepted' ? <ContactInfo lead={lead} /> : null }
            <Description lead={lead} />
            { lead.status === 'new' ? <Actions lead={lead} /> : null }
        </Wrapper>
    )
}

export default Lead
