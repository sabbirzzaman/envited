import React from 'react';
import { Link } from 'react-router-dom';
import './NotFounded.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const NotFounded = () => {
    return (
        <div className="not-founded">
            <p>Page not founded!</p>
            <Link className="back-btn" to="/">
                <AiOutlineArrowLeft />
            </Link>
        </div>
    );
};

export default NotFounded;
