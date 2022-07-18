import React from 'react';
import TableOfContents from "./Navigation"

import '../css/pages.css'
import '../css/typography.css'
import '../css/colors.css'
import whitelogo from '../assets/demos-white-logo.png';

function ContentLayout(props) {
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
            <div class= "main-wrapper">
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
            </div>

            <footer></footer>

        </div>
    )
}

export default ContentLayout;
