import { DefaultContainer, MapContainer, SecondMapContainer } from "../../../components/common/Containers"
import Air1 from "../../../assets/images/1air.png"
import Air2 from "../../../assets/images/2air.png"
import Air3 from "../../../assets/images/3air.png"
import { Link } from "react-router-dom"
import { FirstAirport, SecondAirport } from "../../../components/common/Images";

const GeneralMap = () => {
    return(
        <DefaultContainer>
            <h1>Mapa general</h1>
            <MapContainer>
                <Link to={"area1"}>
                    <FirstAirport src={Air1}/>
                </Link>
                <SecondMapContainer>
                    <Link to={"area2"}>
                        <SecondAirport src={Air2} onClick={()=>console.log("Hola")}/>
                    </Link>
                    <Link to={"area3"}>
                        <SecondAirport src={Air3}/>
                    </Link>
                </SecondMapContainer>            
            </MapContainer>
        </DefaultContainer>
    ) 
}

export default GeneralMap;