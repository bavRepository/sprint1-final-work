import styled from "styled-components";
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
const ControlMenuWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
`

export const S = {ContentWrapper, ControlMenuWrapper}
