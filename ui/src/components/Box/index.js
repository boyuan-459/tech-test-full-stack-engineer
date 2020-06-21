import { string, bool, number, oneOfType } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  align-items: ${props => props.align || 'normal'};
  display: flex;
  flex: ${props => props.flex || '0 1 auto'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => (props.flexWrap ? 'wrap' : 'nowrap')};
  height: ${props => props.height || 'auto'};
  justify-content: ${props => props.justify || 'normal'};
`

const HiBox = ({ className, children, wrap, ...rest }) => (<Box className={className} flexWrap={wrap ? 1 : 0} {...rest}>{children}</Box>)

HiBox.propTypes = {
    align: string,
    className: string,
    direction: string,
    flex: oneOfType([ number, string ]),
    justify: string,
    responsive: bool,
    wrap: bool,
}

export default HiBox
