import React from 'react'
import "./Plan.css";
import { Tabs, Tab } from '@mui/material';
import { Day1HCMHN, Play } from '../../../Models';

const Plan = () => {
    const [value, setValue] = React.useState(0);

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
                                Transportation
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
                                Accommodation
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
                                Attraction
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
                <div className="plan-description">5 Day Trip to Hanoi from Ho Chi Minh City <img src="./assets/pencil.png" alt="" /></div>
                <div className="plan-handle">
                    <button className="button-sub mr-24">BOOK</button>
                    <button className="button-main">EDIT PLAN</button>
                </div>
            </div>
            <Tabs className='tab' value={value} onChange={handleChange}>
                <Tab className='tab-label' label="OVERVIEW" />
                <Tab className='tab-label' label="EDITABLE VIEW" />
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