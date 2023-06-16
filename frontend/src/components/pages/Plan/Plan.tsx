import React from 'react'
import "./Plan.css";
import { Tabs, Tab } from '@mui/material';

const Plan = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                            <h3>Day 1 Ho Chi Minh City, Hanoi</h3>
                            <span>23 Feb 2023, Thu</span>
                        </div>
                        <i className='pi pi-file'></i>
                    </div>
                    <div className="timeline-info move">
                        <img src="./assets/move.png" alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='transport-status status'>
                                <i className='pi pi-car'></i>
                                Transportation
                            </span>
                            <h3>Ho Chi Minh City to Hanoi</h3>
                            <span className='time'><i className="pi pi-clock"></i>2 hr 5 min</span>
                        </div>
                    </div>
                    <div className="timeline-info stay">
                        <img src="./assets/stay.png" alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='stay-status status'>
                                <i className='pi pi-car'></i>
                                Accommodation
                            </span>
                            <h3>Stelward Prima Hotel - Former Golden Legend</h3>
                            <span className='time'><i className="pi pi-clock"></i>1 hr</span>
                        </div>
                    </div>
                    <div className="eat-time"><span>Lunch time</span></div>
                    <div className="timeline-info play">
                        <img src="./assets/play-img.jpg" alt="" className="timeline-img" />
                        <div className="timeline-name">
                            <span className='stay-status status'>
                                <i className='pi pi-car'></i>
                                Attraction
                            </span>
                            <h3>Vietnamese Women's Museum</h3>
                            <span className='time'><i className="pi pi-clock"></i>1 hr</span>
                        </div>
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