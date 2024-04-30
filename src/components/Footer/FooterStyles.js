import styled from "styled-components";
import { ContainerStyled } from "../Container/ContainerStyles";
import { WrapperStyled } from "../Wrapper/WrapperStyles";

export const FooterContainerStyled = styled(ContainerStyled)`
    background-color: var(--blue);
    color: var(--white);
`

export const FooterWrapper = styled(WrapperStyled)`
    padding-top: 100px;
    padding-bottom: 100px;
    @media (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`

export const FooterItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    flex-wrap: wrap;
    gap: 50px;
`

export const FooterItem = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    p {
        width: 300px;
        @media (max-width: 768px) {
            width: 80%;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FooterItemTitle = styled.div`
    display: flex;
    gap: 10px;
    font-size: 24px;
    align-items: center;
    font-weight: 500;
    color: var(--yellow);
    @media (max-width: 768px) {
        font-size: 19px;
    }
`