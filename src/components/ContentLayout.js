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

                <HeadingWrapper>
                    <Heading>{props.heading}</Heading>
                </HeadingWrapper>

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

            <MobileHeading><Heading>{props.heading}</Heading></MobileHeading>

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
    background-color: var(--color-light-grey);
`
const Header= styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 4rem;
    margin: 2rem 0 0 0;
    @media screen and (max-width: 974px){
        display: flex; 
    }
    @media screen and (max-width: 425px){
        padding: 0 2rem;
    }
`
const ReturnButton = styled.div``

const HeadingWrapper = styled.div`
    /* border: 1px solid red; */
    width: clamp(200px, 70%, 380px);
    margin: 0 auto;
    @media screen and (max-width: 974px){
        display: none;
    }
`
const MobileHeading = styled.div`
    /* border: 1px solid red; */
    width: clamp(200px, 70%, 380px);
    margin: 2rem auto;
    @media screen and (min-width: 974px){
        display: none;
    }
`

const Heading = styled.h1`
    /* border: 1px solid red; */
    margin: 0 auto;
    text-align: center;
    font-family: "Black";
    font-size: 1.2rem;
    color: var(--demos-teal);
`
const ContentWrapper = styled.div`
    /* border: 1px solid green; */
    margin: 2rem;
    display: grid;
    grid-row-gap: 1rem; 
    grid-column-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2,1fr);
    justify-items: center;
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
    @media screen and (max-width: 345px){
        font-size: 1.4rem;
    }
`
const ToggleButton = styled.button`
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
    color: var(--demos-orange);
    @media screen and (max-width: 425px){
        font-size: 1.5rem;
    }
`

const Text = styled.div`
    /* border: 2px solid red; */
    grid-area: 1 / 1 / span 2;
    height: fit-content;
    margin-top: 4rem;
    font-family: Book;
    padding: 1.5rem;
    @media screen and (max-width: 425px){
        margin-top: 5rem;
    }
`
const ImageWrapper = styled.div`
    @media screen and (max-width: 425px){
        margin: 1rem auto;
    }
`
const Image = styled.img`
    @media screen and (max-width: 425px){
        width: 95px;
    }
`

export default ContentLayout;