import { styled } from "styled-components";

export const NameText = styled.span`
color:gray;
font-size:1rem;

@media (orientation: portrait) {
    display:${props=>props.width==="800px"?"none":"block"};
}
`