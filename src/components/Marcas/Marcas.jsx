import React from 'react'
import { MarcasContainerStyled, MarcasLogos, MarcasTitle, MarcasWrapper } from './MarcasStyles'
import LogoMoura from '/logo-moura.png'
import LogoClorex from '/logo-clorex.png'
import LogoVolta from '/logo-volta.png'
import LogoNacional from '/logo-nacional.jpg'
import LogoPlacord from '/logo-placord.png'
import LogoSermat from '/logo-sermat.jpg'
const Marcas = () => {
    return (
        <MarcasContainerStyled>
            <MarcasWrapper>
                <MarcasTitle>
                    <h2>Baterías de calidad original</h2>
                    <p>Trabajamos con marcas de primera linea. En Punto Baterías, seleccionamos cuidadosamente las mejores marcas de baterías, como Moura, Sermat y Placord para asegurar tu satisfacción.</p>
                </MarcasTitle>
                <MarcasLogos>
                    <img src={LogoMoura} />
                    <img src={LogoClorex} />
                    <img src={LogoVolta} />
                    <img src={LogoNacional} />
                    <img src={LogoPlacord} />
                    <img src={LogoSermat} />
                </MarcasLogos>
            </MarcasWrapper>
        </MarcasContainerStyled>
    )
}

export default Marcas