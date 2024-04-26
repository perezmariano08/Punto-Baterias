import React from 'react'
import { ContainerStyled } from './ContainerStyles'

const Container = ({children}) => {
    return (
        <ContainerStyled>
            { children }
        </ContainerStyled>
    )
}

export default Container