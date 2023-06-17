import { Tab, Tabs } from '@mui/material';
import { differenceInDays, parse } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Place, Play, Timeline } from '../../../Models';
import "./Plan.css";


const Plan = () => {
    const [value, setValue] = React.useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [place, setPlace] = useState<Place>();
    const [place2, setPlace2] = useState<Place>();
    const [page, setPage] = useState<number>(1);
    const [timelines, setTimelines] = useState<Timeline[]>([]);
    const [timelinesRender, setTimelinesRender] = useState<Timeline[]>([]);


    const handleIncrement = (index: number) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + (page == 1 ? index : index + 4));
        const newDate = currentDate.toISOString().slice(0, 10);
        return newDate
    };

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
        if (timelinesRender.length <= 0) {
            setTimelinesRender(timelines.slice(0, 4));
        }
    }, [timelines])

    useEffect(() => {
        if (page === 1) {
            setTimelinesRender(timelines.slice(0, 4));
        } else {
            setTimelinesRender(timelines.slice(4, 6));
        }
    }, [page])

    useEffect(() => {
        if (timelines.length <= 0) {
            getTimeLine();
        }
    }, [place])

    const getTimeLine = () => {
        if (!place2 && place) {
            const move: Play = {
                id: 0,
                image: "./assets/move.png",
                name: `Di chuyển từ HCM đến ${place?.name}`,
                time: "2h5p",
                type: "move"
            }

            const back: Play = {
                id: -1,
                image: "./assets/move.png",
                name: `Trở về HCM`,
                time: "2h5p",
                type: "move"
            }

            let array: Timeline[] = place?.timelines.slice(0, countDates());
            if (array.length > 0) {
                array[0].plays.unshift(move);
                array[array.length - 1].plays.push(back);
                setTimelines(array);

            }
        } else if (place2 && place) {
            const move: Play = {
                id: 0,
                image: "./assets/move.png",
                name: `Di chuyển từ HCM đến ${place2?.name}`,
                time: "2h5p",
                type: "move"
            }

            const move2: Play = {
                id: 0,
                image: "./assets/move.png",
                name: `Di chuyển từ ${place2?.name} đến ${place?.name}`,
                time: "2h5p",
                type: "move"
            }

            const back: Play = {
                id: -1,
                image: "./assets/move.png",
                name: `Trở về HCM`,
                time: "2h5p",
                type: "move"
            }

            let timelines1: Timeline[];
            let timelines2: Timeline[]
            if (countDates() <= 2) {
                timelines1 = place2.timelines.slice(0, 1);
                timelines2 = place.timelines.slice(0, 1);
            } else {
                timelines1 = place2.timelines.slice(0, 2);
                timelines2 = place.timelines.slice(0, countDates() - 2);
            }
            if (timelines1.length > 0) {
                timelines1[0].plays.unshift(move);
            }
            if (timelines2.length > 0) {
                timelines2[0].plays.unshift(move2);
                timelines2[timelines2.length - 1].plays.push(back);
            }
            setTimelines([...timelines1, ...timelines2]);
        }
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
                            <span className='play-status status'>
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
                    <div className="timeline-info eat" key={play.id}>
                        <img src={play.image} alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='eat-status status'>
                                <i className='pi pi-car'></i>
                                Ăn uống
                            </span>
                            <h3>{play.name}</h3>
                            <span className='time'><i className="pi pi-clock"></i>{play.time}</span>
                        </div>
                    </div>
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
                <div className="icon-back" onClick={() => { setPage(1) }}>
                    <i className="pi pi-chevron-circle-left"></i>
                </div>
                {
                    timelinesRender.length > 0 && timelinesRender.map((timeline, index) => {
                        return (
                            <div className="timeline-container" key={index}>
                                <div className="timeline-day">
                                    <div className="place-name">
                                        <h3>Day {page === 1 ? index + 1 : index + 5} {timeline?.place}</h3>
                                        <span>{handleIncrement(index)}</span>
                                    </div>
                                    <i className='pi pi-file'></i>
                                </div>
                                {
                                    timeline.plays.map((play: Play) => handleRenderPlay(play))
                                }
                            </div>
                        )
                    })
                }
                <div className="icon-next" onClick={() => { setPage(2) }}>
                    <i className="pi pi-chevron-circle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Plan