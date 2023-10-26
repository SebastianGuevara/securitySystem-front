import styled from 'styled-components';
import ColorPallete from '../../assets/ColorPallete';
import { Link } from 'react-router-dom';

export const IconButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
position: absolute;
left: 10px;

@media (orientation: landscape) {
    display:none;
}
`

export const AdminSidebarButton = styled(Link)`
width: 100%;
height: 30px;
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 1rem;
border: transparent;
color: ${ColorPallete.background};
background-color: transparent;
padding: 0 10px;
box-sizing: border-box;
cursor: pointer;
transition: 0.1s;
gap: 10px;
white-space:nowrap;
text-decoration:none;

&:hover{
    border-left: 3px solid ${ColorPallete.blue};
}
`

export const FormButton = styled.button`
background-color: ${ColorPallete.primary};
color: ${ColorPallete.background};
outline: none;
border: none;
padding: 10px 20px;
border-radius: 15px;
`

export const AreaButton = styled(Link)`
background-color: ${ColorPallete.primary};
color: ${ColorPallete.background};
width: 50%;
height: 40px;
border-radius: 10px;
border: none;
outline: none;
font-size: 1rem;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
`