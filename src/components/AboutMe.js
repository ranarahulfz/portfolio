import React, {Component} from 'react';

class AboutMe extends Component{
    render() {
        return(
            <div className="aboutme-container">
                <h2>About Me Page</h2>
                <style jsx>{`
                    .aboutme-container h2{
                        font-family: ALISEO;
                        font-size: 30px;
                        font-weight: bold;
                    }
                `}</style>
            </div>
        )
    }
}

export default AboutMe;