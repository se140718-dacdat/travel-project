import React, { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'
import "./ListLocation.css";
import { Place, places } from '../../Models';

interface Props {
    showSelectList: string;
    place: Place | undefined;
    place2: Place | undefined;
    setPlace: Dispatch<SetStateAction<Place | undefined>>;
    setPlace2: Dispatch<SetStateAction<Place | undefined>>;
}

const ListLocation: FC<Props> = (props) => {
    const [placesSelect, setPlacesSelect] = useState<Place[]>(places);
    const [placesSelect2, setPlacesSelect2] = useState<Place[]>(places.filter((e) => (props.place?.id !== undefined) ? e.id < props.place?.id : e.id <= 3));

    return (
        (props.showSelectList)
            ?
            (<div id='ListLocation'>
                <h2>Popular Cities in Vietnam</h2>
                <div className="city-container">
                    {
                        (props.showSelectList === "1" ? placesSelect : placesSelect2).map((place: Place) => {
                            return (
                                <div className={`city${(props.place?.id === place.id || props.place2?.id === place.id) ? " active" : ""}`} key={place.id} onClick={() => {
                                    (props.showSelectList === "1")
                                        ? props.setPlace(place)
                                        :
                                        props.setPlace2(place)
                                }}>
                                    <img src={place.image} alt="" className="city-img" />
                                    <span className='city-info'>
                                        <strong className="city-name">{place.name}</strong>
                                        {place.things}+ things to do
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>)
            : null
    )
}

export default ListLocation