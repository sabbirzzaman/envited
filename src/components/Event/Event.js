import React from 'react';
import './Event.css';
import cakeImg from '../../images/birthday-cake.png';
import { VscCalendar } from 'react-icons/vsc';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import arrow from '../../images/arrow.png';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Event = () => {
    const { eventName, hostName, startTime, endTime } = useSelector(
        (state) => state.event
    );

    return eventName ? (
        <div className="event-section">
            <div className="container event-container">
                <div className="event-content">
                    <div className="host-info">
                        <h2>{eventName || 'Event Name'}</h2>
                        <p>
                            Hosted by <span>{hostName || 'Host Name'}</span>
                        </p>
                    </div>

                    <div className="event-info">
                        <div className="event-time">
                            <div className="event-time-content">
                                <div className="icon">
                                    <VscCalendar />
                                </div>
                                <div className="date">
                                    <p>
                                        <span>
                                            {startTime &&
                                                moment(startTime)
                                                    .utc()
                                                    .format('DD MMMM')}{' '}
                                            {startTime &&
                                                moment(startTime)
                                                    .utc()
                                                    .format('h:mm A')}
                                        </span>
                                    </p>
                                    <p>
                                        to{' '}
                                        <span>
                                            {endTime &&
                                                moment(endTime)
                                                    .utc()
                                                    .format('DD MMMM')}{' '}
                                            {endTime &&
                                                moment(endTime)
                                                    .utc()
                                                    .format('h:mm A')}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <img src={arrow} alt="arrow" />
                        </div>

                        <div className="event-address">
                            <div className="event-address-content">
                                <div className="icon">
                                    <HiOutlineLocationMarker />
                                </div>
                                <div className="date">
                                    <p className="street">Street name</p>
                                    <p>Suburb, State, Postcode</p>
                                </div>
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
    ) : (
        <div className="go-home">
            <Link to={'/'}>
                <button>Go Home</button>
            </Link>
        </div>
    );
};

export default Event;
