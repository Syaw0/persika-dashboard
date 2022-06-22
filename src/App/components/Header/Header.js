import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import InputField from "./inputField";
import useStore from "../../store/store";
import Ico_Menu from "../../asesst/icons/Ico_menu";
function Header(){
    const setNavDisplay = useStore(state=>state.setIsShowNav)
    return(
       <Flex  dir={"row"} justify="between" align={"center"} css={{
        width:"100%",
        zIndex:"$bottom",
        padding:`$1 0`,
        borderBottom:"1px solid $onBg200",
       }}>
            <Text css={{
                color:"$onBg" , "headline3":"600",
                "@bp2":{
                    headline4:"600"
                },
                "@bp3":{
                    headline5:"600"
                },

                }}>DASHBOARD</Text>

            <Flex justify={"center"} align="center" css={{
                "& svg[id=icon_menu]":{
                    display:"none",
                    cursor:"pointer",
                    fill:"$onBg700"
                },
                "& svg[id=icon_menu]:hover":{
                    fill:"$onBg900"
                },
                "@bp1":{
                    "& svg[id=icon_menu]":{
                        display:"block"
                    },
                    "& div ":{
                        display:"none"
                    }
                }

            }}>
            <InputField/>
            <Ico_Menu width="28" height="28" id="icon_menu" click={()=>{setNavDisplay()}} />
            </Flex>
       </Flex>
    )
}


export default Header