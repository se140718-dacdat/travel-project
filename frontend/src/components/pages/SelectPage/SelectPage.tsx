import React, { useState } from 'react'
import "./SelectPage.css";
import { useNavigate } from 'react-router-dom';

const SelectPage = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState<number>(1);

    const handleRenderStep = () => {
        switch (step) {
            case 2:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">How can we help you?</h1>
                        <div className='sub-heading-content'>Start Date: 23 Feb 2023 - End Date: 27 Feb 2023</div>
                        <div className="main-dashboard">
                            <button className='button-back button-sub' onClick={() => { setStep(1) }}>Back</button>
                            <div className="row3">
                                <div className="select-help">
                                    <img src="./assets/help1.png" alt="" />
                                </div>
                                <div className="select-help">
                                    <img src="./assets/help2.png" alt="" />
                                </div>
                                <div className="select-help">
                                    <img src="./assets/help3.png" alt="" />
                                </div>
                            </div>
                            <button className='button-main button-next' onClick={() => { setStep(3) }}>Next</button>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Who are you traveling with?</h1>
                        <div className='sub-heading-content'>Start Date: 23 Feb 2023 - End Date: 27 Feb 2023</div>
                        <div className="main-dashboard">
                            <button className='button-back button-sub' onClick={() => { setStep(2) }}>Back</button>
                            <div className="row4">
                                <div className="col4">
                                    <img src="./assets/type1.png" alt="" />
                                </div>
                                <div className="col4">
                                    <img src="./assets/type2.png" alt="" />
                                </div>
                                <div className="col4">
                                    <img src="./assets/type3.png" alt="" />
                                </div>
                                <div className="col4">
                                    <img src="./assets/type4.png" alt="" />
                                </div>
                            </div>
                            <button className='button-main button-next' onClick={() => { setStep(4) }}>Next</button>
                        </div>
                    </div>
                )

            case 4:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Which age group do you fall in?</h1>
                        <div className='sub-heading-content'>Start Date: 23 Feb 2023 - End Date: 27 Feb 2023</div>
                        <div className="main-dashboard">
                            <button className='button-back button-sub' onClick={() => { setStep(3) }}>Back</button>
                            <div className="col2-3">
                                <h2>MALE</h2>
                                <div className="row3-2">
                                    <div className="col3-2">
                                        <img src="./assets/type1.png" alt="" />
                                    </div>
                                    <div className="col3-2">
                                        <img src="./assets/type2.png" alt="" />
                                    </div>
                                    <div className="col3-2">
                                        <img src="./assets/type3.png" alt="" />
                                    </div>
                                </div>
                                <h2>FEMALE</h2>
                                <div className="row3-2">
                                    <div className="col3-2">
                                        <img src="./assets/type1.png" alt="" />
                                    </div>
                                    <div className="col3-2">
                                        <img src="./assets/type2.png" alt="" />
                                    </div>
                                    <div className="col3-2">
                                        <img src="./assets/type3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <button className='button-main button-next' onClick={() => { navigate("/plan") }}>Next</button>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Build Your Own Customized Trip Plan</h1>
                        <div className='sub-heading-content'>Start Date: 23 Feb 2023 - End Date: 27 Feb 2023</div>
                        <div className="main-dashboard drop-shadow">
                            <button className='button-back button-sub' onClick={() => { navigate("/") }}>Back</button>
                            <div className="row-73">
                                <div className="places col-7">
                                    <div className="place">
                                        <div className="place-name">
                                            <div className='city-name'>Ho Chi Minh City, Vietnam</div>
                                            <span>Start Date: 23 Feb 2023</span>
                                        </div>
                                        <a className="place-edit link">(Edit home city)</a>
                                        <div className="place-icon">
                                            <img src="./assets/location.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="place-middle">
                                        <div className="place-name color-white">
                                            <div className='city-name'>Ho Chi Minh City, Vietnam</div>
                                            <span>Start Date: 23 Feb 2023</span>
                                        </div>
                                        <div className="dash-left"></div>
                                        <div className="night color-white">
                                            4 Nights
                                        </div>
                                    </div>
                                    <div className="place">
                                        <div className="place-name">
                                            <div className='city-name'>Ho Chi Minh City, Vietnam</div>
                                            <span>Start Date: 23 Feb 2023</span>
                                        </div>
                                        <a className="place-edit link">(Edit home city)</a>
                                        <div className="place-icon">
                                            <img src="./assets/location.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="map col-3">
                                    <img src="./assets/view-on-map.png" alt="" />
                                </div>
                            </div>
                            <button className='button-main button-next' onClick={() => { setStep(2) }}>Next</button>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div id='SelectPage'>
            {handleRenderStep()}
        </div>
    )
}

export default SelectPage