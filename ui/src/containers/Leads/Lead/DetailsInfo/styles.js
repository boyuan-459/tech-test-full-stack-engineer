import styled from 'styled-components'
import Map from 'react-feather/dist/icons/map-pin'
import Category from 'react-feather/dist/icons/briefcase'

import Box from 'components/Box'

export const Wrapper = styled(Box)`
    padding: 10px 20px;
    border-top: 1px solid #EAEAEF;
    border-bottom: 1px solid #EAEAEF;

    .price > span {
        font-weight: normal;
        color: #858B88;
    }
`

export const AttributeWrapper = styled(Box)`
    margin-right: 20px;
`

export const MapIcon = styled(Map)`
    color: #858B88;
`

export const Attribute = styled.div`
    margin: 0 5px;
    color: #858B88;
`

export const CategoryIcon = styled(Category)`
    color: #858B88;
`
