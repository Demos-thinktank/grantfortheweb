import styled from 'styled-components'
import { Link } from "react-router-dom";

const LandingPage = () => (
    <Container>
        <BubbleWrapper className="bubble center">
            The Costs of Creation: What is a fair and desirable future for web monetisation?
        </BubbleWrapper>
        <BubbleWrapper className="bubble"/>
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
        <BubbleWrapper className="bubble one">
            <Link to='one'>
                What is web monetization?
            </Link>
        </BubbleWrapper>
        <BubbleWrapper className="bubble"/>
    </Container>
)

const Container = styled.div`
    --w:400px;
    --n:5;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(clamp(100%/(var(--n) + 1) + 0.1%,(var(--w) - 100vw)*1000,100%),1fr)); /*this */
    grid-template-rows:repeat(auto-fit,minmax(clamp(100%/(var(--n) + 1) + 0.1%,(var(--w) - 100vw)*1000,100%),1fr)); /*this */
    grid-column-gap: 0;
    grid-row-gap: 2rem;
`
const BubbleWrapper = styled.div`
    height: 20vh;
    background-color: grey;
`

export default LandingPage;