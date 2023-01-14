import React from "react";
import {Link} from "react-scroll";

export const NavLinks = ({link, className, onClick}) => {
    return (
        <li className={className}>
            <Link to={link} smooth duration={500} onClick={onClick}>
                {link}
            </Link>
        </li>
    )
}