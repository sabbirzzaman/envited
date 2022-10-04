import React from 'react';
import './Event.css';
import cakeImg from '../../images/birthday-cake.png';
import { VscCalendar } from 'react-icons/vsc';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import arrow from '../../images/arrow.png';

const Event = () => {
    return (
        <div className="event-section">
            <div className="container event-container">
                <div className="event-content">
                    <div className="host-info">
                        <h2>Birthday Bash</h2>
                        <p>
                            Hosted by <span>{'Elysia'}</span>
                        </p>
                    </div>

                    <div className="event-info">
                        <div className="event-time">
                            <div className="icon">
                                <VscCalendar />
                            </div>
                            <div className="date">
                                <p><span>18 August 6:00PM</span></p>
                                <p>to <span>19 August 1:00PM</span> UTC +10</p>
                            </div>
                            <img src={arrow} alt="arrow" />
                        </div>

                        <div className="event-address">
                            <div className="icon">
                                <HiOutlineLocationMarker />
                            </div>
                            <div className="date">
                                <p className='street'>Street name</p>
                                <p>Suburb, State, Postcode</p>
                            </div>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className="event-img">
                    <img src={cakeImg} alt="event" />
                </div>
            </div>
        </div>
    );
};

export default Event;
