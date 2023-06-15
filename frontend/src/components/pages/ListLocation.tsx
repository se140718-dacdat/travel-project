import React, { FC, Dispatch, SetStateAction } from 'react'
import "./ListLocation.css";

interface Props {
    showSelectList: string;
    setPlace: Dispatch<SetStateAction<string>>
    setPlace2: Dispatch<SetStateAction<string>>
}

const ListLocation: FC<Props> = (props) => {
    return (
        (props.showSelectList)
            ?
            (<div id='ListLocation'>
                <h2>Popular Cities in Vietnam</h2>
                <div className="city-container">
                    <div className="city" onClick={() => {
                        (props.showSelectList === "1")
                            ? props.setPlace("Nha Trang")
                            :
                            props.setPlace2("Nha Trang")
                    }}>
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                    <div className="city">
                        <img src="./assets/nhatrang.jpg" alt="" className="city-img" />
                        <span className='city-info'>
                            <strong className="city-name">Nha Trang</strong>
                            87+ things to do
                        </span>
                    </div>
                </div>
            </div>)
            : null
    )
}

export default ListLocation