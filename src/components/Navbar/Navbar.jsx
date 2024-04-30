import React, { useState, useEffect } from 'react';
import { NavbarContainerStyled, NavbarList, NavbarMenu, NavbarWhatsApp, NavbarWrapper } from './NavbarStyles';
import LogoPunto from '/logo.png';
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavbarContainerStyled scrolled={scrolled}>
            <NavbarWrapper>
                <img src={LogoPunto} alt="Logo Punto Baterías" />
                <NavbarMenu>
                    <NavbarList>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Contacto</a></li>
                    </NavbarList>
                    <NavbarWhatsApp>
                        <FaWhatsapp/>
                        <p>(+54) 9 3517 64-9357</p>
                    </NavbarWhatsApp>
                    <HiBars3BottomRight className='icon-menu'/>
                </NavbarMenu>
            </NavbarWrapper>
        </NavbarContainerStyled>
    );
};

export default Navbar;
