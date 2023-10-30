import { IconButton } from "../../common/Buttons";
import { HeaderContainer } from "../../common/Containers"
import { MenuIcon } from "../../common/Icons";
import ColorPallete from "../../../assets/ColorPallete";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../redux/slices/HeaderSlice";
import { NameText } from "../../common/Texts";
import { ProfileImage } from "../../common/Images";
import defaultProfilePicture  from '../../../assets/images/defaultProfile.jpg'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () =>{
    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.header);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user.id){
            navigate("/login")
        }
    },[])

    const changeSidebarWidth = () =>{
        let sidebarWidth = sidebar.sidebarWidth;
        ("0px"===sidebarWidth)?dispatch(toggleSidebar({sidebarWidth: "800px"})):dispatch(toggleSidebar({sidebarWidth: "0px"}));
    }

    return(
        <HeaderContainer>
            <NameText width={sidebar.sidebarWidth}>Sebastián Guevara - Administrador</NameText>
            <ProfileImage src={defaultProfilePicture}/>
            <IconButton onClick={()=>changeSidebarWidth()}>
                <MenuIcon icon="charm:menu-hamburger" color={ColorPallete.primary} height="30"/>
            </IconButton>        
        </HeaderContainer>
    )
}

export default Header;