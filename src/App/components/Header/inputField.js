import React from "react";
import Flex from "../../Styles/Flex";
import Input from "../../Styles/Input";
import Ico_search from "../../asesst/icons/Ico_search"
function InputField (){
    return(
        <Flex css={{
            padding:"$1 0",
            flex_c:"",
            jc_ac:"",
            position:"relative",
            width:"fit-content",
            "& svg":{
                fill:"none",
                stroke:"$onBg300",
                position:"absolute",
                right:"0",
                cursor:"pointer",
                },
            
    }}>
        <Input inputType={"text"} type={"text"} placeholder="Search..."></Input>
        <Ico_search/>
    </Flex>
    )
}

export default InputField