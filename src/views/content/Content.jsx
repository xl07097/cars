import React, { Suspense} from "react";
import {Spin} from "antd";
import MyBread from "@/components/bread/breadcrumb";
import Router from "@/router/index";

import "./content.less";

function Content(){
    return (
        <main className="main-container">
            <MyBread></MyBread>
            <Suspense fallback={<div style={{textAlign:"center",paddingTop:100,background:"rgba(255,255,255,.1)"}}><Spin size="large" /></div>}>
                <Router></Router>
            </Suspense>
        </main>
    );
}

export default Content;