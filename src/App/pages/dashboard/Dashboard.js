import React from "react";
import Flex from "../../Styles/Flex";
import Text from "../../Styles/Text";
import Dash_head from "./Dash_head";
import Dash_cardsList from "./Dash_overviewList";
import Dash_Card from "./Dash_Cards";
import {ViewsChart , PurchaseChart} from "./Charts"
import DashTable from "./Dash_table"
import {tableLastTiket , tableLastPurchase , tableTopProducts , tableTopCustomers} from "../../fakeData"
function Dashboard (){
    return(
        <Flex dir={"column"} justify="start" align={"center"} css={{
            width:"100%",
            
        }}>
            <Dash_head/>
            <Dash_cardsList/>

            <Dash_Card
             head="View OverView"
              description={"Views on this month has increased by "}
               metaDes={<span className="green">+0.7%</span>}
               realData={<ViewsChart/>}
               styles={{width:"100%" , height:"100%"}}
                />

                <Dash_Card
                    head="Last Tikets"
                    description={"You Have 22 tikets in this week  "}
                    metaDes={<span className="link">see all tikets</span>}
                    realData={<DashTable {...tableLastTiket}/>} 
                    styles={{width:"100%" , height:"100%"}}
                />

                <Dash_Card
             head="Purchase OverView"
              description={"Purchase on this month has increased by"}
               metaDes={<span className="green">+0.2%</span>}
               realData={<PurchaseChart/>}
               styles={{width:"100%" , height:"100%"}}
                />


                <Dash_Card
             head="Last Purchase"
              description={"In this week we had 45 purchase"}
               metaDes={<span className="link">see all sales</span>}
               realData={<DashTable {...tableLastPurchase}/>}
               styles={{width:"100%" , height:"100%"}}
                />
                
                <Flex dir={"row"} justify="between" align={"center"} css={{
                    width:"100%",
                    "@bp1":{
                        flex_c:"",
                        "&>*":{
                            width:"40%"
                        }
                    }
                }}>
                <Dash_Card
             head="Top Customers "
              description={"These customers had a high purchase amount"}

               realData={<DashTable {...tableTopCustomers}/>}
               styles={{width:"48%" , height:"100%"}}
                />
                                <Dash_Card
             head="Top Products"
              description={"These products had high sales"}

               realData={<DashTable {...tableTopProducts}/>}
               styles={{width:"48%" , height:"100%"}}
                />
                                {/* <Dash_Card
             head="Last Purchase"
              description={"In this week we had 45 purchase"}
               metaDes={<span className="link">see all sales</span>}
               realData={<DashTable {...tableLastPurchase}/>}
               styles={{width:"32%" , height:"100%"}}
                /> */}
                </Flex>

        </Flex>
    )
}



export default Dashboard