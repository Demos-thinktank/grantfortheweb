import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import '../css/typography.css'
import '../css/colors.css'
import '../css/pages.css'

const Navigation = () => (
    <TableOfContents className="nav">
        <ul>
            <li>
                <NavLink to="/what-is-web-monetisation" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    What is web monetisation?
                </NavLink>
                <div className="lozenge"></div>
            </li>
            <li>
                <NavLink to="/why-does-web-monetisation-matter" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    Why does the future of web monetisation matter?
                </NavLink>
                <div className="lozenge"></div>
            </li>
            <li>
                <NavLink to="/what-do-online-workers-think" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    What do online workers and volunteers think?
                </NavLink>                    
                <div className="lozenge"></div>
            </li>
            <li>
                <NavLink to="/what-should-be-done" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    What should be done?
                </NavLink>
                <div className="lozenge"></div>
            </li>
        </ul>
    </TableOfContents>
)

const TableOfContents = styled.nav`
`

export default Navigation;
