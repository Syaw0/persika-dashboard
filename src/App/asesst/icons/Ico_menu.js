import React from "react";

function Ico_Menu(props){
    return(
<svg xmlns="http://www.w3.org/2000/svg" onClick={props.click} version="1.1" id={props.id} width={props.width} height={props.height} viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>

    )
}



export default Ico_Menu

