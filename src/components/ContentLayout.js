import styled from 'styled-components'

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as Bar, faTimes as Cross, faHome as Home } from '@fortawesome/free-solid-svg-icons'

import TableOfContents from "./Navigation"

import '../css/pages.css'
import '../css/typography.css'
import '../css/colors.css'
import whitelogo from '../assets/demos-white-logo.png';

function ContentLayout(props) {
    const [icons, setIcons] = useState(false);
    const toggleIcon = () => {
        setIcons(!icons);
        // console.log('hello icon')
    }

    return (
        <div id='article'>
            <header>
                <div id='page-title'>
                    <a href='/'> 
                        <h1>{props.heading}</h1>
                    </a>
                </div>
                <div>
                    <a href="https://demos.co.uk/" target="_blank" rel="noreferrer">
                        <img class='demos-logo' src={whitelogo} alt="Demos logo" />
                    </a>
                </div>

            </header>

            <div class="text-wrapper">
                <h2 class="title section-head"> {props.title} </h2>
                <div class="lozenge" />
                <div class="text">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>

            <TableOfContents />
            <footer></footer>

        </div>
    )
}

export default ContentLayout;