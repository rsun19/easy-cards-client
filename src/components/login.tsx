import React, { useEffect } from 'react'

const Login = () => {
    useEffect(() => {
        window.open("http://localhost:9000/auth/google", "_self");
    })
    return(
    <>
    </>
    )
}

export default Login;