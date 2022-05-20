import styled from 'styled-components'
import { Link } from "react-router-dom";
import '../css/colors.css'

const LandingPage = () => (
    <Container>
        <div className="bubble center">
            The Costs of Creation: What is a fair and desirable future for web monetisation?
        </div>

        <Link to="one" className="bubble one border">
            What is web monetization?
        </Link>

        <Link to='two' className="bubble two border">
            Why does the future of web monetisation matter?
        </Link>

        <Link to='three' className="bubble three border">
            What do online workers and volunteers think?
        </Link>
        
        <Link to='four' className="bubble four border">
            What should be done?
        </Link>
    </Container>
)

const Container = styled.div`
    background-color: var(--demos-light);
    --w:400px;
    --n:5;
    display:grid;
    width: 100vw;
    height: 100vh;
    @media screen and (max-width: 610px){
        display: block;
        border: 2px solid red;
    }

`

export default LandingPage;