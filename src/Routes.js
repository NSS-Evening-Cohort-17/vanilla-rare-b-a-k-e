import React from "react"
import { Route, Switch } from "react-router-dom"
import CreatePostView from "./views/CreatePostView"
import MyPostsView from "./views/MyPostsView"
import { HomeView } from "./views/HomeView"

export default function Routes({user}) {
  return(
    <Switch>
      <Route 
        exact
        path={['/home', '/']}
        component={() => <HomeView  user={user} />} 
      />
      <Route
        exact
        path='/createpost'
        component={() => <CreatePostView user={user} />}
      />
      <Route
        exact
        path='/my-posts'
        component={() => <MyPostsView user={user} />}
      />

    </Switch>
  )
}
