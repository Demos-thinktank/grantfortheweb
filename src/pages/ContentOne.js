import ContentLayout from '../components/ContentLayout'

const ContentOne = () => (
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
            title="What is web monetisation?"
            text=
            {`
                Simply put, web monetisation refers to the process of turning web traffic (i.e. site visits) into a revenue stream. Online, we are surrounded by
                various models of web monetisation, from advertising, to subscription sign-ups, to the selling of the data collected about site visitors, to the sale
                of products and services, and much more.
                
                The financing of things online can of course sit outside the realm of private enterprise too. For example, when you visit the Gov.uk site, you’re doing
                so thanks to public funds. Furthermore, a site’s financial support might come from donations given by visitors or philanthropic bodies, as is the case
                with Wikipedia. You also have the world of non-proprietary, open-source entities online which are typically run at their core by volunteers, like the
                social media site Mastodon. There is also a growing movement of cooperatively owned platforms, like the music streaming service Resonate.
                
                A further model that, though not entirely new, is finding new experimenters, is the streaming of micropayments. In essence, this can works as follows
                (1) You pay a monthly amount into a digital wallet (e.g. £5).
                (2) Sites allow payment via the wallet.
                (3) When you visit a site that allows such payment, you agree (or have agreed in advance) for tiny, continuous payments to be made from your wallet
                (e.g. £0.0001 per second).
                (4) This replaces alternative web monetisation on the site in question and may offer perks; for example, it could remove advertisements and allow you
                to access more content.

                The model above comes from an organisation spearheading this experimentation, an independently managed fund called [Grant for the Web](https://www.grantfortheweb.org/faq)(GftW) created by
                Coil, Mozilla and Creative Commons. In addition to funding independent research into web monetisation such as this report, GftW are funding people’s
                experiments in applying this model through the Web Monetization API (a specific web application for adding the above model to a site). 
                
            `}
        />
    </>
)


export default ContentOne;
