import { DefaultHorizontalontainer, SideDeafautlContainer } from "../../common/Containers"
import { AreaImage } from "../../common/Images";
import ThirdImage from "../../../assets/images/3air.png"
import { H1 } from "../../common/Texts";
import { AreaButton } from "../../common/Buttons";

const Area3 = () => {
    return(
        <DefaultHorizontalontainer>
            <SideDeafautlContainer>
                <AreaImage src={ThirdImage} color="white"/>
            </SideDeafautlContainer>
            <SideDeafautlContainer>
                <H1>Area 3</H1>
                <AreaButton to="/area/8">
                    Entrada principal
                </AreaButton>
                <AreaButton to="/area/9">
                    Ascensor
                </AreaButton>
                <AreaButton to="/area/10">
                    Escalera 1
                </AreaButton>
                <AreaButton to="/area/11">
                    Escalera 2
                </AreaButton>
                <AreaButton to="/area/12">
                    Entrada baños
                </AreaButton>
            </SideDeafautlContainer>
        </DefaultHorizontalontainer>
    )
}

export default Area3;