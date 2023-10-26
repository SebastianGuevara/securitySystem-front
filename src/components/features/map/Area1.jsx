import { DefaultHorizontalontainer, SideDeafautlContainer } from "../../common/Containers"
import { AreaImage } from "../../common/Images";
import FirstImage from "../../../assets/images/1air.png"
import { AreaButton } from "../../common/Buttons";
import { H1 } from "../../common/Texts";
import { getAreaById } from "../../../services/AreaServices";
import { useDispatch } from "react-redux";
import { setArea } from "../../../redux/slices/AreaSlice";
import { Link } from "react-router-dom";

const Area1 = () => {

    const dispatch = useDispatch();
    const handleButtonClick = (id) =>{
        getAreaById(id).then((response) => {
            dispatch(setArea(response.data));
        });
    }
    return(
        <DefaultHorizontalontainer>
            <SideDeafautlContainer>
                <AreaImage src={FirstImage} color="white"/>

            </SideDeafautlContainer>
            <SideDeafautlContainer color="transparent">
                <H1>Puertas</H1>
                <AreaButton to="/area/3">
                        Puerta 1
                </AreaButton>
                <AreaButton to="/area/4">
                    Puerta 2
                </AreaButton>
                <AreaButton to="/area/5">
                    Puerta 3
                </AreaButton>
                <AreaButton to="/area/6">
                    Puerta 4
                </AreaButton>
                <AreaButton to="/area/7">
                    Puerta 5
                </AreaButton>
            </SideDeafautlContainer>
        </DefaultHorizontalontainer>
    )
}

export default Area1;