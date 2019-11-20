import React, { useState } from 'react'
import { render } from 'react-dom'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    return (
        <form action="/">
            <pre>{JSON.stringify({ email, password }, undefined, 4)}</pre>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
        </form>
    )
}

let loginDom = document.getElementById('loginForm')

if (loginDom) {
    render(<Login />, loginDom)
}
