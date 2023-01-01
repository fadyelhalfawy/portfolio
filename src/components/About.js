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
                <p className={"text-xl mt-20"}>
                    I have a bachelor's of computer science (B.CS.), graduated from
                    Arab Academy for Science, Technology and Maritime Transport
                    with grade very good with honor and I was eighth in the batch.<br />
                    Year of graduation: 2016-2020
                </p>

                <br />

                <p className={"text-xl"}>
                    I have finished my military service in 1/12/2021.<br />
                    I served in Air Defense College and I was a
                    military teacher assistant which I
                    taught Students basics C and JavaScript programming languages.
                </p>
            </div>

        </div>
    )
}