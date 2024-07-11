import { useEffect, useState } from 'react'
import { WorkCard } from './WorkCard'
import AnimatedLetters from '../AnimatedLetters'
import projects from '../../data/work.json'
import Loader from 'react-loaders'
import styles from './Work.module.css'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
        </div>
      </div>

      <div className="container">
        <section className={styles.container1} id="projects">
          <div className={styles.projects}>
            {projects.map((project, id) => {
              return <WorkCard key={id} project={project} />;
            })}
          </div>
        </section>
      </div>


      <Loader type="pacman" />
    </>
  )
}

export default Work;
