import React, { useContext, useRef } from 'react'
import { Box, AppBar, Toolbar, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './signIn.css'
import { userContext } from '../App'


const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC;

`
const Header = styled(AppBar)`
height:220px;
background-color:#00bfa5;
box-shadow:none;
`
const SignIn = () => {
    const Nvgt = useNavigate()
    const { user, setLogin } = useContext(userContext)
    const reffName = useRef()
    const reffPassword = useRef()

    const hndlClick = (e) => {
        e.preventDefault()
        const newreffName = reffName.current.value
        const newreffPassword = reffPassword.current.value
        const findName = user.find((usr) => usr.name === newreffName)
        const findPass = user.find((usr) => usr.password === newreffPassword)
        if (findName && findPass) {
            setLogin(true)
            Nvgt('/chat')
        }
    }

    return (
        <Component>
            <Header>
                <Toolbar>
                    <div class="container-fluid" style={{ position: 'relative', top: '200px', }}>
                        <form class="mx-auto">
                            <h4 class="text-center" style={{ color: 'black' }}>Login</h4>
                            <div class="mb-3 mt-5">
                                <label for="exampleInputUsername" class="form-label" style={{ color: 'black' }}>User Name</label>
                                <input type="username" class="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder='Enter your username..' ref={reffName} />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label" style={{ color: 'black' }}>Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your password..' ref={reffPassword} />
                            </div>
                            <button type="submit" class="btn btn-primary mt-2" style={{ border: 'none' }} onClick={hndlClick}>Login</button>
                            <button type="submit" class="btn btn-primary mt-2" style={{ border: 'none' }} onClick={() => Nvgt('/signup')}>SignUp</button>
                        </form>
                    </div>
                </Toolbar>
            </Header>
        </Component>
    )
}

export default SignIn