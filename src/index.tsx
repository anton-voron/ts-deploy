import React from 'react'
import ReactDOM from 'react-dom';

import App from './components/App/App'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import RegistrationAPI, { IRegistrationAPI } from './service/RegistrationAPI'

const service = new RegistrationAPI()



ReactDOM.render(
    <ErrorBoundry>
        <App />
    </ErrorBoundry>,
    document.getElementById('root'));