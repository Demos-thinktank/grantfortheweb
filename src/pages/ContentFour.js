import ContentLayout from '../components/ContentLayout'

const ContentFour = () => (
    <>
        {/* 
            (NOTE: PLEASE ONLY DELETE THIS COMMENT ONCE CONTENT EDITING IS FINISHED) 
            ↓↓↓ @CIARAN - BELOW IS WHERE YOU PUT IN YOUR MAIN TEXT CONTENT ↓↓↓
            (PASTE YOUR TEXT WHERE LOREM IPSUM RESIDES)
            (You can also edit the overall heading of the website /and/ the 
            respective section titles if you need to)
        */}
        <ContentLayout 
            heading="The Costs of Creation: What is a fair and desirable future for web monetisation?" 
            title="What should be done?"
            text=
            {<>
                <p>Our research offers insight into the the steps decision-makers, civil society and tech companies need to take to create a fair and desirable future for web monetisation. Below you read our summarised recommendations or read them in detail in our full report. You can also take part in the same interactive poll that formed part of the research. In this way, we can together continue to broaden the debate about what a fair and desirable future for web monetisation looks like.</p>
                <div class='expander'>
                    <h3 class='intext-heading'>Recommendation Summaries</h3>
                    <p>Despite divisions, we found an overarching background of consensus among workers and volunteers. There is a broad sense that prevailing monetisation is unfair and needs to be changed. <span class='orange'>To bring about a fairer future for web monetisation requires strengthening worker and volunteer collective power and improving their visibility.</span></p>
                    <p>There is also a shared sense that a desirable future isn’t about straightforwardly accepting or rejecting monetisation, but about having the appropriate kind in the appropriate settings, while ensuring certain content remains free for all. <span class='orange'>To bring about a more desirable future here we need to rethink the nature of online reward systems (financial and otherwise), determine what we want to protect from monetisation, and determine which organisations best support worker and volunteer autonomy and voice.</span></p>
                    <p>Despite the consensus among those we listened to, it was clear that people’s views were open to further change. People want this to be the start of the discussion, not the end. <span class='orange'>To make better decisions about the future of web monetisation requires optimal forms of dialogue, deliberation and decision-making with workers, volunteers and the wider public.</span></p>
                </div>
            </>}
        />
    </>
)


export default ContentFour;