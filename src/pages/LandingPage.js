import styled from 'styled-components'
import { Link } from "react-router-dom";
import TableOfContents from '../components/Navigation';
import '../css/colors.css'

/* 
    (NOTE: PLEASE ONLY DELETE THIS COMMENT ONCE CONTENT EDITING IS FINISHED) 
    ↓↓↓ @CIARAN - HERE ARE THE BOXES SHOWN IN THE LANDING PAGE ↓↓↓
    (YOU CAN EDIT THEIR TITLES HERE IF EVER NEEDED - 
    BUT REMEMBER TO CHANGE IT ACROSS THE SITE TOO!)
*/

const LandingPage = () => (
    <div id='backdrop'>
        <div id='mainpage-container'>
            
            <div id='titles'>
                <h1>THE COSTS OF CREATI<span class='demos-o'>O</span>N</h1>
                <h2>What is a fair and desirable future for web monetisation?</h2>
            </div>
        </div>
        <TableOfContents />
        <footer>
        </footer>
    </div>


)


export default LandingPage;
