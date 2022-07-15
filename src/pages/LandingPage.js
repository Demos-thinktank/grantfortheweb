import TableOfContents from '../components/Navigation';
import '../css/colors.css'
import logo from '../assets/logo.svg';
/* 
    (NOTE: PLEASE ONLY DELETE THIS COMMENT ONCE CONTENT EDITING IS FINISHED) 
    ↓↓↓ @CIARAN - HERE ARE THE BOXES SHOWN IN THE LANDING PAGE ↓↓↓
    (YOU CAN EDIT THEIR TITLES HERE IF EVER NEEDED - 
    BUT REMEMBER TO CHANGE IT ACROSS THE SITE TOO!)
*/

const LandingPage = () => (
    <div id='backdrop'>
        <div id='mainpage-container'>
            <div class='image-wrapper'>
                <a href="https://demos.co.uk/" target="_blank" rel="noreferrer">
                    <img class='demos-logo' src={logo} alt="Demos logo" height="auto"/>
                </a>
            </div>
            <div id='titles'>
                <h1>THE COSTS OF CREATI<span class='demos-o'>O</span>N</h1>
                <h2>What is a fair and desirable future for web monetisation?</h2>
            </div>
        </div>
        <TableOfContents />
        <footer></footer>
    </div>


)

export default LandingPage;
