import QRCode from 'qrcode.react';
import { DefaultContainer } from '../components/common/Containers';
import { useSelector } from 'react-redux';
import ColorPallete from '../assets/ColorPallete';
import styled from 'styled-components'
const Qr = () => {
    const user = useSelector(state => state.user);
    return (
        <DefaultContainer>
            <QR fgColor={ColorPallete.primary} bgColor="#f2f2f2" value={user.id} level='Q' renderAs='canvas' size="1000" style={{}}/>
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