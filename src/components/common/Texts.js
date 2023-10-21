import { styled } from "styled-components";
import ColorPallete from "../../assets/ColorPallete";

export const NameText = styled.span`
color:gray;
font-size:1rem;

@media (orientation: portrait) {
    display:${props=>props.width==="800px"?"none":"block"};
}
`
export const H1 = styled.h1`
color: ${ColorPallete.primary};
height: 50px;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2px solid ${ColorPallete.primary};
`