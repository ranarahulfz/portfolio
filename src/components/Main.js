import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Resume from './Resume';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/Resume" component={Resume}></Route>
        <Route exact path="/AboutMe" component={AboutMe}></Route>
        <Route exact path="/Projects" component={Projects}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
    </Switch>
)

export default Main