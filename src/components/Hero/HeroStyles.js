import styled from "styled-components";
import { ContainerStyled } from "../Container/ContainerStyles";
import { WrapperStyled } from "../Wrapper/WrapperStyles";

export const HeroContainerStyled = styled(ContainerStyled)`
    background: linear-gradient(96deg, rgba(34, 34, 76, 0.50) 0%, rgba(34, 34, 76, 0.00) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.50) 100%), url(heroImage.jpg) lightgray 50% / cover no-repeat;
    padding-top: 70px;
    color: var(--white);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: .5;
    }
`

export const HeroWrapper = styled(WrapperStyled)`
    padding-top: 100px;
    padding-bottom: 100px;
    justify-content: start;
    z-index: 2;
    @media (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`

export const HeroText = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: start;
    width: 80%;
    
    h1 span {
        color: var(--yellow);
        font-weight: 600;
    }

    p span {
        font-weight: 400;
        color: var(--yellow);
    }
    
    @media (max-width: 1024px) {
        width: 100%;
    }
`

export const HeroButtons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    @media (max-width: 575px) {
        flex-direction: column;
        a {
            width: 100%;
        }
    }
`