import React from 'react';
import mePhoto from '../../assets/me-image/IMG_7691.JPG'

function About() {
    return (
        <section>
            <div className="hero">
                <div className="img-about">
                    <img src={mePhoto} alt="" width={180} height={350} className="me-img" />
                    <div className="about-p">
                    Michael Dreesen started off in being a Quality Assurance analyst for web and backend projects and worked in QA for 4 years.
                    <br></br>
                    <br /> Michael loves learning about technology and drives toward understanding of various technologies both at work and in his personal life. Michael works with various technical stacks including javascript, react, pSQL, Swagger, MAC
                    OSX and Windows OS, as well as AWS products.
                    <br />
                    <br /> Michael is currently enrolled in Berkeley coding bootcamp to get his Full Stack Developer certification but when he’s not bugging the developers, working on breaking things, or coding he enjoys utilizing the latest gaming products
                    or watching his football team win on Sundays (Go Bears!).
                    </div>
                </div>
             </div>

        </section>
    );
}

export default About;