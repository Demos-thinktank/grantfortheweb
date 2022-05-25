import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import '../css/typography.css'
import '../css/colors.css'
import '../css/pages.css'

const Hamburger = () => (
    <TableOfContents className="hamburger">
        <ul>
            <li>
                <NavLink to="/what-is-web-monetisation" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                    What is web monetisation?
                </NavLink>
            </li>
            <li>
                <NavLink to="/why-does-web-monetisation-matter" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                    Why does the future of web monetisation matter?
                </NavLink>
            </li>
            <li>
                <NavLink to="/what-do-online-workers-think" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                    What do online workers and volunteers think?
                </NavLink>                    
            </li>
            <li>
                <NavLink to="/what-should-be-done" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                    What should be done?
                </NavLink>
            </li>
        </ul>
    </TableOfContents>
)

const TableOfContents = styled.nav`
    border: 1px solid lightgrey;
    padding: 0.5rem;
    width: clamp(200px,60%,500px);
    height: fit-content;
    -webkit-box-shadow: 12px 12px 0px 0px var(--demos-teal);
    -moz-box-shadow: 12px 12px 0px 0px var(--demos-teal);
    box-shadow: 12px 12px 0px 0px var(--demos-teal);
    @media screen and (max-width: 425px){
        padding: 0rem;
        width: 60%;
    }
`

export default Hamburger;
