import React, { useEffect } from "react";
import "./index.css";
import TagCloud from "TagCloud";

const Sphere = () => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "Pyhthon",
                "Java",
                "C",

                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "React",
                "NodeJS",
                "Jquery",
                "GIT",
                "GITHUB",
                "MongoDB",
                "MySql"
            ];
            const getRadius = () => {
                const width = window.innerWidth;
                if (width <= 480) return 100;  // Mobile devices
                if (width <= 768) return 150;  // Tablets
                if (width <= 1024) return 200; // Small laptops/desktops
                return 300;                    // Large screens
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
