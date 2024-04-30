import React from 'react'
import { FooterContainerStyled, FooterItem, FooterItemTitle, FooterItems, FooterWrapper } from './FooterStyles'
import { AiOutlineCreditCard, AiOutlinePhone, AiOutlineToTop } from 'react-icons/ai'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterWrapper>
                <FooterItems>
                    <FooterItem>
                        <FooterItemTitle>
                            <AiOutlinePhone/>
                            Contacto
                        </FooterItemTitle>
                        <p>Nos contacta por Teléfono o WhatsApp y le brindamos asesoramiento y el precio de la batería de forma inmediata.</p>
                    </FooterItem>
                    <FooterItem>
                        <FooterItemTitle>
                            <AiOutlineCreditCard/>
                            Forma de pago
                        </FooterItemTitle>
                        <p>Una vez finalizado el cambio de la batería, puedes pagar con cualquier medio de pago. En el mismo momento te entregamos la garantía.</p>
                    </FooterItem>
                    <FooterItem>
                        <FooterItemTitle>
                            <AiOutlineToTop/>
                            Calidad
                        </FooterItemTitle>
                        <p>Te ofrecemos reconocidas baterías para todo tipo de necesidades en su mayoría Moura, marca líder en el mercado sudamericano que ofrece baterías para una amplia variedad de aplicaciones.</p>
                    </FooterItem>
                </FooterItems>
            </FooterWrapper>
        </FooterContainerStyled>
    )
}

export default Footer