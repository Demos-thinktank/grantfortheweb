import styled from 'styled-components'

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as Bar, faTimes as Cross, faHome as Home } from '@fortawesome/free-solid-svg-icons'

import Hamburger from "./Hamburger"
import Navigation from "./Navigation"

import '../css/pages.css'
import '../css/typography.css'
import '../css/colors.css'
import logo from '../assets/logo.svg';

function ContentLayout(props) {
    const [icons, setIcons] = useState(false);
    const toggleIcon = () => {
        setIcons(!icons)
        console.log('hello icon')
    }

    return (
        <Container>
            <Header>
                <ReturnButton className="back">
                    <Link to='/'>
                        &#8689; Back to Home
                    </Link>
                </ReturnButton>

                <ReturnButton>
                    <Link to='/' className="mobile-back">
                        <FontAwesomeIcon icon={Home}/>
                    </Link>
                </ReturnButton>

                <ImageWrapper>
                    <a href="https://demos.co.uk/" target="_blank" rel="noreferrer">
                        <Image src={logo} alt="" width="120" height="auto"/>
                    </a>
                </ImageWrapper>

                <ToggleButton onClick={toggleIcon} className="hamburger-icon">
                    <FontAwesomeIcon icon={icons ? Cross : Bar}/>
                </ToggleButton>
                {icons && <Hamburger/>}
                
            </Header>

            <Heading>{props.heading}</Heading>

            <ContentWrapper className="wrapper">
                <Title className="title"> {props.title} </Title>
                
                <Navigation/>

                <Text className="text">
                    <p>
                        {props.text}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius enim et sapien placerat tincidunt. Donec a arcu ut urna volutpat scelerisque. Curabitur tempor congue laoreet. Quisque vel pretium ante, nec congue elit. Morbi condimentum lobortis arcu, vel blandit ipsum scelerisque vitae. Aliquam condimentum, orci et fermentum semper, massa ante gravida enim, vitae aliquet diam mauris sit amet eros. Vestibulum et purus imperdiet, fermentum leo et, viverra turpis. Fusce semper semper convallis. Etiam fermentum vitae velit non molestie. Aliquam elementum pretium justo ac tempor. Maecenas efficitur id ipsum id molestie. Nulla volutpat vulputate nulla, elementum rutrum mi.
                    </p>
                    <p>
                        {props.text}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius enim et sapien placerat tincidunt. Donec a arcu ut urna volutpat scelerisque. Curabitur tempor congue laoreet. Quisque vel pretium ante, nec congue elit. Morbi condimentum lobortis arcu, vel blandit ipsum scelerisque vitae. Aliquam condimentum, orci et fermentum semper, massa ante gravida enim, vitae aliquet diam mauris sit amet eros. Vestibulum et purus imperdiet, fermentum leo et, viverra turpis. Fusce semper semper convallis. Etiam fermentum vitae velit non molestie. Aliquam elementum pretium justo ac tempor. Maecenas efficitur id ipsum id molestie. Nulla volutpat vulputate nulla, elementum rutrum mi.
                    </p>
                    <p>
                        {props.text}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius enim et sapien placerat tincidunt. Donec a arcu ut urna volutpat scelerisque. Curabitur tempor congue laoreet. Quisque vel pretium ante, nec congue elit. Morbi condimentum lobortis arcu, vel blandit ipsum scelerisque vitae. Aliquam condimentum, orci et fermentum semper, massa ante gravida enim, vitae aliquet diam mauris sit amet eros. Vestibulum et purus imperdiet, fermentum leo et, viverra turpis. Fusce semper semper convallis. Etiam fermentum vitae velit non molestie. Aliquam elementum pretium justo ac tempor. Maecenas efficitur id ipsum id molestie. Nulla volutpat vulputate nulla, elementum rutrum mi.
                    </p>
                </Text>
            </ContentWrapper>
        </Container>
    )
}

const Container = styled.section`
    min-height: 100vh;
    position: relative;
`
const Header= styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    margin: 2rem 0 0 0;

`
const ReturnButton = styled.div`
`
const Heading = styled.h1`
    width: fit-content;
    margin: 1rem auto;
    text-align: center;
    padding: 2rem;
    font-family: "Black";
    color: var(--demos-teal);
    @media screen and (max-width: 1190px){
        font-size: 1.2rem;
        width: 60%;
    }
`
const ContentWrapper = styled.div`
    display: grid;
    grid-row-gap: 1rem; 
    grid-column-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2,1fr);
    justify-items: center;
    padding: 3rem;
    height: inherit;
    @media screen and (max-width: 974px){
        grid-template-columns: repeat(1, 1fr);
    }
`
const Title = styled.h2`
    /* border: 1px solid red; */
    padding: .2rem;
    font-family: BlackOB;
    font-size: 1.7rem;
    text-align: center;
    grid-area: 1 / 1 / span 1;
    height: fit-content;
    width: clamp(250px, 100%, 360px);
`
const ToggleButton = styled.button`
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
    color: var(--demos-orange);
    width: 5%;
`

const Text = styled.div`
    grid-area: 1 / 1 / span 2;
    height: fit-content;
    margin-top: 6rem;
    font-family: Book;
    padding: 1rem;
`
const ImageWrapper = styled.div`
    /* border: 2px solid red; */
    height: fit-content;
    flex: 1; 
    text-align: center;
    @media screen and (min-width: 974px){
        position: absolute;
        right: 5rem;
    }
`
const Image = styled.img``

export default ContentLayout;