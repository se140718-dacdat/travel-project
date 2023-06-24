import React, { useState, useEffect } from 'react'
import "./SelectPage.css";
import { useNavigate } from 'react-router-dom';
import { Place } from '../../../Models';
import { differenceInDays, parse } from 'date-fns';


const SelectPage = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState<number>(1);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
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

    const handleRenderStep = () => {
        switch (step) {
            case 2:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Tôi Có Thể Giúp Gì Cho Bạn?</h1>
                        <div className='sub-heading-content'>Bắt Đầu: {startDate} - Kết Thúc: {endDate}</div>
                        <div className="main-dashboard">
                            <button className='button-back button-sub' onClick={() => { setStep(1) }}>Trở về</button>
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
                            <button className='button-main button-next' onClick={() => { setStep(3) }}>Tiếp tục</button>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Bạn Đi Du Lịch Cùng Ai?</h1>
                        <div className='sub-heading-content'>Bắt Đầu: {startDate} - Kết Thúc: {endDate}</div>
                        <div className="main-dashboard">
                            <button className='button-back button-sub' onClick={() => { setStep(2) }}>Trở về</button>
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
                            <button className='button-main button-next' onClick={() => { setStep(4) }}>Tiếp tục</button>
                        </div>
                    </div>
                )

            case 4:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Độ Tuổi Của Bạn?</h1>
                        <div className='sub-heading-content'>Bắt Đầu: {startDate} - Kết Thúc: {endDate}</div>
                        <div className="main-dashboard">
                            <button className='button-back button-sub' onClick={() => { setStep(3) }}>Trở về</button>
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
                            <button className='button-main button-next' onClick={() => { navigate("/plan") }}>Tiếp tục</button>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="content-main">
                        <h1 className="heading-content">Xây Dựng Kế Hoạch Cho Chuyến Đi Của Riêng Bạn</h1>
                        <div className='sub-heading-content'>Bắt đầu: {startDate} - Kết thúc: {endDate}</div>
                        <div className="main-dashboard drop-shadow">
                            <button className='button-back button-sub' onClick={() => { navigate("/") }}>Trở về</button>
                            <div className="row-73">
                                <div className="places col-7">
                                    <div className="place">
                                        <div className="place-name">
                                            <div className='city-name'>Thành phố Hồ Chí Minh</div>
                                            <span>bắt đầu: {startDate}</span>
                                        </div>
                                        <a className="place-edit link">(Chỉnh sửa)</a>
                                        <div className="place-icon">
                                            <img src="./assets/location.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="place-middle">
                                        <div className="place-name color-white">
                                            <div className='city-name'>Thành phố {place?.name}</div>
                                            <span>{startDate}</span>
                                        </div>
                                        <div className="dash-left"></div>
                                        <div className="night color-white">
                                            {countDates()} Đêm
                                        </div>
                                    </div>
                                    <div className="place">
                                        <div className="place-name">
                                            <div className='city-name'>Thành phố Hồ Chí Minh</div>
                                            <span>kết thúc: {endDate}</span>
                                        </div>
                                        <a className="place-edit link">(Chỉnh sửa)</a>
                                        <div className="place-icon">
                                            <img src="./assets/location.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="map col-3">
                                    <img src="./assets/view-on-map.png" alt="" />
                                </div>
                            </div>
                            <button className='button-main button-next' onClick={() => { setStep(2) }}>Tiếp tục</button>
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