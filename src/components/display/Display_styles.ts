import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

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

export const S = {
    Display
}