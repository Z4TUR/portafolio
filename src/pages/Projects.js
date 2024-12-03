import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const proyectos = [
        {
            nombre: 'pokeapp',
            descripcion:  'Aplicación que lista los pokemon',
            link: 'https://z4tur.github.io/pokeapp/',
        },
        {
            nombre: 'Portafolio',
            descripcion: 'El presente portafolio', 
            link: 'https://github.com/Z4TUR/portafolio',
        },
        {
            nombre: 'Otros proyectos', 
            descripcion: 'Puedes encontrar más en mi Github', 
            link: 'https://github.com/Z4TUR/',
        },
    ];

    return (
        <section className="projects">
            <h2>Mis Proyectos</h2>
            <div className='projects-grid'>
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="project-card">
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                        <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
