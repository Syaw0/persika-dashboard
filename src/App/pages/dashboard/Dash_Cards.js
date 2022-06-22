import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import darkTheme from "../../Styles/theme/darkTheme"

function Dash_Card(props){
    
    const cardWidth = props.styles["width"]
    const cardHeight = props.styles["height"]
    return(
        <Flex dir={"column"} justify="between" align={"center"} css={{
            width:`${cardWidth}`,
            minHeight:"100%",
            boxShadow:"$1dp",
            padding:"$3 $2",
            marginTop:"$3",
            borderRadius:"8px ",
            "@bp1":{width:"100%"},
            "@bp3":{
                padding:"$2 $1",

            },
            [`.${darkTheme} &`]:{
                border:"1px solid $onBg300"
            }
            
        }}>
            <Flex dir={"column"} justify="start" align={"start"} css={{
                width:"100%",
                padding:"0 0 $3 0",
            }} >
                <Text css={{
                    headline5:"500",
                    paddingBottom:"$1",
                    color:"$onBg",
                    "@bp3":{
                        headline6:""
                    }
                    
                }}>{props.head}</Text>

                <Text css={{
                    subhead1:"300",
                    color:"$onBg",
                    "@bp3":{
                        subhead2:"300"
                    }
                }}>{props.description} {props.metaDes}</Text> 
                {/* //best way or better way is to use styled span  */}
            </Flex>
            {props.realData}
        </Flex>
    )
}


export default Dash_Card