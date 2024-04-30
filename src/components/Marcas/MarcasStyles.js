import styled from "styled-components";
import { ContainerStyled } from "../Container/ContainerStyles";
import { WrapperStyled } from "../Wrapper/WrapperStyles";

export const MarcasContainerStyled = styled(ContainerStyled)`

`

export const MarcasWrapper = styled(WrapperStyled)`
    padding-top: 50px;
    padding-bottom: 100px;
    justify-content: start;
    align-items: start;
    gap: 40px;
    flex-direction: column;
    @media (max-width: 768px) {
        padding-top: 25px;
        padding-bottom: 50px;
    }
`

export const MarcasTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
        max-width: 900px;
    }
`

export const MarcasLogos = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    
    img {
        height: 80px;
        filter: saturate(0);
        opacity: .5;
        transition: all .3s ease-in-out;
        &:hover {
            filter: saturate(1);
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        justify-content: center;
        gap: 20px;
        img {
            height: 50px;
        }
    }
`