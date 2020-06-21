import React from 'react'
import numeral from 'numeral'
import { Wrapper, Price, Text } from './styles'

const PriceInfo = ({ lead }) => {
    return (
        <Wrapper className="price" justify="center" align="center">
            <Price>${numeral(lead.price).format('0.00')}</Price>
            <Text>Lead Invitation</Text>
        </Wrapper>
    )
}

export default PriceInfo
