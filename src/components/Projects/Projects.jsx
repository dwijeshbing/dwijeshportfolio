import { useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import AnimatedLetters from '../AnimatedLetters'
import projects from '../../data/projects.json'
import Loader from 'react-loaders'
import styles from './Projects.module.css'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
      </div>

      <div className="container">
        <section className={styles.container1} id="projects">
          <div className={styles.projects}>
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
        </section>
      </div>
     

      <Loader type="pacman" />
    </>
  )
}

export default Projects;
