import React from 'react'

export default class Login extends React.Component {
    render() {
        return(
            <div>
                Login
                <input ref="emailTxt" type="text" className="user_email" placeholder="email"/>
                <input ref="passwordTxt" type="password" className="user_password" placeholder="password"/>
                <button ref="submitBtn">Login</button>
            </div>
        )
    }
}