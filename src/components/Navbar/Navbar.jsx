import React, { useState, useEffect } from 'react';
import { NavbarContainerStyled, NavbarList, NavbarWrapper } from './NavbarStyles';
import LogoPunto from '/logo.png';
import { HiBars3BottomRight } from "react-icons/hi2";

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
                <NavbarList>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </NavbarList>
                <HiBars3BottomRight className='icon-menu'/>
            </NavbarWrapper>
        </NavbarContainerStyled>
    );
};

export default Navbar;
