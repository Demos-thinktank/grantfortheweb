import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import '../pages.css'

const ContentLayout = (props) => (
    <>
        <Container>
            <Heading>{props.heading}</Heading>
            <ContentWrapper className="wrapper">
                <Title className="title"> {props.title} </Title>
                <TableOfContents className="box">
                    <ul>
                        <li>
                            <NavLink to="/one" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                What is web monetisation?
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/two" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                Why does the future of web monetisation matter?
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/three" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                What do online workers and volunteers think?
                            </NavLink>                    
                        </li>
                        <li>
                            <NavLink to="/four" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                What should be done?
                            </NavLink>
                        </li>
                    </ul>
                </TableOfContents>
                <Text className="text">
                    <p>
                        {props.text}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius enim et sapien placerat tincidunt. Donec a arcu ut urna volutpat scelerisque. Curabitur tempor congue laoreet. Quisque vel pretium ante, nec congue elit. Morbi condimentum lobortis arcu, vel blandit ipsum scelerisque vitae. Aliquam condimentum, orci et fermentum semper, massa ante gravida enim, vitae aliquet diam mauris sit amet eros. Vestibulum et purus imperdiet, fermentum leo et, viverra turpis. Fusce semper semper convallis. Etiam fermentum vitae velit non molestie. Aliquam elementum pretium justo ac tempor. Maecenas efficitur id ipsum id molestie. Nulla volutpat vulputate nulla, elementum rutrum mi.
                    </p>
                </Text> 
            </ContentWrapper>
        </Container>
    </>
)

const Container = styled.section`
    border: 2px solid red;
    width: 100vw;
    height: 100vh;
`
const Heading = styled.h1`
    border: 2px solid blue;
    text-align: center;
    padding: 2rem;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    padding: 3.5rem;
    height: inherit;
    @media screen and (max-width: 660px){
        grid-template-columns: repeat(1, 1fr);
    }
`
const Title = styled.h2`

`
const TableOfContents = styled.nav`
    border: 1px solid grey;
    width: clamp(300px, 60%, 400px);
    padding: 0.5rem;
`
const Text = styled.div`
`

export default ContentLayout;