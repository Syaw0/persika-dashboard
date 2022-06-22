import React from "react";
import Flex from "../../Styles/Flex";
import Ico_dashboard from "../../asesst/icons/Ico_dashboard"
import Ico_chart from "../../asesst/icons/Ico_chart";
import Ico_shopping from "../../asesst/icons/Ico_shopping";
import Ico_inbox from "../../asesst/icons/Ico_inbox"
import Ico_admins from "../../asesst/icons/Ico_admins";
import Ico_bookmarks from "../../asesst/icons/Ico_bookmarks";
import Ico_setting from "../../asesst/icons/Ico_setting";
import Ico_themeSwitch from "../../asesst/icons/Ico_themeSwitchj";

import useStore from "../../store/store";
import NavItem from "./Navitem";

function NavItems(){
    const setTheme = useStore(state=>state.setTheme)
    const currentTheme = useStore(state=>state.currentTheme)
    const iconWidth = "24"
    return(
        <Flex dir={"column"} justify="start" css={{"width":"100%" , padding:"$1 0rem" }} >
            <NavItem><Ico_dashboard width={iconWidth} height={iconWidth}/>Dashboard</NavItem>
            <NavItem><Ico_chart width="24" height="24"/>Sales Report</NavItem>
            <NavItem><Ico_shopping width="24" height="24"/>Products</NavItem>
            <NavItem><Ico_inbox width="24" height="24"/>Tikets</NavItem>
            <NavItem><Ico_admins width="24" height="24"/>Admins</NavItem>
            <NavItem><Ico_bookmarks width="24" height="24"/>Bookmarks</NavItem>
            <NavItem><Ico_setting width="24" height="24"/>Setting</NavItem>
            <NavItem click={()=>{currentTheme=="light"?setTheme("dark"):setTheme("light")}}><Ico_themeSwitch width="24" height="24"/>Dark Mode</NavItem>
        </Flex>
    )
}


export default NavItems
