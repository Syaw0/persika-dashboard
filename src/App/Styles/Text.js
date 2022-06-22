import { styled } from "./@stitches.config";

const Text = styled("p" , {
    color:"$onBg",

    "& span[class=green]":{
        color:"$onSuccess",
        subhead1:"500",
        "@bp3":{
            "&":{
                subhead2:"500"
            }
        }
    },
    "& span[class=link]":{
        color:"$onBg",
        subhead2:"200",
        borderBottom:"1px solid $onBg",
        cursor:"pointer",

    },

    variants:{
        "cursor":{
            "click":{
                "cursor":"pointer"
            } ,
            "default":{
                "cursor":"default"
            }
        } ,
        "table":{
            "answer":{
                backgroundColor:"$success",
                color:"$onSuccess",
                padding:"$1 $1",
                borderRadius:"8px",
                width:"fit-content"
            } ,
            "notAnswer":{
                backgroundColor:"$pending",
                color:"$onPending",
                padding:"$1 $1",
                borderRadius:"8px",
                maxWidth:"70%"
            } ,
            "complete":{
                backgroundColor:"$success",
                color:"$onSuccess",
                padding:"$1 $1",
                borderRadius:"8px",
                maxWidth:"70%"
            } ,
            "refer":{
                backgroundColor:"$error",
                color:"$onError",
                padding:"$1 $1",
                borderRadius:"8px",
                maxWidth:"70%"
            } ,
            "pending":{
                backgroundColor:"$pending",
                color:"$onPending",
                padding:"$1 $1",
                borderRadius:"8px",
                maxWidth:"70%"
            } ,
        }

    },
    defaultVariants:{
        cursor:"default"
    }
})


export default Text 