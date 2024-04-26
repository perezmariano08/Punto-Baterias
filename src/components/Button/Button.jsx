import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({children, background, color, border}) => {
    return (
        <ButtonWrapper
            border={border}
            color={color}
            background={background}
        >
            {children}
        </ButtonWrapper>
    )
}

export default Button