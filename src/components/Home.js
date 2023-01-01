import React from "react";
import HeroImage from "../assets/HeroImage - Copy.png";
import {BsArrowRightCircleFill} from "react-icons/bs"

export const Home = () => {

    return (
        <div name={"home"} className={"w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"}>
            <div className={"max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4"}>
                <div className={"flex flex-col justify-center h-full"}>
                    <h2 className={"text-4xl sm:text-7xl font-bold text-white"}>
                        I'm a JavaScript Full Stack Developer
                    </h2>
                    <p className={"text-gray-500 py-4 max-w-md"}>
                        Passionate Software Engineer who enjoys daily challenges,
                        critical thinking and problem solving.
                        A top of class graduate adept at working across departments, with faculty,
                        administrators, and students with a record of academic success.
                        Eager to learn new technologies, know in-details about their underlying
                        concept and participate in latest technologies.
                    </p>
                    <div>
                        <button className={"group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"}>
                            Portfolio
                            <span className={"group-hover:rotate-90 duration-300"}>
                                <BsArrowRightCircleFill className={"ml-1"} size={20}/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={HeroImage} alt={"My Profile Picture"} className={"rounded-2xl mx-auto w-2/3 md:w-full"} />
                </div>
            </div>
        </div>
    )
}