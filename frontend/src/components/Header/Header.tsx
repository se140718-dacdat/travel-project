import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header_container">
            <div className="header_logo" onClick={() => { navigate("/") }}>
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
            <div className="header_avt">
                <div className="favourite-item">
                    <img src="./assets/heart.png" alt="" />
                    <div className="title">Favourites</div>
                </div>
                <div className="avatar-item">
                    <img src="./assets/avatar.png" alt="" />
                    <div className="title">John D. </div>
                </div>
            </div>
        </div>
    )
}

export default Header