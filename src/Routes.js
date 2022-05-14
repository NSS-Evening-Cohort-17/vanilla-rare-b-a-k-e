import React from "react"
import { Route, Switch } from "react-router-dom"
import CreatePostView from "./views/CreatePostView"
import PostDetailsView from "./views/PostDetailsView"
import { HomeView } from "./views/HomeView"
import EditPostView from "./views/EditPostView"

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
        component={() => <CreatePostView/>}
      />
      <Route
        exact
        path='/editpost/:postId'
        component={() => <EditPostView />}
      />
      <Route
        path={['/home/:postId', ':postId']}
        component={() => <PostDetailsView user={user} />}
      />
    </Switch>
  )
}
