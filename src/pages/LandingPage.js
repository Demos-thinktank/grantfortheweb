import styled from 'styled-components'
import { Link } from "react-router-dom";
import '../css/colors.css'

const LandingPage = () => (
    <Container>
        <div className="bubble center">
            The Costs of Creation: What is a fair and desirable future for web monetisation? uyfhgchgjsydluc;
        </div>

        <Link to="what-is-web-monetisation" className="bubble one border">
            What is web monetisation?
        </Link>

        <Link to='why-does-web-monetisation-matter' className="bubble two border">
            Why does the future of web monetisation matter?
        </Link>

        <Link to='what-do-online-workers-think' className="bubble three border">
            What do online workers and volunteers think?
        </Link>
        
        <Link to='what-should-be-done' className="bubble four border">
            What should be done?
        </Link>
    </Container>
)

const Container = styled.div`
    background-color: var(--color-light-grey);
    --w:400px;
    --n:5;
    display:grid;
    width: 100vw;
    height: 100vh;
    @media screen and (max-width: 610px){
        display: block;
    }

`

export default LandingPage;
