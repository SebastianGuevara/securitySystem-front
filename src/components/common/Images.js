import styled from 'styled-components'

export const LogoImage = styled.img`
width: auto;
max-width: 100%;
height: 100px;
`
export const ProfileImage = styled.img`
height:100%;
border-radius:999px;
`
export const BigLogoImage = styled(LogoImage)`
height: 120px;
`
export const FirstAirport = styled.img`
max-width: 100%;
height: auto;
cursor: pointer;
transition: 0.3s;

&:hover{
    transform: scale(1.2);
    transition: 1s;
    filter: drop-shadow(0 0 0.75rem crimson);
}
`
export const SecondAirport= styled.img`
max-width: 100%;
height: auto;
flex: 1;
cursor: pointer;
transition: 0.3s;

&:hover{
    transform: scale(1.2);
    transition: 1s;
    filter: drop-shadow(0 0 0.75rem crimson);
}
`
export const AreaImage = styled.img`
width:80%;
height:auto;
filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));
`