import { styled } from "styled-components";
import ColorPallete from "../../assets/ColorPallete";

export const Container = styled.main`
width:100vw;
height:100vh;
display:flex;
align-items:flex-start;
justify-content:flex-start;
background-color: ${ColorPallete.background};
position: relative;
`
export const SidebarContainer = styled.div`
height:100vh;
min-width:100px;
width: 30%;
max-width:300px;
background-color: ${ColorPallete.primary};
transition: 0.5s;
overflow:hidden;
display:flex;
flex-direction:column;
align-items:center;
padding: 10px;
box-sizing: border-box;
flex-direction: column;
gap:30px;
z-index: 2;



@media (orientation: portrait) {
    min-width:0px;
    width:${props=>props.width};
    padding:${props=>props.width==="800px"?"10px":"0px"};
    max-width:80vw;
}
`
export const HeaderContainer = styled.div`
width:100%;
height:80px;
border-bottom: 1px solid lightgray;
background-color: ${ColorPallete.secondary};
display: flex;
align-items:center;
justify-content: flex-end;
padding: 10px;
box-sizing: border-box;
position: relative;
gap:20px;
position: absolute;

z-index: 1;
@media (orientation: portrait) {
    height:50px;
}
`

export const DefaultContainer = styled.div`
height:100%;
width:100%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

`
