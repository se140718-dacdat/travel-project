import React, { useEffect, useState, Dispatch, SetStateAction, FC, ChangeEvent } from 'react'
import ListLocation from '../ListLocation';
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';
import { Account, Place } from '../../../Models';
import MessageBox from '../../Popup/MessageBox/MessageBox';
import { differenceInDays, parse } from 'date-fns';


const Dashboard = () => {
    const [showSelectList, setShowSelectList] = useState("0");
    const [place, setPlace] = useState<Place>();
    const [place2, setPlace2] = useState<Place>();
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const [messageStatus, setMessageStatus] = useState('');
    const [account, setAccount] = useState<Account>();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const storedAccount = localStorage.getItem('account');
        if (storedAccount) {
            const parsedAccount = JSON.parse(storedAccount);
            setAccount(parsedAccount);
        }
    }, [])

    const handleChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    }

    const handleChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    }

    const countDates = () => {
        if (startDate && endDate) {
            const parsedStartDate = parse(startDate, 'yyyy-MM-dd', new Date());
            const parsedEndDate = parse(endDate, 'yyyy-MM-dd', new Date());

            const dateCount = differenceInDays(parsedEndDate, parsedStartDate) + 1;
            return dateCount;
        }
        return 0;
    };

    function checkCountDate(countDate: number, premium: boolean): boolean {
        if (premium) {
            return countDate >= 1 && countDate <= 6;
        } else {
            return countDate >= 1 && countDate <= 4;
        }
    }

    const handleStart = () => {
        if (account && place !== undefined && startDate !== "" && endDate !== "") {
            if (checkCountDate(countDates(), account?.premium)) {
                localStorage.setItem('startDate', JSON.stringify(startDate));
                localStorage.setItem('endDate', JSON.stringify(endDate));
                localStorage.setItem('place', JSON.stringify(place));
                if (place2) {
                    localStorage.setItem('place2', JSON.stringify(place2));
                } else {
                    localStorage.setItem('place2', JSON.stringify(""));
                }
                navigate("/select")
            } else {
                setMessage("Check your date or premium account!")
                setMessageStatus("red")
            }
        } else {
            setMessage("Please input field require!")
            setMessageStatus("red")
        }

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
                            (place)
                                ?
                                (<div className="pick-label">{place.name}</div>)
                                :
                                (<div className="pick-label">Bạn muốn đến đâu?</div>)
                        }
                        <div className="location-icon">
                            <img src="./assets/location.png" alt="" />
                        </div>
                        {showSelectList === "1" && <ListLocation place={place} place2={place2} showSelectList={showSelectList} setPlace={setPlace} setPlace2={setPlace} />}
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
                                (place2)
                                    ?
                                    (<div className="pick-label">{place2.name}</div>)
                                    :
                                    (<div className="pick-label">Thêm điểm dừng chân</div>)
                            }
                        </div>
                        <div className="location-icon">
                            <img src="./assets/location.png" alt="" />
                        </div>
                        {showSelectList === "2" && <ListLocation place={place} place2={place2} showSelectList={showSelectList} setPlace={setPlace} setPlace2={setPlace2} />}
                    </div>
                    <div className="setting-date">
                        <input type="date" placeholder="Start Date" className="pick-date" onChange={handleChangeStart} />
                        <input type="date" placeholder="End Date" className="pick-date" onChange={handleChangeEnd} />
                    </div>
                    <div className="submit">
                        <button className='button-main' onClick={handleStart}>Bắt đầu kế hoạch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard