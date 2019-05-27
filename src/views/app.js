import React from 'react';

import Header from './header/header'
import Content from './content/Content.jsx'
import Footer from "./footer/footer";


function App(){
    return (
        <div style={{height: '100%'}}>
            <Header></Header>
            <Content name="jack1"> <span>haha1</span> <span>hah2</span> </Content>
            <Footer></Footer>
        </div>
    )
}

export default App;
