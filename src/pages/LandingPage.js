import styled from 'styled-components'
import { Link } from "react-router-dom";

const LandingPage = () => (
    <Container>
        <BubbleWrapper className="bubble center">
            The Costs of Creation: What is a fair and desirable future for web monetisation?
        </BubbleWrapper>

        <BubbleWrapper className="bubble one">
            <Link to='one'>
                What is web monetization?
            </Link>        
        </BubbleWrapper>

        <BubbleWrapper className="bubble two">
            <Link to='two'>
                Why does the future of web monetisation matter?
            </Link>
        </BubbleWrapper>

        <BubbleWrapper className="bubble three">
            <Link to='three'>
                What do online workers and volunteers think?
            </Link>
        </BubbleWrapper>
        
        <BubbleWrapper className="bubble four">
            <Link to='four'>
                What should be done?
            </Link>
        </BubbleWrapper>
    </Container>
)

const Container = styled.div`
    --w:400px;
    --n:5;
    display:grid;
    grid-row-gap: 2rem;
    width: 100vw;
    height: 100vh;
    @media screen and (max-width: 600px){
        display: block;
        background-color: aliceblue;
        height: 100%
    }

`
const BubbleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    @media screen and (max-width: 600px){
        margin: 2rem 0 0 0;
    }
`

export default LandingPage;