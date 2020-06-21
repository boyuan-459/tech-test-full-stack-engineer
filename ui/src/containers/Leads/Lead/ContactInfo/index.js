import React from 'react'

import { Wrapper, AttributeWrapper, Attribute, PhoneIcon, MailIcon } from './styles'

const ContactInfo = ({ lead }) => {
    return (
        <Wrapper>
            <AttributeWrapper>
                <PhoneIcon size={20} />
                <Attribute>{lead.contact_phone}</Attribute>
            </AttributeWrapper>
            <AttributeWrapper>
                <MailIcon size={20} />
                <Attribute>{lead.contact_email}</Attribute>
            </AttributeWrapper>
        </Wrapper>
    )
}

export default ContactInfo
