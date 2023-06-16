import React, { useState, Dispatch, SetStateAction, FC } from 'react'
import "./Login.css";
import MessageBox from '../../Popup/MessageBox/MessageBox';
import { accounts } from '../../../Models';

interface Props {
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login:FC<Props> = (props) => {
    const [message, setMessage] = useState<string>('');
    const [messageStatus, setMessageStatus] = useState('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        if (username === '' || password === '') {
            setMessage("Please input username and password!")
            setMessageStatus("red")
        } else {
            const account = accounts.find((e) => username === e.username);
            if (!account) {
                setMessage("Account not found!")
                setMessageStatus("red")
            } else {
                if (account.password !== password) {
                    setMessage("Wrong password!")
                    setMessageStatus("red")
                } else {
                    localStorage.setItem('account', JSON.stringify(account));
                    props.setIsLogin(false);
                }
            }
        }
    }

    return (
        <div id='Login'>
            {
                message != '' ?
                    <MessageBox status={messageStatus} message={message} setMessage={setMessage} title='inasd'></MessageBox>
                    :
                    null
            }
            <div className="col1">
                <div className="logo">
                    <img src="./assets/logo.png" alt="#" />
                </div>
                <div className="title">
                    <h1>Login</h1>
                    <span>Login to access your Golobe account</span>
                </div>
                <div className="form-input">
                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="button-login hover" onClick={handleLogin}>Login</button>
            </div>
            <div className="col2">
                <img src="./assets/login-img.png" alt="" />
            </div>
        </div>
    )
}

export default Login