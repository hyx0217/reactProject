import React from 'react'
import ReactDOM from 'react-dom';
import {store} from './store/store'
import {connect,Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import {Home,News,Product,Navgitor,Cart,About} from './compoents'
class Index extends React.Component{
    render(){
        return (
            <Router>
                <div>
                <Navgitor/>
                    <Switch>
                        <Route path='/' component={Home} exact></Route>
                        <Route path='/news' component={News} ></Route>
                        <Route path='/product' component={Product} ></Route>
                        <Route path='/cart' component={Cart} ></Route>
                        <Route path='/about' component={About} ></Route>

                    </Switch>
                </div>
            </Router>
        )
       
    }
}

ReactDOM.render(<Provider store={store}><Index/></Provider>,document.getElementById('app'));
