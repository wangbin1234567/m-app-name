import React, { Component } from 'react'
import { Route, Link,Redirect } from 'react-router-dom'
import Small from './small/index'
import Eat from './jiu/index'

export default class List extends Component {
    render() {
        return <div className="wrap-l">
            <nav>
                <span><Link to="/home/list/smallEat">小吃</Link></span>
                <span><Link to="/home/list/write">酒水</Link></span>
            </nav>
            <div className="main">
                <Route path="/home/list/smallEat" component={Small} />
                <Route path="/home/list/write" component={Eat} />
                <Redirect from="/home/list" to="/home/list/smallEat" />
            </div>
        </div>
    }
}
