import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import Profile from "./Profile";
import NavItems from "./Navitems";
import Ico_logout from "../../asesst/icons/Ico_logout";
import NavItem from "./Navitem";
import Ico_close from "../../asesst/icons/Ico_close"
import useStore from "../../store/store";

function Navbar(){
    const navDisplay = useStore(state=>state.isShowNav)
    const setNavDisplay = useStore(state=>state.setIsShowNav)
    return(
        <Flex id="Nav_con"   position={"fixed"} dir={"column"} justify={"center"} align={"start"} css={{
            "height":"100%"  , "left":"0" , "width":"220px" , zIndex:"$top" , backgroundColor:"$primary",

            "& svg[id=close_nav]":{
                position:"absolute",
                zIndex:"$emergency",
                right:"$1",
                top:"$2",
                display:"none",
                fill:"$onPrimary500",
                cursor:"pointer",
                "&:hover":{
                    fill:"$onPrimary"
                }
            },
            "@bp1":{
                display:`${navDisplay?"flex":"none"}`,
                height:"100vh",
                right:"0",
                left:"revert",
  
                "& svg[id=close_nav]":{
                    display:"block"
            },
            },
            "@bp3":{
                height:"100vh",
                width:"100%",
                right:"0",
                left:"revert",
                "& div":{
                    justifyContent:"flex-start",
                alignItems:"center"
                } ,
                "& p[role=nav_button]":{
                    justifyContent:"center",
                alignItems:"center"
                },
                "& div[id=Nav_profile]":{
                    flex_c:"",
                }
            }
            }}>
        
        <Flex css={{"height":"100%" ,width:"100%" ,  "padding":"$2 $2" }} dir={"column"} justify={"start"} align={"start"}>
            <Text css={{"headline2":"900" , "color":"$onPrimary"}}>PERSIKA</Text>
            <Profile/>
            <NavItems/>
        </Flex>

        <Flex css={{width:"100%" , "padding":"$2 $2" }} dir={"column"} justify={"center"} align={"center"}>
        <NavItem ><Ico_logout width="24" height="24"/>Log out</NavItem>
        </Flex>
        
        <Ico_close id="close_nav" width="32" height="32" click={()=>setNavDisplay()}/>

        </Flex>
    )
}

export default Navbar 