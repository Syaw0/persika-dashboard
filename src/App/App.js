import React from "react";
import globalStyle from "./Styles/globalCss"

// import darkTheme from "./theme/darkTheme"
// import {theme} from "../@stitches.config"

window.addEventListener("resize", () => {
  document.getElementById("root").width = window.innerWidth;
});

function App() {

  globalStyle()
  return	(
<>
    <div id="wrapper">

    </div>
</>
    )
  	
  
}

export default App;
