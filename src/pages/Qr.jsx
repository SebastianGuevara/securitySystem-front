import QRCode from 'react-qr-code';
import { DefaultContainer } from '../components/common/Containers';
import { useSelector } from 'react-redux';
import ColorPallete from '../assets/ColorPallete';
import styled from 'styled-components'
const Qr = () => {
    const user = useSelector(state => state.user);
    const id = user.id;
    return (
        <DefaultContainer>
            {id?<QR fgColor={ColorPallete.primary} bgColor="#f2f2f2" value={id.toString()}/>:null}
        </DefaultContainer>
    )
}

export default Qr;

const QR = styled(QRCode)`
width: auto;
height: 80%;

@media (orientation: portrait) {
    width:80%;
    height: auto;
}
`