import { useState, useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import { ButtonsScrollContainer, DefaultContainer, ScanContainer } from '../components/common/Containers';
import { AreaButton, FormButton, SelectionButton } from '../components/common/Buttons';
import { getAreaById, getAreas } from '../services/AreaServices';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

const ScanQR = () => {
    const [qrCode, setQrCode] = useState(null);
    const [areas, setAreas] = useState([]);
    const [area, setArea] = useState(null);
    const location = useLocation(null);

    useEffect(()=>{
        getAreas().then((response)=>{
            setAreas(response.data);
        })
    },[])
    useEffect(()=>{
        if(qrCode&&area!=''){
            const permission = {
                area: decodeURIComponent(area),
                user: qrCode.text
            }
            console.log(permission)
        }
    },[qrCode])
    useEffect(()=>{
        setArea(location.pathname.split("/")[2])
    },[location])
    const handleScan = (data) => {
        if (data) {
          setQrCode(data);
        }
      }
    
    const handleError = (error) => {
        console.error(error);
    }
    

    return (
        <ScanContainer>
            {!area?<ButtonsScrollContainer>
                {
                    areas&&areas.map((area)=>{
                        return(
                            <SelectionButton to={`/scan/${area.id}`} key={area.id}>{area.name}</SelectionButton>
                        )
                    })
                }
            </ButtonsScrollContainer>:
            <QR
                onScan={handleScan}
                onError={handleError}
            />}
        </ScanContainer>
      );
  };
  
export default ScanQR;

const QR = styled(QrReader)`
    @media (orientation: portrait) {
        width:100%;
    }
`