import React from 'react'
import { Navigate, Route } from 'react-router'

const Privateroute = ({children,...rest}) => {

    const Token = localStorage.getItem("token")
    return <Route {...rest} render = {()=>  Token ? (children): <Navigate to = {"/"}/>}/>
}

export default Privateroute