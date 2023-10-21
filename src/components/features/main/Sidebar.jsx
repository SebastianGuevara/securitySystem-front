import { useEffect, useRef } from "react";
import { SidebarContainer } from "../../common/Containers"
import { useSelector } from "react-redux";
import { LogoImage } from "../../common/Images";
import logo from '../../../assets/images/logo.png'
import { AdminSidebarButton } from "../../common/Buttons";
import { SidebarIcon } from "../../common/Icons";

const Sidebar = () =>{
    const sidebar = useSelector(state => state.header);
    const sidebarRef = useRef(null);
    useEffect(()=>{
        if("800px"===sidebar.sidebarWidth){
            sidebarRef.current.focus();
        }
    },[sidebar.sidebarWidth])
    return(
        <SidebarContainer ref={sidebarRef} width={sidebar.sidebarWidth} onBlur={()=>console.log("test2")}>
            <LogoImage src={logo}/>
            <AdminSidebarButton>
                <SidebarIcon icon="material-symbols:map-outline" width='18px'/>
                Mapa general
            </AdminSidebarButton>
        </SidebarContainer>
    )
}

export default Sidebar;