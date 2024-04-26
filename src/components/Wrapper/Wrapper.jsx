import React from 'react'
import { WrapperStyled } from './WrapperStyles'

const Wrapper = ({ children }) => {
    return (
        <WrapperStyled>
            { children }
        </WrapperStyled>
    )
}

export default Wrapper