import React from "react";

export const About = () => {

    return (
        <div className={"w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"}>
            <div className={"max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"}>
                <div className={"pb-8"}>
                    <p className={"text-4xl font-bold inline border-b-4 border-gray-500"}>
                        About
                    </p>
                </div>
                <p className={"text-xl mt-10"}>
                    I have a bachelor's of computer science (B.CS.), graduated from
                    Arab Academy for Science, Technology and Maritime Transport
                    with grade very good with honor and I was eighth in the batch.<br />
                    Year of graduation: 2016-2020
                </p>

                <p className={"text-4xl font-bold mt-20"}>
                    Graduation Project: Autonomous Vehicles
                </p>

                <p className={"text-xl mt-10"}>
                    Working on Semantic segmentation for scene understanding in which classification is performed on every single pixel of an image. Semantic segmentation is used in autonomous vehicles to locate frontal objects such as roads, dividers, vehicles, pavements, etc. It is a vital subsystem of the vehicle's navigation system.
                    <br/>
                    <br/>
                    Developing Variationally Autoencoder (VAE) model that learns how to compress and decompress some data representation to achieve a good dimensionality reduction, leading to a compressed data that is potentially less expensive in terms of computation.
                <br/>
                    <br/>
                    Implementing Bird View a driver can check for obstructions around the vehicle. The system can display the bird's-eye, front and rear views, making it possible to check the vehicle's 360-degree surroundings simultaneously with either the fore and back.
                </p>

                <br />

                <p className={"text-4xl font-bold mt-20"}>
                    Military Service State: Completed
                </p>

                <p className={"text-xl mt-10"}>
                    I have finished my military service in 1/12/2021.<br />
                    I served in Air Defense College and I was a
                    military teacher assistant which I
                    taught Students basics C and JavaScript programming languages.
                </p>
            </div>

        </div>
    )
}