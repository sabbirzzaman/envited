import React from 'react';
import './Home.css';
import eventImg from '../../images/landing-page-image.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-section">
            <div className="container home-container">
                <div className="home-img">
                    <img src={eventImg} alt="landing page event" />

                    <Link className='hide-desktop' to="/create">
                        <button>🎉 Create my event</button>
                    </Link>
                </div>

                <div className="home-content">
                    <h1>
                        <span>Imagine if</span>
                        <span className="highlight">Snapchat </span>
                        <span>had events.</span>
                    </h1>
                    <p>
                        Easily host and share events with your friends <br />{' '}
                        across any social media.
                    </p>

                    <Link to="/create">
                        <button>🎉 Create my event</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
