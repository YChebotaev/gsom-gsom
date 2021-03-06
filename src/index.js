import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo-hooks'
import { Switch, Route } from 'react-router'
import { GlagnePage } from './pages/GlagnePage'
import { LoginPage } from './pages/LoginPage'
import { ConfirmPage } from './pages/ConfirmPage'
import { AuthorizationGuard } from './components/AuthorizationGuard'
import * as serviceWorker from './serviceWorker'
import { createApolloClient } from './lib/createApolloClient'

const apolloClient = createApolloClient()
const app = (
  <>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <AuthorizationGuard>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/confirm/:token' component={ConfirmPage} />
            <Route exact path='/invite/:token' component={ConfirmPage} />
            <Route exact path='/' component={GlagnePage} />
            <Route exact path='/:page' component={GlagnePage} />
          </Switch>
        </AuthorizationGuard>
      </BrowserRouter>
    </ApolloProvider>
  </>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
