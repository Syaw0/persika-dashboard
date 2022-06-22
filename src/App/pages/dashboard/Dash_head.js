import React from "react";
import Text from "../../Styles/Text";
import Flex from "../../Styles/Flex";

function Dash_head(){
    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:"100%",
            paddingTop:"$3"
        }}>
        <Text css={{
            "headline4":"500" , color:"$onBg" ,
            "@bp2":{
            headline5:"500"
            },
            "@bp3":{
                headline6:"500 "
            },
            }}>
                Hi , Yazdan
        </Text>

        <Text css={{
            "subhead1":"400" , color:"$onBg800" ,
            "@bp2":{
            // headline5:"500"
            },
            "@bp3":{
                subhead2:"400 "
            },
            }}>

        You can see summary of information in below
        </Text>
    </Flex>
    )
}



export default Dash_head