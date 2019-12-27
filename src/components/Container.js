import React, { Component } from 'react'


class Container extends Component {
    render() {
        return (
            <div>
            <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <h2>Stop waiting.<br />Start building.</h2>
                        <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>

            <section className="contact bg-primary" id="contact">
                <div className="container">
                    <h2>We
        <i className="fas fa-heart"></i>
                        new friends!</h2>
                    <ul className="list-inline list-social">
                        <li className="list-inline-item social-twitter">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item social-facebook">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item social-google-plus">
                            <a href="#">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
        );
    }
}


export default Container;