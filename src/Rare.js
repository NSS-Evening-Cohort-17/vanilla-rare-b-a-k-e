import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import Routes from "./Routes"
import { NavBar } from "./components/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  return <>
    {
      token
        ?
        <Route>
          <NavBar token={token} setToken={setToken} />
          <Routes user={token}/>
        </Route>
        :
        <Redirect to="/login" />
    }

    <Route exact path="/login" >
      <NavBar token={token} setToken={setToken} />
      <Login token={token} setToken={setToken} />
    </Route>

    <Route path="/register" exact>
      <NavBar token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </Route>

  </>
}
