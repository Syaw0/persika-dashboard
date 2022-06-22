const tableLastTiket = {
    th:["User" ,"Name" , "Header" , "Date" , "Status"] ,
    tikets:[
        {id:"#idr21" , name:"Albert"  , header:"Support"  , date:"Apr 2 2022" , status:"Pending"},
        {id:"#idv21" , name:"Atlantic"  , header:"Support"  , date:"Apr 2 2022" , status:"Pending"},
        {id:"#id321" , name:"Uranos"  , header:"Question"  , date:"Apr 2 2022" , status:"Answered"},
        {id:"#idr41" , name:"Hasan"  , header:"Support"  , date:"Apr 3 2022" , status:"Pending"},
        {id:"#idr2e" , name:"James"  , header:"Question"  , date:"Apr 7 2022" , status:"Pending"},
        {id:"#idrws" , name:"Albert"  , header:"Refer"  , date:"Apr 6 2022" , status:"Answered"},
    ]
}

const tableLastPurchase = {
    th:["User" ,"Name" , "Amount" , "Buyer" , "Status"] ,
    tikets:[
        {id:"#idre1" , name:"Albert"  , Amount:"10"  , buyer:"sanana" , status:"Pending"},
        {id:"#idrwe1" , name:"Albert"  , Amount:"22"  , buyer:"sanana" , status:"Complete"},
        {id:"#idre" , name:"Albert"  , Amount:"33"  , buyer:"sanana" , status:"Refer"},
        {id:"#idr2s1" , name:"Albert"  , Amount:"12"  , buyer:"sanana" , status:"Pending"},

    ]
}



const tableTopCustomers = {
    th:["Profile" ,"Name" , "Amount" , "Last Purchase" ] ,
    tikets:[
        {profile:"src" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        {profile:"src" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        {profile:"src" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        {profile:"src" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },


    ]
}



const tableTopProducts = {
    th:["id" ,"Name" , "Amount" , "Last Purchase"] ,
    tikets:[
        {id:"#idw231" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        {id:"#idw231" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        {id:"#idw231" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        {id:"#idw231" , name:"Albert"  , Amount:"10"  , lastPurchase:"Apr 22 2022" },
        

    ]
}


export {tableLastTiket , tableLastPurchase , tableTopCustomers , tableTopProducts}