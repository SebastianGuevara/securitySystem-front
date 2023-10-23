import { DefaultHorizontalontainer, SideDeafautlContainer } from "../../common/Containers"
import { AreaImage, FirstAirport } from "../../common/Images";
import FirstImage from "../../../assets/images/1air.png"
import { AreaButton } from "../../common/Buttons";
import { H1 } from "../../common/Texts";

const Area1 = () => {
    return(
        <DefaultHorizontalontainer>
            <SideDeafautlContainer>
                <AreaImage src={FirstImage} color="white"/>

            </SideDeafautlContainer>
            <SideDeafautlContainer color="transparent">
                <H1>Puertas</H1>
                <AreaButton>
                    Puerta 1
                </AreaButton>
                <AreaButton>
                    Puerta 2
                </AreaButton>
                <AreaButton>
                    Puerta 3
                </AreaButton>
                <AreaButton>
                    Puerta 4
                </AreaButton>
                <AreaButton>
                    Puerta 5
                </AreaButton>
            </SideDeafautlContainer>
        </DefaultHorizontalontainer>
    )
}

export default Area1;