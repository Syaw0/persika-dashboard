import React from "react";
import Text from "../../Styles/Text";

function NavItem(props){
    return(
        <Text onClick={props.click} role={"nav_button"}  cursor={"click"} css={{
            color:"$onPrimary500",borderRadius:"8px" , "& svg":{fill:"$onPrimary500" , marginRight:"$1"}, 
            "&:hover":{"color":"$onPrimary",backgroundColor:"$onPrimaryCon100" , "& svg":{fill:"$onPrimary"}},
            "subhead1":"700",
            width:"100%",
            "flex_r":"",
            "jfs_ac":"",
            padding:"$1 $1"
            }}>

            {props.children}
        </Text>
    )
}

export default NavItem