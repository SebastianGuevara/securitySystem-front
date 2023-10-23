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
                <AreaButton>
                    Entrada principal
                </AreaButton>
                <AreaButton>
                    Ascensor
                </AreaButton>
                <AreaButton>
                    Escalera 1
                </AreaButton>
                <AreaButton>
                    Escalera 2
                </AreaButton>
                <AreaButton>
                    Entrada baños
                </AreaButton>
            </SideDeafautlContainer>
        </DefaultHorizontalontainer>
    )
}

export default Area3;