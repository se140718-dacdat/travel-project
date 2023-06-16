import React, { useState, FC, Dispatch, SetStateAction } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { Account } from '../../Models';

interface Props {
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
    account: Account | undefined;
    setAccount: Dispatch<SetStateAction<Account | undefined>>;
}

const Header: FC<Props> = (props) => {
    const [isLogout, setIsLogout] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('account');
        props.setAccount(undefined)
    }

    return (
        <div className="header_container">
            <div className="header_logo hover" onClick={() => { navigate("/") }}>
                <img src="./assets/logo.png" alt="#" />
            </div>
            <div className="header_menu">
                <div className="menu-item">
                    <img src="./assets/trip.png" alt="" />
                    <div className="title">Trip Planer</div>
                </div>
                <div className="menu-item">
                    <img src="./assets/location.png" alt="" />
                    <div className="title">Itineraries</div>
                </div>
                <div className="menu-item" onClick={() => { navigate("/tour") }}>
                    <img src="./assets/tour.png" alt="" />
                    <div className="title">Tours</div>
                </div>
                <div className="menu-item">
                    <img src="./assets/camera.png" alt="" />
                    <div className="title">Blog</div>
                </div>
            </div>
            {
                (props.account)
                    ?
                    (
                        <div className="header_avt" onClick={() => { (!isLogout) ? setIsLogout(true) : setIsLogout(false) }}>
                            <div className="favourite-item">
                                <img src="./assets/heart.png" alt="" />
                                <div className="title">Favourites</div>
                            </div>
                            <div className="avatar-item">
                                <img src="./assets/avatar.png" alt="" />
                                <div className="title">{props.account.name}</div>
                                {
                                    (isLogout)
                                        ? (
                                            <div className="logout">
                                                <button className="button-logout" onClick={handleLogout}>Logout</button>
                                            </div>
                                        )
                                        : null
                                }
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="header_avt">
                            <div className="avatar-item">
                                <div className="title" onClick={() => { props.setIsLogin(true) }}>Login</div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Header