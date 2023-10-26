import { DefaultHorizontalontainer, SideDeafautlContainer } from "../../common/Containers";
import SecondImage from "../../../assets/images/2air.png"
import { AreaImage } from "../../common/Images";
import { H1 } from "../../common/Texts";
import { AreaButton } from "../../common/Buttons";

const Area2 = () => {
    return(
        <DefaultHorizontalontainer>
            <SideDeafautlContainer>
                <AreaImage src={SecondImage} color="white"/>
            </SideDeafautlContainer>
            <SideDeafautlContainer>
                <H1>Area 2</H1>
                <AreaButton to="/area/13">
                    Oficinas
                </AreaButton>
                <AreaButton to="/area/14">
                    Entrada baño oficinas
                </AreaButton>
                <AreaButton to="/area/15">
                    Torre de control
                </AreaButton>
            </SideDeafautlContainer>
        </DefaultHorizontalontainer>
    )
}

export default Area2;