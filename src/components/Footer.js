import React from 'react';
import TwitterIcon from '../images/Twitter Icon.png';
import FacebookIcon from '../images/Facebook Icon.png';
import InstagramIcon from '../images/Instagram Icon.png';
import LinkedinIcon from '../images/Linkedin Icon.png';
import GitHubIcon from '../images/GitHub Icon.png';

export default function Footer() {
    return (
        <div className="footer--main">
            <ul className="footer--icons">
                <li>
                    <button className="twitter--button">
                    <a href="https://twitter.com/zhaojordan" target="_blank">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                    </button>
                </li>
                <li>
                    <button className="facebook--button">
                    <a href="https://facebook.com/zhaojordan" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    </button>
                </li>
                <li>
                    <button className="instagram--button">
                    <a href="https://instagram.com/zhaojordan" target="_blank">
                        <i class="fab fa-instagram-square"></i>
                    </a>
                    </button>
                </li>
                <li>
                    <button className="linkedin--button">
                    <a href="https://linkedin.com/zhaojordan" target="_blank">
                        <i class="fab fa-linkedin-square"></i>
                    </a>
                    </button>
                </li>
                <li>
                    <button className="github--button">
                    <a href="https://github.com/jordanjzhao" target="_blank">
                        <i class="fab fa-github-square"></i>
                    </a>
                    </button>
                </li>
            </ul>
        </div>
    )
}