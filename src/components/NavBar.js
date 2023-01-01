import React from "react";
import {faBars, faTimes} from "react-icons/fa"


export const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <div>
            <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
                <h1 className="text-5xl font-signature ml-2">Fady ElHalfawy</h1>
            </div>

            <ul className={"flex"}>
                {
                   links.map(({id, link}) => (
                       <li key={id} className={"px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"}>
                           {link}
                       </li>
                   ))}
            </ul>
        </div>
    )
}