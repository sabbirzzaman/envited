import React, { useState } from 'react';
import './CreateEvent.css';
import eventImg from '../../images/event.jpg';

const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [hostName, setHostName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const event = {
        eventName,
        hostName,
        startTime,
        endTime,
    };

    return (
        <div className="create-event-section">
            <div className="container create-event-container">
                <div className="create-event-form">
                    <h2>Create Your Event</h2>
                    <form>
                        <div className="field">
                            <label htmlFor="name">Event Name</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Enter event name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="host">Host Name</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Enter host name"
                                value={hostName}
                                onChange={(e) => setHostName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="start-time">Event start time</label>
                            <input
                                className="input-field"
                                type="datetime-local"
                                placeholder="Start date and time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="end-time">Event end time</label>
                            <input
                                className="input-field"
                                type="datetime-local"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>

                        <input
                            className="submit-btn"
                            type="submit"
                            value="Next"
                        />
                    </form>
                </div>

                <div className="create-event-img">
                    <img src={eventImg} alt="create event" />
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
