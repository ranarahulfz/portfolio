import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rahul Rana</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '200px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Experienced Software Engineer with a demonstrated history of working in the computer
                            software industry. Skilled in Selenium WebDriver, Protractor, Nightwatch JS, Maven,
                            Agile Methodologies, Test Automation. Strong engineering professional with MCA focused
                            in Computers from JSS Academy of Technical Education Noida.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: '25px', fontFamily: 'ALISEO'}}>
                                        <i className="fa fa-phone-square" aria-hidden/>
                                        (941)2894373
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: '25px', fontFamily: 'ALISEO'}}>
                                        <i className="fa fa-linkedin" aria-hidden/>
                                        linkedin.com/in/rahulranafz
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: '25px', fontFamily: 'ALISEO'}}>
                                        <i className="fa fa-envelope" aria-hidden/>
                                        rahul.ranafz@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: '25px', fontFamily: 'ALISEO'}}>
                                        <i className="fa fa-skype" aria-hidden/>
                                        ranarahulfz@outlook.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
                <style jsx>{`
                    .contact-body {
                        margin: auto;
                        background: rgb(211,211,211);
                        position: fixed;
                        width: 100%;
                        height: 100%;  
                        justify-content: center;
                        padding-top: 2em; 
                    }
                    .contact-grid {
                        text-align: center;
                        justify-content: center;
                        width: 80%;
                        height: 550px;
                        background: white;
                        color: black;
                        margin-bottom: 20px;
                        box-shadow: 0px 6px 10px 2px rgba(0, 0, 0, .24);
                        transition: 0.3;
                    }
                    .contact-grid: hover {
                        box-shadow: 0px 8px 12px 4px rgba(0, 0, 0, .24);
                    }
                    .contact-grid h2 {
                        font-family: 'ALISEO', sans-serif;
                        font-weight: bold;
                    }
                    .contact-grid hr{
                        border-top: 5px dotted black;
                        width: 50%;
                        margin: auto;
                    }
                    .contact-list {
                        font-family: ALISEO;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .contact-list i {
                        padding-right: 5rem;
                        font-size: 30px;
                    }
                `}</style>
            </div>
        )
    }
}

export default Contact;