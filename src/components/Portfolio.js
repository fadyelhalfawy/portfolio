import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            link: "https://github.com/fadyelhalfawy/movies-website"
        },
        {
            id: 2,
            src: installNode,
            link: "https://github.com/fadyelhalfawy/reviews"
        },
        {
            id: 3,
            src: navbar,
            link: "https://github.com/fadyelhalfawy/order-food"
        },
        {
            id: 4,
            src: reactParallax,
            link: "https://github.com/fadyelhalfawy/gameball"
        },
        {
            id: 5,
            src: reactSmooth,
            link: "https://github.com/fadyelhalfawy/display-tours"
        },
        {
            id: 6,
            src: reactWeather,
            link: "https://github.com/fadyelhalfawy/portfolio"
        },
    ]

    return (
        <div className={"bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"}>
            <div className={"max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"}>
                <div className={"pb-8"}>
                    <p className={"text-4xl font-bold inline border-b-4 border-gray-500"}>
                        Portfolio
                    </p>
                    <p className={"py-6"}>
                        Check out my work right here.
                    </p>
                </div>

                <div className={"grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"}>
                {
                    portfolios.map(({id, src, link}) => (

                            <div key={id} className={"shadow-md shadow-gray-600 rounded-lg"}>
                                <img src={src} alt={src} className={"rounded-md duration-200 hover:scale-105"} />
                                <div className={"flex items-center justify-center"}>
                                    <button className={"w-1/2 px-6 py-3 m-4 cursor-auto"}>
                                        Name of project
                                    </button>
                                    <button className="disabled px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                                        <a href={link} target={'_blank'} rel="noreferrer">Code Link</a>
                                    </button>
                                </div>
                            </div>
                    ))
                }
                    </div>
            </div>
        </div>
    )
}