import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";

function Footer(){

    return(
       <Flex  dir={"column"} justify="center" align={"center"} css={{
        width:"100%",
        zIndex:"$bottom",
        padding:`$3 0`,
        borderTop:"1px solid $onBg200",
        marginTop:"$4"
       }}>  
            <Text css={{headline5:"500"}}>Persika Dashboard</Text>
            <Text css={{subhead3:"400"}}>© Copy Right 2021 - 2022</Text>
       </Flex>
    )
}


export default Footer