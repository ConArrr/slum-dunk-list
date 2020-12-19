// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router'

import AllCharacters from 'containers/templates/AllCharacters'

const Characters: FC<RouteComponentProps> = ({ match }) => (
  <>
    <header>
      <h1>『SLAM DUNK』登場人物</h1>
    </header>
    <Switch>
      <Route exact path={`${match.path}`}>
        <AllCharacters />
      </Route>
      <Redirect to="/" />
    </Switch>
  </>
)

export default Characters
