import { styled } from "./@stitches.config";

const Table = styled("table" , {
    width:"100%",
    textAlign:"center",
    "& thead":{
        borderBottom:"1px solid $onBg400",
        height:"3rem"
    },
    "& tbody tr":{
        borderBottom:"1px solid $onBg100",
        height:"3.5rem"
        
    },
    "& tbody tr:last-child":{
        borderBottom:"none",        
    },
// border:"1px solid black" ,
borderCollapse:"collapse",
// "&>*":{
//     border:"1px solid black"
// },
"& td ":{
    
    textAlign:"center",
    width:"fit-content"
}
})

export default Table