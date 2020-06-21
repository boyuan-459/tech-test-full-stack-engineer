import React from 'react'

import Price from '../Price'
import { Wrapper, AttributeWrapper, Attribute, MapIcon, CategoryIcon } from './styles'

const DetailsInfo = ({ lead }) => {
    return (
        <Wrapper>
            <AttributeWrapper>
                <MapIcon size={20} />
                <Attribute>{lead.suburb.name} {lead.suburb.postcode}</Attribute>
            </AttributeWrapper>
            <AttributeWrapper>
                <CategoryIcon size={20} />
                <Attribute>{lead.category.name}</Attribute>
            </AttributeWrapper>
            <AttributeWrapper>
                <Attribute>Job ID:</Attribute>
                <Attribute>{lead.id}</Attribute>
            </AttributeWrapper>
            { lead.status !== 'new' ? <Price lead={lead} /> : null }
        </Wrapper>
    )
}

export default DetailsInfo
