import React from 'react'
import ReactDOM from 'react-dom';
import {store} from './store/store'
import {connect,Provider} from 'react-redux'
import {Container} from './container/count'


ReactDOM.render(<Provider store={store}><Container/></Provider>,document.getElementById('app'));
