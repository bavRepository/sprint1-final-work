import styled, {keyframes} from "styled-components";
import {theme} from "../../styles/Theme.ts";

const ContentWrapper = styled.div`
    margin-top: 15vh;
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
const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mainBrightColor};
    min-height: 250px;
    border-radius: 1rem;
`
const Count = styled.p`
    font-size: 100px;
    font-weight: 700;
    color: rgba(214, 0, 0, 0.9);
`

const ControlMenuWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
`

const BtnHover = keyframes`
50% {transform: scale(0.95) translateY(2px); opacity: 0}
`

const Button = styled.button`
    ${(props: { $isDisabled?: boolean }) =>
    props.$isDisabled &&
    css<{ $isDisabled?: boolean }>`
            background-color: #00fa9a;
        `}
    background-color: ${theme.colors.mainBrightColor};
    padding: 5px 20px;
    border: 4px solid rgba(0,0,0,0.8);
    border-radius: 1rem;
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        animation: ${BtnHover} .2s linear;
    }
`
export const S = {ContentWrapper, Display, Count, ControlMenuWrapper, Button}
