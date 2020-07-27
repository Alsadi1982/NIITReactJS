import React from 'react';
import './home.css'
import logo from './me.jpg';

class Home extends React.Component {
    render() {
        return (
                <body>
                <div className="wrapper">
                    <header>
                        <h1>Aleksandr Sadikov</h1>
                        <img className="me" src={logo} alt="my photo"/>
                    </header>
                    <hr/>
                        <main>
                            <section>
                                <h3>Contact Info</h3>
                                <p>e-mail: sav1982@inbox.ru</p>
                                <p>mobile phone: +7(908)729-13-32</p>
                            </section>
                            <section>
                                <h3>Summary</h3>
                                <p>
                                    I want to learn more about how best to use HTML, CSS and JavaScript when developing
                                    Web
                                    applications,
                                    learn new features from professionals and as a result write stable, well-supported
                                    applications.
                                    I hope that this internship will help me better understand the nuances of
                                    JavaScript,
                                    ReactJS and will help me answer many of the questions that arise in my self-learning
                                    activities!
                                </p>
                            </section>
                            <section>
                                <h3>Skills</h3>
                                <ul>
                                    <li>C(entry level)</li>
                                    <li>Java(entry level)</li>
                                    <li>Python(entry level)</li>
                                    <li>JavaScript(entry level)</li>
                                    <li>ReactJS(entry level)</li>
                                    <li>JQuery(entry level)</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </section>
                            <section>
                                <h3>Experience</h3>
                                <p>
                                    Following the results of the javascript course, a fellow student and I made <a
                                    href="https://github.com/Alsadi1982/weather-report">a simple website with current
                                    weather.</a>
                                </p>
                            </section>
                            <section>
                                <h3>Education</h3>
                                <ul>
                                    <li>2004 - 2009 Nizhniy Novgorod Commercial Institute "Faculty of Applied
                                        Informatics in Economics".
                                    </li>
                                    <li>2019 - u.n. Nizhniy Novgorod Institute of Information Technologies "Software
                                        development".
                                    </li>
                                    <li>2019 Codecademy courses: "Introduction to HTML", "Learn CSS".</li>
                                    <li>2019 HTMLacademy course: "HTML basics"</li>
                                </ul>
                            </section>
                            <section>
                                <h3>English</h3>
                                <ul>
                                    <li>december 2018 - april 2019 Nizhniy Novgorod Institute of Information
                                        Technologies course:
                                        "English pre-Intermediate"
                                    </li>
                                </ul>
                            </section>
                        </main>
                </div>
                </body>

        )
    }
}

export default Home;