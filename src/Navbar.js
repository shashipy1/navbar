import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';


const Navbar = () => {

    // for clicking on toggle button and shows social link

    // const [showLink, setShowLink] = useState(false);
    // const [linksContainerRef] = useRef(null);
    // const [linksRef] = useRef(null);


    // EVERY TIME CHANGING LINKS
    // useEffect = (() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect().height;
    //     console.log(linksContainerRef.current.getBoundingClientRect())
    //     if(showLink){
    //         linksContainerRef.current.style.height = `${linksHeight}px`
    //     }else {
    //         linksContainerRef.current.style.height = '0px'

    //     }
    // }, [showLink])
 
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' />
                    <button className='nav-toggle'>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container show-container'>
                <ul className='links'>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
                <ul className='social-icons'>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;
