import React from 'react';
import {Link, IndexLink} from 'react-router-dom';
import './header.less'

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0 
        }
    }
    componentDidMount(){
        setInterval(()=> {
           this.tick();
        },1000)
    }
    tick(){
        this.setState((prev,props) =>({
            count: prev.count+1
        }))
    }
    render() {
        return (
        <header className="header">
            <div className="header-left">
                <h1 className="header-title">创客</h1>
                    <IndexLink to="/">index</IndexLink>
                <Link to='/chart'>chart</Link>
                <Link to='/other'>other</Link>
                <Link to='/other/chart'>link4</Link>
            </div>
           
        </header>
        )
    }
}
      // <ul className="app-logout">
            //     <li>退出</li>
            // </ul>

export default Header