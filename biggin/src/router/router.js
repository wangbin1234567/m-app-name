import React, {Component} from 'react'
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom'
import Home from '../page/home/home'
import Login from '../page/login/login'

export default class Routs extends Component {
    render() {
        return <Router>
            <Route path="/" render={() => <Redirect to="/login"/>} exact />
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route> 
        </Router>
    }
}


// function Routers(){
//     return <Router>

//         <Switch>

//             <Route path='/home' component={Home}></Route>
//             <Route path='/login' component={Login}></Route>
//             <Redirect from='/' to='/home'></Redirect>

//         </Switch>
//     </Router>
// }

// export default Routers