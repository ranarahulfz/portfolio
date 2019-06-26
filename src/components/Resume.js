import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from '../components/education';
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component{
    render() {
        return(
            <div className="resume-container">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px', paddingTop: '2em'}}
                            />
                            <h2 style={{paddingTop: '2em', fontFamily: 'ALISEO'}}>Rahul Rana</h2>
                            <h4 style={{color: 'grey', fontFamily: 'ALISEO'}}>QA Automation</h4>
                            <hr style={{borderTop: '3px solid #833fb2'}} />
                            <p>Experienced Software Engineer with a demonstrated history of working in the computer
                                software industry. Skilled in Selenium WebDriver, Protractor, Nightwatch JS, Maven,
                                Agile Methodologies, Test Automation. Strong engineering professional with MCA focused
                                in Computers from JSS Academy of Technical Education Noida.
                            </p>
                            <hr style={{borderTop: '3px solid #833fb2'}} />
                            <h5 style={{fontFamily: 'ALISEO'}}>Address</h5>
                            <p>Flat No: G-848, 12 Avenue, Gaur City 2, Noida</p>
                            <h5 style={{fontFamily: 'ALISEO'}}>Phone</h5>
                            <p>(941)2894373</p>
                            <h5 style={{fontFamily: 'ALISEO'}}>Email</h5>
                            <p>rahul.ranafz@gmail.com</p>
                            <h5 style={{fontFamily: 'ALISEO'}}>My Website</h5>
                            <p>www.fastor.com</p>
                            <hr style={{borderTop: '3px solid #833fb2'}} />
                        </div>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2010}
                            endYear={2013}
                            schoolName={'CCS University'}
                            schoolDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}
                        />
                        <Education
                            startYear={2013}
                            endYear={2016}
                            schoolName={'AKTU University'}
                            schoolDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2016}
                            endYear={2017}
                            companyName={'360 Logica Software Testing Services'}
                            companyDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}
                        />
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            companyName={'Devstringx Technologies Private Limited'}
                            companyDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}
                        />
                        <Experience
                            startYear={2019}
                            endYear={'Present'}
                            companyName={'Smart Energy Water'}
                            companyDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill={'Selenium'}
                            progress={80}
                        />
                        <Skills
                            skill={'Protractor'}
                            progress={30}
                        />
                        <Skills
                            skill={'Nightwatch'}
                            progress={30}
                        />
                        <Skills
                            skill={'Appium'}
                            progress={20}
                        />
                        <Skills
                            skill={'Java'}
                            progress={70}
                        />
                    </Cell>
                </Grid>
                <style jsx>{`
                    .resume-container h2{
                        font-family: ALISEO;
                        font-size: 30px;
                        font-weight: bold;
                    }
                    .resume-right-col{
                        background: #27221F;
                        color: white;
                        padding: 2em;
                    }
                `}</style>
            </div>
        )
    }
}

export default Resume;