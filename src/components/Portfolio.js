import React from "react";
import MoviesWebsite from "../assets/portfolio/MoviesWebsite.png";
import Reviews from "../assets/portfolio/Review.jpeg";
import orderFood from "../assets/portfolio/OrderFood.jpg";
import UpdateTweeter from "../assets/portfolio/Gameball.jpg";
import DisplayTours from "../assets/portfolio/DisplayTours.jpg";
import PortfolioProject from "../assets/portfolio/Portfolio.jpg";
export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: MoviesWebsite,
            name: "Movies-website",
            link: "https://github.com/fadyelhalfawy/movies-website"
        },
        {
            id: 2,
            src: Reviews,
            name: "Reviews",
            link: "https://github.com/fadyelhalfawy/reviews"
        },
        {
            id: 3,
            src: orderFood,
            name: "Order-food",
            link: "https://github.com/fadyelhalfawy/order-food"
        },
        {
            id: 4,
            src: UpdateTweeter,
            name: "Update-tweeter",
            link: "https://github.com/fadyelhalfawy/gameball"
        },
        {
            id: 5,
            src: DisplayTours,
            name: "Display-tours",
            link: "https://github.com/fadyelhalfawy/display-tours"
        },
        {
            id: 6,
            src: PortfolioProject,
            name: "Portfolio",
            link: "https://github.com/fadyelhalfawy/portfolio"
        },
    ]

    return (
        <div name={"portfolio"} className={"bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"}>
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
                    portfolios.map(({id, src, name, link}) => (

                            <div key={id} className={"shadow-md shadow-gray-600 rounded-lg"}>
                                <img src={src} alt={src} className={"rounded-md duration-200 hover:scale-105"} />
                                <div className={"flex items-center justify-center"}>
                                    <button className={"w-1/2 px-6 py-3 m-4 cursor-auto"}>
                                        {name}
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