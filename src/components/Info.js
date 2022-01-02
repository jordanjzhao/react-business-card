import React from 'react';
import jzpp from '../images/jzpp.png';
import mailIcon from '../images/Mail.png';

export default function Info() {
    return (
        <div className="info--main">
            <img src={jzpp} className="jzpp"/>
            <h1 className="info--name">Jordan Zhao</h1>
            <p className="info--title">CS Student</p>
            <small className="info--website">Website Under Construction</small>
            <button className="email--button">
                <a href="mailto:zhao.jordan@hotmail.com">
                    <i class="fas fa-envelope"></i>Email
                </a>
            </button>
        </div>
    )
}