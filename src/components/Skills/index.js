import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Sphere from '../Sphere/index';
import Experience from '../Experience/Experience';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example threshold for small screens
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              <span className="tech-tag"> Python</span>,
              <span className="tech-tag"> Java</span>, and
              <span className="tech-tag"> C</span>. I have experience with database management systems like
              <span className="tech-tag"> MySQL</span> and
              <span className="tech-tag"> Oracle</span>, as well as familiarity with front-end development tools such as
              <span className="tech-tag"> HTML CSS</span> and
              <span className="tech-tag"> BootStrap, TailWind</span>. I am proficient in various development frameworks such as
              <span className="tech-tag"> Angular</span>,
              <span className="tech-tag"> React</span>, and
              <span className="tech-tag"> Node.js</span>. I am comfortable with emerging technologies such as
              <span className="tech-tag"> AI-ML</span> and
              <span className="tech-tag"> cybersecurity</span>.
            </p>

            <p>
              Visit my
              <a
                href="https://www.linkedin.com/in/bingumalla-dvijesh-2a99b022b/"
                className="tech-tag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> LinkedIn</span>
              </a>
              <span> profile for more details. Also, you can check out my resume on this</span>
              <a
                href="https://drive.google.com/file/d/1O3s6y077o2qRiJ642hQEY88IJ6pxAage/view"
                className="tech-tag"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              .
            </p>
          </div>
        </div>
        {isSmallScreen ? (
          <Experience />
        ) : (
          <div className="sphere">
            <Sphere />
          </div>
        )}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
