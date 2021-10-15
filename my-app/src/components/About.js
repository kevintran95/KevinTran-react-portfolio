import React from 'react';
import avatar from '../avatar.jpeg';

const About = () => {
  return (
    <section className="section about-section gray-bg" id="about">
    <div className="container">
        <div className="row align-items-center justify-content-around flex-row-reverse">
            <div className="col-lg-6">
                <div className="about-text">
                    <h3 className="dark-color">My Name is Kevin Tran</h3>
                    <h4 className="theme-color"> Full-Stack Developer</h4>
                    <p> I am currently located in Los Angeles, California. I graduated from California State University, Northridge with a bachelors degree in Psychology (Go Matadors!). Software and coding has always been very interesting to me and working at a big tech company has always been a huge goal of mine.</p>
                    <p>I am currently learning coding @UCLA and proficient in the following languages: JavaScript, Node.Js, Express.Js, and React </p>
                    <div className="btn-bar">
                        <a className="px-btn theme" href="#">View Projects</a>
                        <a className="px-btn theme-t" href="#">Download Resume</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 text-center">
                <div className="about-img">
                    <img className="avatar" src={avatar}/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About
