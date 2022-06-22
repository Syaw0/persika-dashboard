import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import Table from "../../Styles/Table";
import Ico_user from "../../asesst/icons/Ico_user";

function DashTable({th  ,tikets}){
    let haveStatus = false
    return(
        <Table>
        <thead>
        <tr>
        {th.map((v ,i )=>{

            if(v == "Status"){
                
                haveStatus = true
            }
            return <td key={i} ><Text css={{subhead1:"500" , color:"$onBg" , "@bp3":{subhead2:"500"}}}>{v}</Text></td>
        })}
        </tr>
        </thead>
        <tbody>
        {tikets.map((v,i)=>{
            return(
            <tr key={i}>
            {Object.keys(v).map((va , index)=>{
                
                switch(Object.keys(v)[index]){
                    case "name":
                    return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"}}><Text css={{subhead1:"500" , color:"$onBg" , "@bp3":{subhead2:"500"}}}>{v[va]}</Text></Flex></td> ;
                    case "header":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"  }}><Text css={{subhead1:"200" , color:"$onBg" , borderBottom:"1px solid $onBg300" ,"@bp3":{subhead2:"300"}}}>{v[va]}</Text></Flex></td> ;
                        case "id":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%" }}><Text cursor={"click"} css={{subhead1:"300" , color:"$primary" , "@bp3":{subhead2:"200"}}}>{v[va]}</Text></Flex></td> ;
                        case "date":
                            return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%" }}><Text  css={{subhead1:"300" , "@bp3":{subhead2:"300"} }}>{v[va]}</Text></Flex></td> ;
                        case "Amount":
                            return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%" }}><Text  css={{subhead1:"300" , "@bp3":{subhead2:"300"} }}>{v[va]}</Text></Flex></td> ;
                        case "buyer":
                            return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%" }}><Text  css={{subhead1:"300" , "@bp3":{subhead2:"300"} }}>{v[va]}</Text></Flex></td> ;
                      
                        case "lastPurchase":
                            return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%" }}><Text  css={{subhead1:"300" , "@bp3":{subhead2:"300"} }}>{v[va]}</Text></Flex></td> ;
                        case "profile":
                            return <td key={index}><Flex justify={"center"} align={"center"} css={{"& svg ":{fill:"$onBg500" }}}><Ico_user width="24px" height="24px"/> </Flex></td> ;

                }

                if (haveStatus &&  Object.keys(v)[index] == "status"){
                    switch(v[va]){
                        case "Pending":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"  }}><Text table={"notAnswer"}  css={{subhead2:"500" , "@bp3":{subhead3:"500"}}}>{v[va]}</Text></Flex></td>
                        break;
                        case "Answered":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"}}><Text table={"answer"}  css={{subhead2:"500" ,"@bp3":{subhead3:"500"}}}>{v[va]}</Text></Flex></td>
                        break;
                        case "Pending":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"}}><Text table={"pending"}  css={{subhead2:"500" ,"@bp3":{subhead3:"500"}}}>{v[va]}</Text></Flex></td>
                        break;
                        case "Refer":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"}}><Text table={"refer"}  css={{subhead2:"500" ,"@bp3":{subhead3:"500"}}}>{v[va]}</Text></Flex></td>
                        break;
                        case "Complete":
                        return <td key={index}><Flex justify={"center"} align={"center"} css={{width:"100%"}}><Text table={"complete"}  css={{subhead2:"500" ,"@bp3":{subhead3:"500"}}}>{v[va]}</Text></Flex></td>
                        break;
                    }
                }else{
                return <td key={index}><Text>{v[va]}</Text></td>
                }
            })}
            </tr>
            )
            })}
        </tbody>

        </Table>
    )
}


export default DashTable