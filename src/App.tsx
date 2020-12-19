// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from 'components/pages/Home'
import Characters from 'components/pages/Characters'
import './App.css'

const App: FC = () => (
  <div className="container">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/characters" component={Characters} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default App
