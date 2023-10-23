import Area1 from "../components/features/map/Area1";
import Area2 from "../components/features/map/Area2";
import Area3 from "../components/features/map/Area3";

import GeneralMap from "../components/features/map/GeneralMap"
import { useLocation } from "react-router-dom";
const Map = () => {
    const location = useLocation().pathname;
    return(
        <>
            {(2===location.split("/").length)?<GeneralMap/>:null}
            {("area1"===location.split("/")[2])?<Area1/>:null}
            {("area2"===location.split("/")[2])?<Area2/>:null}
            {("area3"===location.split("/")[2])?<Area3/>:null}
        </>
    ) 
}

export default Map;