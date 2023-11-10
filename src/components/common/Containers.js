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
width:250px;
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

height:calc(100% - 80px);
width:calc(100% - 250px);
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
flex-direction: column;
position: absolute;
bottom: 0;
right: 0;

@media (orientation: portrait) {
    width:100%;
}
`
export const LoginContainer = styled(Container)`
background: linear-gradient(0deg, hsla(217, 100%, 17%, 1) 0%, hsla(218, 95%, 37%, 1) 100%);
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
`
export const LoginFormContainer = styled.div`
min-width: 450px;
max-width: 500px;
width: 25vw;
height: 45vh;
background-color: ${ColorPallete.background};
border-radius: 30px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
overflow: hidden;
align-items: center;
justify-content: center;
gap: 20px;
@media (orientation: portrait) {
    min-width: 100px;
    width: 80%;
    height:350px;
}
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 30px;
font-size: 1.2rem;
`

export const MapContainer = styled.div`

display: flex;
align-items: flex-start;
justify-content: center;
@media (orientation: portrait) {
    flex-direction: column;
}
`
export const SecondMapContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
`

export const DefaultHorizontalontainer = styled(DefaultContainer)`
flex-direction: row;
gap: 30px;
padding: 20px;
box-sizing: border-box;


@media (orientation: portrait) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

`
export const SideDeafautlContainer = styled.div`
height:80%;
width:100%;
padding: 20px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 30px;
flex-direction: column;
gap:30px;

`
export const ScanContainer = styled(DefaultContainer)`
background-color: ${ColorPallete.background};
width: 100%;
height: 100%;
`
export const ButtonsScrollContainer = styled.div`
background-color: white;
height: 80%;
width: 40%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
flex-direction: column;
gap: 20px;
overflow-y: scroll;
padding: 10px;


@media (orientation: portrait) {
    width: 80%;
}
`