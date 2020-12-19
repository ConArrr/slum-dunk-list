// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Switch, Route } from 'react-router'

import Home from 'components/pages/Home'

const App: FC = () => (
  <div className="container">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
)

export default App
