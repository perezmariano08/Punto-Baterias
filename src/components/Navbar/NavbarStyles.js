import styled from "styled-components";
import { ContainerStyled } from "../Container/ContainerStyles";
import { WrapperStyled } from "../Wrapper/WrapperStyles";

export const NavbarContainerStyled = styled(ContainerStyled)`
    height: 70px;
    width: 100%;
    color: var(--white);
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: ${({ scrolled }) => (scrolled ? 'var(--blue)' : 'transparent')};
    transition: background-color 0.2s ease-in-out;

    .icon-menu {
        display: none;
        @media (max-width: 1024px) {
            display: block;
            font-size: 24px;
        }
    }
`;

export const NavbarWrapper = styled(WrapperStyled)`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    img {
        height: 45%;
    }
`;

export const NavbarMenu = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 20px;
    }
`

export const NavbarList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    @media (max-width: 1024px) {
        display: none;
    }

    a {
        color: var(--white);
        font-size: 16px;
        font-weight: 300;
    }
`;

export const NavbarWhatsApp = styled.div`
    display: flex;
    gap: 10px;
    font-size: 18px;
    align-items: center;
    color: var(--yellow);

    p {
        font-weight: 500;
        @media (max-width: 1024px) {
            display: none;
            font-size: 24px;
        }
    }
`