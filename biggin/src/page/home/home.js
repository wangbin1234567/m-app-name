import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Badge } from 'antd';
import List from './list/list'
import Shopp from './shopp/shopp'
import My from './my/my'

class Home extends Component {
    render() {
        let {count} = this.props;
        console.log('====================================');
        console.log(count);
        console.log('====================================');
        return <div className="wrap">
            <main>
                <Route path="/home/list" component={List} ></Route>
                <Route path="/home/shopp" component={Shopp} ></Route>
                <Route path="/home/my" component={My} ></Route>
                <Route path="/home" render={() => <Redirect to="/home/list" />}  />
            </main>
            <footer>
                <span className="span"><Link to="/home/list">首页</Link></span>
                <span className="span">
                    <Badge count={count}>
                        <Link to="/home/shopp">购物车</Link>
                    </Badge>
                </span>
                <span className="span"><Link to="/home/my">我的</Link></span>
            </footer>
        </div>
    }
}


const mapStateToProps = store =>({count:store.counts})

export default connect(mapStateToProps)(Home)