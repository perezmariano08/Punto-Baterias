import styled from "styled-components";
import { ContainerStyled } from "../Container/ContainerStyles";
import { WrapperStyled } from "../Wrapper/WrapperStyles";

export const ServiciosContainerStyled = styled(ContainerStyled)`


`

export const ServiciosWrapper= styled(WrapperStyled)`
    padding-top: 100px;
    padding-bottom: 50px;
    justify-content: start;
    align-items: start;
    gap: 40px;
    flex-direction: column;
    @media (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 25px;
    }
`

export const ServiciosContent = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    align-items: center;
    img {
        width: 430px;
        border-radius: 50px 0;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ServiciosItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ServiciosItem = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 14px;
        gap: 10px;
    }
`

export const ServiciosItemIcon = styled.div`
    padding: 5px;
    background-color: var(--gray-200);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    i {
        font-size: 24px;
    }
`