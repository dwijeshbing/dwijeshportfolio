import React, { useEffect } from "react";
import "./index.css";
import TagCloud from "TagCloud";

const Sphere = () => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
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
                if (width <= 768) return 150;
                if (width <= 1024) return 200;
                return 300;
            };

            const options = {
                radius: getRadius(),
                maxSpeed: "fast",
                initSpeed: "normal",
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <span className="tagcloud"></span>
        </>
    );
};

export default Sphere;
