import React from 'react'
import { render } from 'react-dom'
//import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import store from '../../store/configureStore.js'
import {authenticateUser, emailFormChange, passwordFormChange} from '../../actions/actions.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
	console.log(values)
	let reduxState = store.getState()
    store.dispatch(authenticateUser(values.email, values.password))
}

const UserLogIn = () => (
	<div>
    <h1>🏁 React Final Form - Simple Example</h1>
    <a href="https://github.com/erikras/react-final-form#-react-final-form">
      Read Docs
    </a>
    <Form
      onSubmit={onSubmit}
      initialValues={{email: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
          
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}>
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
    </div>
)

export default UserLogIn