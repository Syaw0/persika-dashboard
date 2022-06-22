import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import Dash_Card from "./Dash_overviewCard";
import Ico_cart from "../../asesst/icons/Ico_cart";
import Ico_eye from "../../asesst/icons/Ico_eye"
import Ico_user from "../../asesst/icons/Ico_user"
import Ico_productBox from "../../asesst/icons/Ico_productBox"

function Dash_cardsList(){

    let iconSize = {width:"32"  , height:"32"}

    return(
        <Flex dir={"column"} justify="start" align={"center"} css={{
            width:"100%",
            paddingTop:"$3"
                
        }}>
            <Flex dir={"row"} justify="between" css={{
                width:"100%" ,
                "@bp3":{
                    flexDirection:"column",
                    jc_ac:"",
                    
                }
            }}>
                <Dash_Card icon={<Ico_cart {...iconSize} />} head="All Purchase" value="302" mesh="1"/>
                <Dash_Card icon={<Ico_eye {...iconSize} />} head="All Views" value="1402" mesh="2"/>
                <Dash_Card icon={<Ico_user {...iconSize} />} head="All Users" value="258" mesh="3"/>
                <Dash_Card icon={<Ico_productBox {...iconSize} />} head="All Products" value="102" mesh="4"/>
            </Flex>
        </Flex>
    )
}

export default Dash_cardsList