import React, { useEffect, useState, Dispatch, SetStateAction, FC } from 'react'
import ListLocation from '../ListLocation';
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [showSelectList, setShowSelectList] = useState("0");
    const [place, setPlace] = useState<string>("");
    const [place2, setPlace2] = useState<string>("");

    const navigate = useNavigate();

    return (
        <div id='Dashboard'>
            <div className="content-main">
                <h1 className="heading-content">Build Your Own Customized Trip Plan</h1>
                <div className="main-dashboard">
                    <div className="pick-location" onClick={(e) => {
                        e.stopPropagation();
                        (showSelectList === "1")
                            ?
                            setShowSelectList("0")
                            :
                            setShowSelectList("1")
                    }}>
                        {
                            (place !== "")
                                ?
                                (<div className="pick-label">{place}, Vietnam</div>)
                                :
                                (<div className="pick-label">Where do you want to go ?</div>)
                        }
                        <div className="location-icon">
                            <img src="./assets/location.png" alt="" />
                        </div>
                        {showSelectList === "1" && <ListLocation showSelectList={showSelectList} setPlace={setPlace} setPlace2={setPlace} />}
                    </div>
                    <div className="pick-location">
                        <div className="pick-label" onClick={(e) => {
                            e.stopPropagation();
                            (showSelectList === "2")
                                ?
                                setShowSelectList("0")
                                :
                                setShowSelectList("2")
                        }}>
                            {
                                (place2 !== "")
                                    ?
                                    (<div className="pick-label">{place2}, Vietnam</div>)
                                    :
                                    (<div className="pick-label">+ Add another destination</div>)
                            }
                        </div>
                        {showSelectList === "2" && <ListLocation showSelectList={showSelectList} setPlace={setPlace} setPlace2={setPlace2} />}
                    </div>
                    <div className="setting-date">
                        <input type="date" placeholder="Start Date" className="pick-date" />
                        <input type="date" placeholder="End Date" className="pick-date" />
                    </div>
                    <div className="submit">
                        <button className='button-main' onClick={() => { navigate("/plan") }}>Start planning</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard