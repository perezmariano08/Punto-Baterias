import styled from "styled-components";

export const ButtonWrapper = styled.a`
    display: flex;
    gap: 6px;
    border-radius: 20px;
    background-color: var(--blue);
    border: 1px solid ${({ border }) => `var(--${border})`};
    padding: 8px 20px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: ${({ background }) => `var(--${background})`};
    color: ${({ color }) => `var(--${color})`};
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`