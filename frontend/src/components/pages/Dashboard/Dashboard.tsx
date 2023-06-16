import React, { useEffect, useState, Dispatch, SetStateAction, FC, ChangeEvent } from 'react'
import ListLocation from '../ListLocation';
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';
import { Place } from '../../../Models';
import MessageBox from '../../Popup/MessageBox/MessageBox';

interface Props {
    place: Place | undefined;
    place2: Place | undefined;
    setPlace: Dispatch<SetStateAction<Place | undefined>>;
    setPlace2: Dispatch<SetStateAction<Place | undefined>>;
    start: string | "";
    end: string | "";
    setStart: Dispatch<SetStateAction<string | "">>;
    setEnd: Dispatch<SetStateAction<string | "">>;
}

const Dashboard: FC<Props> = (props) => {
    const [showSelectList, setShowSelectList] = useState("0");
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const [messageStatus, setMessageStatus] = useState('');

    const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
        props.setStart(event.target.value)
    }

    const handleChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
        props.setEnd(event.target.value)
    }

    return (
        <div id='Dashboard'>
            {
                message != '' ?
                    <MessageBox status={messageStatus} message={message} setMessage={setMessage} title='inasd'></MessageBox>
                    :
                    null
            }
            <div className="content-main">
                <h1 className="heading-content">Xây Dựng Kế Hoạch Cho Chuyến Đi Của Riêng Bạn</h1>
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
                            (props.place)
                                ?
                                (<div className="pick-label">{props.place.name}</div>)
                                :
                                (<div className="pick-label">Bạn muốn đến đâu?</div>)
                        }
                        <div className="location-icon">
                            <img src="./assets/location.png" alt="" />
                        </div>
                        {showSelectList === "1" && <ListLocation place={props.place} place2={props.place2} showSelectList={showSelectList} setPlace={props.setPlace} setPlace2={props.setPlace} />}
                    </div>
                    <div className="pick-location" onClick={(e) => {
                        e.stopPropagation();
                        (showSelectList === "2")
                            ?
                            setShowSelectList("0")
                            :
                            setShowSelectList("2")
                    }}>
                        <div className="pick-label">
                            {
                                (props.place2)
                                    ?
                                    (<div className="pick-label">{props.place2.name}</div>)
                                    :
                                    (<div className="pick-label">Thêm điểm dừng chân</div>)
                            }
                        </div>
                        <div className="location-icon">
                            <img src="./assets/location.png" alt="" />
                        </div>
                        {showSelectList === "2" && <ListLocation place={props.place} place2={props.place2} showSelectList={showSelectList} setPlace={props.setPlace} setPlace2={props.setPlace2} />}
                    </div>
                    <div className="setting-date">
                        <input type="date" placeholder="Start Date" className="pick-date" onChange={handleChangeStart} />
                        <input type="date" placeholder="End Date" className="pick-date" onChange={handleChangeEnd} />
                    </div>
                    <div className="submit">
                        <button className='button-main' onClick={() => {
                            if (props.place !== undefined && props.start !== "" && props.end !== "") {
                                navigate("/select")
                            } else {
                                setMessage("Please input field require!")
                                setMessageStatus("red")
                            }
                        }}>Bắt đầu kế hoạch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard