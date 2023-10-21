import styled from 'styled-components';
import ColorPallete from '../../assets/ColorPallete';

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

export const AdminSidebarButton = styled.button`
width: 100%;
height: 30px;
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 1rem;
border: transparent;
color: ${ColorPallete.background};
background-color: transparent;
cursor: pointer;
transition: 0.5s;
gap: 10px;
white-space:nowrap;

&:hover{
    border-left: 3px solid ${ColorPallete.blue};
}
`