import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import {meshs} from "../../Styles/meshGradients"
import Ico_dots from "../../asesst/icons/Ico_dots"

function Dash_Card(props){

    
    return(
        <Flex dir={"row"} justify="between" align={"center"} css={{
            "width":"calc(100%/4 - 16px)",
            borderRadius:"8px",
            padding:"$2 $2",
            meshType:`${meshs["mesh"+props.mesh]}`,
            "& svg":{
                fill:"$white500",
                stroke:"none"
            },
            "@bp3":{
                width:"100%",
                marginBottom:"$1",
                padding:"$1 $1"
            }

        }}>

            <Flex justify={"start"} align="center" css={{
                "height":"100%",
                width:"100%",

                "@bp2":{
                    flexDirection:"column",
                    jc_ac:""
                }
            }}>
                {props.icon}
                <Flex dir={"column"} justify="center" align={"start"} css={{
                    width:"100%",
                    paddingLeft:"$2",
                    "&>*":{
                    width:"100%",
                },
                    "@bp2":{
                        jc_ac:"",
                        padding:"0",
                        "&>*":{
                            textAlign:"center",
                        },
                    }
                }}>
                <Text css={{
                    "subhead1":"500",
                    color:"$white500",
                    "@bp3":{
                        subhead2:"500"
                    }
                }}>{props.head}</Text>

                <Text css={{
                    "headline5":"700",
                    color:"$white",
                    "@bp3":{
                        headline6:"700"
                    }
                }}>{props.value}</Text>
                </Flex>
            </Flex>

            <Flex justify={"start"} align="start" css={{
                height:"100%",
                display:"none",
                "& svg":{
                    cursor:"pointer",
                    "&:hover":{
                        fill:"$white"
                    }
                }
            }}>
                {/* <Ico_dots width="15" height="15"/> */}
            </Flex>
        </Flex>
    )
}
export default Dash_Card