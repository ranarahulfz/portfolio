import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render() {
        return(
            <div className="landing-container"
                 style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            className="avatar-img"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Creative-Tail-People-man-2.svg/1024px-Creative-Tail-People-man-2.svg.png"
                            alt="avatar"
                        />
                        <div className="banner-text">
                           <h1>Software Engineer (Automation)</h1>
                            <hr/>
                            <p>Selenium | Protractor | NightwatchJS | Appium | Java | SQL | API Automation | JMeter </p>
                            <div className="social-links">
                                {/* LinkedIn Icon */}
                                <a href="https://linkedin.com/in/rahulranafz" target="_blank">
                                    <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true" />
                                </a>
                                {/* Github Icon */}
                                <a href="https://github.com/ranarahulfz/" target="_blank">
                                    <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true" />
                                </a>
                                {/* Freecodecamp Icon */}
                                <a href="https://www.freecodecamp.org/ranarahulfz" target="_blank">
                                    <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true" />
                                </a>
                                {/* Youtube Icon */}
                                <a href="http://www.google.com" target="_blank">
                                    <i className="fa fa-youtube-square" rel="noopener noreferrer" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <style jsx>{`
                    .landing-grid {
                        background: #833ab4;  
                        background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);                          
                        background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
                        text-align: center;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 1000%;
                    }
                    .avatar-img {
                        height: 250px;
                        padding-top: 5em;
                    }
                    .banner-text {
                        background-color: black;
                        opacity: .8;
                        width: 75%;
                        margin: auto;
                        border-radius: 10px;
                    }
                    .banner-text h1 {
                        font-family: ALISEO;
                        font-size: 4.6em;
                        font-weight: bold;
                        color: white;
                    }
                    .banner-text hr {
                        border-top: 5px dotted white;
                        width: 50%;
                        margin: auto
                    }
                    .banner-text p {
                        color: white;
                        font-size: 20px;
                        padding: 1em;
                    }
                    .social-links {
                        display: flex;
                        justify-content: space-between;
                        width: 50%;
                        margin: auto;
                    }
                    .social-links i {
                        color: white;
                        font-size: 5em;
                        padding: 8px;
                    }
                `}</style>
            </div>
        )
    }
}

export default LandingPage;