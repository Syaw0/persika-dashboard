import React from "react";
import globalStyle from "./Styles/globalCss"
import Navbar from "./components/Navbar/Navbar"
import darkTheme from "./Styles/theme/darkTheme"
import { theme } from "./Styles/@stitches.config";
import Header from "./components/Header/Header"
import Flex from "./Styles/Flex";
import Dashboard from "./pages/dashboard/Dashboard"
import useStore from "./store/store"
import Footer from "./components/Footer/Footer"
window.addEventListener("resize", () => {
  document.getElementById("root").width = window.innerWidth;
});

function App() {
  const currentTheme = useStore(state=>state.currentTheme)
  globalStyle()
  return	(
<>
    <div id="wrapper"  className={currentTheme=="light" ?darkTheme:theme}>
    <Navbar/>
    <Flex dir={"column"} justify="start" align={"center"} css={{
      padding:"0 $3 0 $navSize",
      width:"100%",
      "@bp1":{
        padding:"0 $3 0 $3",
      },
      "@bp2":{
        padding:"0 $2 0 $2"
      },
      "@bp3":{
        padding:"0 $1"
      }
    }}>
    <Header/>
    <Dashboard/>
    <Footer/>
    </Flex>
    </div>
</>
    )
  	
  
}

export default App;
