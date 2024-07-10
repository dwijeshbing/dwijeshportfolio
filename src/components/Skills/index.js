import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Sphere from '../Sphere/index'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <div>
            <p>
              As a developer, I have expertise in a wide range of programming languages, including
              <span class="tech-tag"> Python</span>,
              <span class="tech-tag"> Java</span>, and
              <span class="tech-tag"> C</span>. I have experience with database management systems like
              <span class="tech-tag"> MySQL</span> and
              <span class="tech-tag"> Oracle</span>, as well as familiarity with front-end development tools such as
              <span class="tech-tag"> HTML CSS</span> and
              <span class="tech-tag"> BootStrap, TailWind</span>. I am proficient in various development frameworks such as
              <span class="tech-tag"> Angular</span>,
              <span class="tech-tag"> React</span>, and
              <span class="tech-tag"> Node.js</span>. I am comfortable with emerging technologies such as
              <span class="tech-tag"> AI-ML</span> and
              <span class="tech-tag"> cybersecurity</span>.
            </p>


            <p>
              Visit my
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bingumalla-dvijesh-2a99b022b/"
                className='tech-tag'
              > LinkedIn </a
              >profile for more details. Also you can checkout my Resume on this
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1O3s6y077o2qRiJ642hQEY88IJ6pxAage/view"
                className='tech-tag'
              > link</a
              >
            </p>
          </div>
        </div>
        <div className='sphere'>
          <Sphere />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
