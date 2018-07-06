import React from 'react'
import { render } from 'react-dom'
//import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import store from '../../store/configureStore.js'
import {authenticateUser, emailFormChange, passwordFormChange} from '../../actions/actions.js'

const onSubmit = async values => {
	console.log(values)
	let reduxState = store.getState()
    store.dispatch(authenticateUser(values.email, values.password))
}

const Home = () => (
	<Link to="/mcm_topics">MCM Topics</Link> // action updates location state + changes address bar
)

export default Home