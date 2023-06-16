import React, { useEffect, useState } from 'react'
import "./Plan.css";
import { Tabs, Tab } from '@mui/material';
import { Day1HCMHN, Place, Play } from '../../../Models';
import { differenceInDays, parse } from 'date-fns';


const Plan = () => {
    const [value, setValue] = React.useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [place, setPlace] = useState<Place>();
    const [place2, setPlace2] = useState<Place>();

    useEffect(() => {
        const storedPlace = localStorage.getItem('place');
        const storedPlace2 = localStorage.getItem('place2');
        const storedStartDate = localStorage.getItem('startDate');
        const storedEndDate = localStorage.getItem('endDate');

        if (storedPlace) {
            const parsedAccount = JSON.parse(storedPlace);
            setPlace(parsedAccount);
        }

        if (storedPlace2 !== undefined && storedPlace2) {
            const parsedAccount = JSON.parse(storedPlace2);
            setPlace2(parsedAccount);
        }

        if (storedStartDate) {
            const parsedAccount = JSON.parse(storedStartDate);
            setStartDate(parsedAccount);
        }

        if (storedEndDate) {
            const parsedAccount = JSON.parse(storedEndDate);
            setEndDate(parsedAccount);
        }
    }, [])


    const countDates = () => {
        if (startDate && endDate) {
            const parsedStartDate = parse(startDate, 'yyyy-MM-dd', new Date());
            const parsedEndDate = parse(endDate, 'yyyy-MM-dd', new Date());

            const dateCount = differenceInDays(parsedEndDate, parsedStartDate) + 1;
            return dateCount;
        }
        return 0;
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleRenderPlay = (play: Play) => {
        switch (play.type) {
            case "move":
                return (
                    <div className="timeline-info move" key={play.id}>
                        <img src={play.image} alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='transport-status status'>
                                <i className='pi pi-car'></i>
                                Di chuyển
                            </span>
                            <h3>{play.name}</h3>
                            <span className='time'><i className="pi pi-clock"></i>{play.time}</span>
                        </div>
                    </div>
                )
            case "stay":
                return (
                    <div className="timeline-info stay" key={play.id}>
                        <img src={play.image} alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='stay-status status'>
                                <i className='pi pi-car'></i>
                                Chỗ ở
                            </span>
                            <h3>{play.name}</h3>
                            <span className='time'><i className="pi pi-clock"></i>{play.time}</span>
                        </div>
                    </div>
                )
            case "play":
                return (
                    <div className="timeline-info play" key={play.id}>
                        <img src={play.image} alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='stay-status status'>
                                <i className='pi pi-car'></i>
                                Hoạt động
                            </span>
                            <h3>{play.name}</h3>
                            <span className='time'><i className="pi pi-clock"></i>{play.time}</span>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="eat-time"><span>{play.name}</span></div>
                )
        }
    }

    return (
        <div id='Plan'>
            <div className="edit-plan">
                <div className="plan-description">{countDates()} ngày du lịch từ Hồ Chí Minh đến {place?.name}<img src="./assets/pencil.png" alt="" /></div>
                <div className="plan-handle">
                    <button className="button-sub mr-24">Chỉnh sửa</button>
                    <button className="button-main">Xác nhận</button>
                </div>
            </div>
            <Tabs className='tab' value={value} onChange={handleChange}>
                <Tab className='tab-label' label="TỔNG QUAN" />
                <Tab className='tab-label' label="CHỈNH SỬA" />
            </Tabs>
            <div className="plan-container">
                <div className="icon-back">
                    <i className="pi pi-chevron-circle-left"></i>
                </div>
                <div className="timeline-container">
                    <div className="timeline-day">
                        <div className="place-name">
                            <h3>Day {Day1HCMHN.dateNumber} Ho Chi Minh City, Hanoi</h3>
                            <span>23 Feb 2023, Thu</span>
                        </div>
                        <i className='pi pi-file'></i>
                    </div>
                    {
                        Day1HCMHN.plays.map((play: Play) => handleRenderPlay(play))
                    }
                </div>
                <div className="timeline-container">
                    <div className="timeline-day">
                        <div className="place-name">
                            <h3>Day {Day1HCMHN.dateNumber} Ho Chi Minh City, Hanoi</h3>
                            <span>23 Feb 2023, Thu</span>
                        </div>
                        <i className='pi pi-file'></i>
                    </div>
                    {
                        Day1HCMHN.plays.map((play: Play) => handleRenderPlay(play))
                    }
                </div>
                <div className="timeline-container">
                    <div className="timeline-day">
                        <div className="place-name">
                            <h3>Day 1 Ho Chi Minh City, Hanoi</h3>
                            <span>23 Feb 2023, Thu</span>
                        </div>
                        <i className='pi pi-file'></i>
                    </div>
                </div>
                <div className="timeline-container">
                    <div className="timeline-day">
                        <div className="place-name">
                            <h3>Day 1 Ho Chi Minh City, Hanoi</h3>
                            <span>23 Feb 2023, Thu</span>
                        </div>
                        <i className='pi pi-file'></i>
                    </div>
                </div>
                <div className="icon-next">
                    <i className="pi pi-chevron-circle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Plan