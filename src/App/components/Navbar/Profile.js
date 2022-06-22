import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
function Profile(){
    return(
        <Flex dir={"row"} justify="start" css={{"width":"100%" , padding:"$3 0rem $2 0rem" }} id="Nav_profile" >
            <Flex cursor={"click"} overflow={"hidden"} css={{"width":"45px" , "height":"45px" , "borderRadius":"$50" , "& img":{"imgResponsive":""}}} justify={"center"} align={"center"}>
                <img src="https://user-images.githubusercontent.com/90524474/174474821-2ee4be20-1a58-4298-916c-deaca65993d2.jpg" alt="admin-profile"/>
            </Flex>

            <Flex css={{padding:"0rem $1"}} dir={"column"} justify={"center"} align={"start"}>
            <Text css={{"subhead2":"400" , "color":"$onPrimary"}}>Yazdan Moghadam</Text>
            <Text css={{"subhead2":"300" , "color":"$onPrimary500"}}>@yzdn</Text>
            </Flex>
        </Flex>
    )
}


export default Profile