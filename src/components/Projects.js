import React, {Component} from 'react';
import {Tabs, Tab, Grid, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-showcase">
                    <Card className="project-one-card"
                        shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://cdn-images-1.medium.com/max/2400/1*y7JWssYTe4y6Fgmk6SfoKg.png) center / cover '
                            }}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-two-card"
                        shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://cdn-images-1.medium.com/max/2400/1*y7JWssYTe4y6Fgmk6SfoKg.png) center / cover '
                            }}>
                            React Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-three-card"
                        shadow={5} >
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://cdn-images-1.medium.com/max/2400/1*y7JWssYTe4y6Fgmk6SfoKg.png) center / cover '
                            }}>
                            React Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <style jsx>{`
                        .card-actions{
                            display: flex;
                            justify-content: center;
                        }
                        .project-showcase{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .project-one-card, .project-two-card, .project-three-card {
                            margin-top: 32px;
                            margin-right: 32px;
                            width: 280px;
                        }
                   `}</style>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project-showcase">
                    <Card className="project-one-card"
                          shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://s3.amazonaws.com/www.appcelerator.com.images/blog-572x320-angular-titanium-preview.png) center / cover '
                            }}>
                            Angular Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-two-card"
                          shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://s3.amazonaws.com/www.appcelerator.com.images/blog-572x320-angular-titanium-preview.png) center / cover '
                            }}>
                            Angular Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-three-card"
                          shadow={5} >
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://s3.amazonaws.com/www.appcelerator.com.images/blog-572x320-angular-titanium-preview.png) center / cover '
                            }}>
                            Angular Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <style jsx>{`
                        .card-actions{
                            display: flex;
                            justify-content: center;
                        }
                        .project-showcase{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .project-one-card, .project-two-card, .project-three-card {
                            margin-top: 32px;
                            margin-right: 32px;
                            width: 280px;
                        }
                   `}</style>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="project-showcase">
                    <Card className="project-one-card"
                          shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover '
                            }}>
                            VueJS Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-two-card"
                          shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover '
                            }}>
                            VueJS Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-three-card"
                          shadow={5} >
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover '
                            }}>
                            VueJS Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <style jsx>{`
                        .card-actions{
                            display: flex;
                            justify-content: center;
                        }
                        .project-showcase{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .project-one-card, .project-two-card, .project-three-card {
                            margin-top: 32px;
                            margin-right: 32px;
                            width: 280px;
                        }
                   `}</style>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="project-showcase">
                    <Card className="project-one-card"
                          shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://i.udemycdn.com/course/750x422/1906852_93c6.jpg) center / cover '
                            }}>
                            MongoDB Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-two-card"
                          shadow={5}>
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://i.udemycdn.com/course/750x422/1906852_93c6.jpg) center / cover '
                            }}>
                            React Project #2
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card className="project-three-card"
                          shadow={5} >
                        <CardTitle
                            style={{
                                color: '#fff', height: '200px',
                                background: 'url(https://i.udemycdn.com/course/750x422/1906852_93c6.jpg) center / cover '
                            }}>
                            React Project #3
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.
                        </CardText>
                        <CardActions className="card-actions" border>
                            <Button colored ripple>Live Demo</Button>
                            <Button colored ripple>GitHub</Button>
                            <Button colored ripple>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <style jsx>{`
                        .card-actions{
                            display: flex;
                            justify-content: center;
                        }
                        .project-showcase{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .project-one-card, .project-two-card, .project-three-card {
                            margin-top: 32px;
                            margin-right: 32px;
                            width: 280px;
                        }
                   `}</style>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projects-section">
                    <Grid className="projects-grid">

                    </Grid>
                    {this.toggleCategories()}
                </section>

                <style jsx>{`
                    .category-tabs {
                        font-family: ALISEO;
                        font-size: 66px;
                    }
                    .projects-grid{
                        font-family: ALISEO;
                    }
                `}</style>
            </div>
        )
    }
}

export default Projects;