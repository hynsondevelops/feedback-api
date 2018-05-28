import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import store from './store/configureStore'
import {authenticateUser} from './actions/actions.js'
import UserLogIn from './components/UserLogIn/test.js'


const App = ({ auth_info, onClick }) =>
  <div>
    
       <div>
          <h1>HOME</h1>
          // all 3 "links" dispatch actions:
          <span onClick={onClick}>User 5</span>   // so does this, but without SEO benefits
        </div>

       <h1>USER: {}</h1> // press the browser BACK button to go HOME :)
      <h1> Token: {(auth_info.token)}  </h1>
  </div>

const mapStateToProps = ({auth_info, store} ) => ({ auth_info, store })
const mapDispatchToProps = (dispatch) => ({
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(UserLogIn)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer store={store}/>
  </Provider>,
  document.getElementById('root')
)