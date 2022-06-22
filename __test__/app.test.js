import React from "react";
import { render , fireEvent , waitFor ,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "../src/App/App";
import {ViewsChart , PurchaseChart} from "../src/App/pages/dashboard/Charts"

jest.mock("../src/App/pages/dashboard/Charts" , ()=>{
    const org = jest.requireActual("../src/App/pages/dashboard/Charts" )
    return{
        "--esModule":true,
        ...org,
        ViewsChart:jest.fn(()=>"chart"),
        PurchaseChart:jest.fn(()=>"chart"),
    }
})

describe("app render correctly" , ()=>{
    test("rendering" , async ()=>{
        let con = render(<App/>)
        expect(con.container.querySelector("#Nav_con")).toBeInTheDocument()
    }),
    test("render Dashboard for first time",()=>{
        let con = render(<App/>)
        expect(con.container.querySelector("#dashboard_con")).toBeInTheDocument()
    })
})
