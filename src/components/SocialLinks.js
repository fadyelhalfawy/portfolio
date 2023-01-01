import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn < FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/fadyelhalfawy/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub < FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/fadyelhalfawy'
        },
        {
            id: 3,
            child: (
                <>
                    Mail < HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:fadyhalfawy@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    Resume < BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className={"hidden flex-col top-[35%] left-0 fixed lg:flex"}>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    // eslint-disable-next-line no-useless-concat
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] rounded-md duration-300" + " " + style}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href={href} className={"flex justify-between items-center w-full text-white"} download={download} target={'_blank'} rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}