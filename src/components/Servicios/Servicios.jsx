import React from 'react'
import { ServiciosContainerStyled, ServiciosContent, ServiciosItem, ServiciosItemIcon, ServiciosItems, ServiciosWrapper } from './ServiciosStyles'
import ImgServicios from '/img-servicios.webp'
import { AiOutlineCar, AiOutlineDollar, AiOutlineHome, AiOutlineShopping, AiOutlineThunderbolt } from 'react-icons/ai'
const Servicios = () => {
    return (
        <ServiciosContainerStyled>
            <ServiciosWrapper>
                <h2>Ofrecemos servicios de calidad</h2>
                <ServiciosContent>
                    <img src={ImgServicios} />
                    <ServiciosItems>
                        <ServiciosItem>
                            <ServiciosItemIcon>
                                <AiOutlineShopping/>
                            </ServiciosItemIcon>
                            Ventas corporativas y a particulares.
                        </ServiciosItem>
                        <ServiciosItem>
                            <ServiciosItemIcon>
                                <AiOutlineDollar/>
                            </ServiciosItemIcon>
                            Mejores precios de la ciudad.
                        </ServiciosItem>
                        <ServiciosItem>
                            <ServiciosItemIcon>
                                <AiOutlineCar/>
                            </ServiciosItemIcon>
                            Toda la línea para vehículos.
                        </ServiciosItem>
                        <ServiciosItem>
                            <ServiciosItemIcon>
                                <AiOutlineHome/>
                            </ServiciosItemIcon>
                            Colocación a domicilio.
                        </ServiciosItem>
                        <ServiciosItem>
                            <ServiciosItemIcon>
                                <AiOutlineThunderbolt/>
                            </ServiciosItemIcon>
                            Control de carga.
                        </ServiciosItem>
                    </ServiciosItems>
                </ServiciosContent>
            </ServiciosWrapper>
        </ServiciosContainerStyled>
    )
}

export default Servicios