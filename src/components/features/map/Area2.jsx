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
                <AreaButton>
                    Oficina 1
                </AreaButton>
                <AreaButton>
                    Oficina 2
                </AreaButton>
                <AreaButton>
                    Oficina 3
                </AreaButton>
                <AreaButton>
                    Oficina 4
                </AreaButton>
                <AreaButton>
                    Oficina 5
                </AreaButton>
            </SideDeafautlContainer>
        </DefaultHorizontalontainer>
    )
}

export default Area2;