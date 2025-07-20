import styled, { keyframes} from "styled-components";
import {theme} from "../../styles/Theme.ts";

const ContentWrapper = styled.div`
    margin-top: 13px;
    min-width: 440px;
    min-height: 400px;
    border: 4px solid ${theme.colors.mainBrightColor};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${theme.colors.mainDarkColor};
    border-radius: 1rem;
`
const Display = styled.div<{$isLastNum?:boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mainBrightColor};
    min-height: 250px;
    border-radius: 1rem;

    p {
        font-size: 100px;
        font-weight: 700;
        color: ${props => props.$isLastNum ? 'rgba(214, 0, 0, 0.9)' :'rgba(0, 0, 0, 0.9)' };
    }
`

const ControlMenuWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
`

const BtnHover = keyframes`
50% {transform: scale(0.95) translateY(2px); opacity: 0.6}
`

const Button = styled.button`
    background-color: ${theme.colors.mainBrightColor};
    padding: 5px 20px;
    border: 4px solid rgba(0,0,0,0.8);
    border-radius: 1rem;
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        animation: ${BtnHover} .5s linear infinite;
    }
    &:disabled {
        background-color: #457586;
        filter: grayscale(50%);
        cursor: auto;
    }
    &:hover:disabled {
        animation: none;
    }
`
export const S = {ContentWrapper, Display, ControlMenuWrapper, Button}
