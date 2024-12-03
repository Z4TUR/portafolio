import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className='home'>
            <div>
                <h1>Soy Israel Portillo.</h1>
                <p>Soy un <strong>Estudiante de Desarrollo de Software</strong> en la <strong><i>Escuela Superior de Innovación y Tecnológia</i></strong></p>
                <p><i>Estudiante con una relación seria con Python, amante del café <br />y explorador de mundos fnatásticos en anime y ciencia ficción. </i></p>
                <div className='social-links'>
                    <a href="https://x.com" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faXTwitter} size='2x'/></a>
                    <a href="https://linkedin.com/in/israel-portillo-sc" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                    <a href="https://github.com/Z4TUR" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                </div>
            </div>
        </section>
    );
}

export default Home;