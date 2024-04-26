import React from 'react'
import { HeroButtons, HeroContainerStyled, HeroText, HeroWrapper } from './HeroStyles'
import Button from '../Button/Button'
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroWrapper>
                <HeroText>
                    <h1>¿Necesitas comprar una <span>batería</span> para tu vehículo y que te la entreguen en tu <span>domicilio</span>?</h1>
                    <p>¡En <span>Punto Baterías</span> arrancá el día con buena energía!<br/>
                        La mejor calidad y los mejores especialistas sin moverte de tu casa.
                    </p>
                    <HeroButtons>
                        <Button border="yellow" color="yellow">
                            pedí tu batería
                            <AiOutlineWhatsApp />
                        </Button>
                        <Button border="blue" color="yellow" background="blue">
                            llamanos
                            <AiOutlinePhone />
                        </Button>
                    </HeroButtons>
                </HeroText>
                
            </HeroWrapper>
        </HeroContainerStyled> 
    )
}

export default Hero