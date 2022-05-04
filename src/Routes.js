import React from "react"
import { Route, Switch } from "react-router-dom"
import CreatePostView from "./views/CreatePostView"
import HomeView from "./views/HomeView"

export default function Routes() {
  return(
    <Switch>
      <Route exact path={['/home', '/']} component={HomeView} />
      <Route exact path='/createpost' component={CreatePostView} />
    </Switch>
  )
}
