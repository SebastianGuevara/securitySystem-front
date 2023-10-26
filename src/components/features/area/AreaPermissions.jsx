import { useEffect, useState } from "react";
import { DefaultContainer, DefaultHorizontalontainer, SideDeafautlContainer } from "../../common/Containers"
import { useLocation } from "react-router-dom";
import { getAreaById } from "../../../services/AreaServices";


const AreaPersmissions = () => {
    const location = useLocation();
    const [area, setArea] = useState(null);
    useEffect(()=>{
        if(location.pathname.split("/")[2]){
            const id = location.pathname.split("/")[2];
            getAreaById(id).then((response) => {
                setArea(response.data);
            });
        }
    },[])   
    return(
        <DefaultContainer style={{justifyContent:"flex-start"}}>
            <h1 style={{marginTop:"30px"}}>{area&&area.name}</h1>
            <h5>{area&&area.description}</h5>
            <DefaultHorizontalontainer style={{width:"100%"}}>
                <SideDeafautlContainer style={{justifyContent:"flex-start"}}>
                    <h1>Cámara</h1>
                </SideDeafautlContainer>
                <SideDeafautlContainer style={{justifyContent:"flex-start"}}>
                    <h1>Permisos</h1>
                    {
                        area&&area.permissions.map((permission)=>{
                            return(
                                    <h5 key={permission.id}>{permission.type} : {permission.name}</h5>
                            )
                        })
                    }
                </SideDeafautlContainer>

            </DefaultHorizontalontainer>

        </DefaultContainer>
    )
}

export default AreaPersmissions;