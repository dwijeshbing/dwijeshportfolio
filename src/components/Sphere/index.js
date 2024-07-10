import React, { useEffect } from "react";
import "./index.css";
import TagCloud from "TagCloud";

const Sphere = () => {
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            "Python",
            "Java",
            "C",
            "C++",
            "HTML",
            "CSS",
            "SASS",
            "ExpressJS",
            "JavaScript",
            "React",
            "NodeJS",
            "Jquery",
            "GITHUB",
            "MongoDB",
            "MySql"
        ];
        const getRadius = () => {
            const width = window.innerWidth;
            if (width <= 480) return 100;
            else if (width <= 768) return 150;
            else if (width <= 1024) return 200;
            return 300;
        };

        const options = {
            radius: getRadius(),
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
        };

        TagCloud(container, texts, options);
    }, []);

    return (
        <>
            <span className="tagcloud"></span>
        </>
    );
};

export default Sphere;
