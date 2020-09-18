import React, { useState } from 'react'
import { Accordion, Icon, Divider } from 'semantic-ui-react'
import _ from 'lodash'

const faqs = [
    {
        "title": "What is Odiance?",
        "content": "Good question! Odiance (pronounced Au – Diance) is a unique Live Streaming and Ticketing platform. Odiance was conceived as a way to help artists who can’t reach their fans physically and earn a living, do so, from either the comfort of their home, their backyard… Or simply once live venues open up, Broadcast Live from there. It goes both ways needless to say. For fans the experience of being up there with their stars physically can never be replaced. But in case that possibility turns into an impossibility, guess what? Odiance has got your back!"
    },
    {
        "title": "Who is Odiance for?",
        "content": "Odiance is and was conceived for the people who matter the most to us! Performing artists such as Musicians, Dancers, Comedians, Method Actors and their amazing and wonderful fans. We know the special connection that exists between fans and their artists and we are here to fill in that gap Live and Digitally."
    },
    {
        "title": "How does Odiance work?",
        "content": "Odiance is as easy to use as 1,2,3.. Select the show which you would love to see Live from our Homepage. Click on the buy ticket button. It will get added to your cart. Go to the cart and select if you want one or more tickets by using the ‘+’ and ‘-‘ icons and once you are all set click on the payment button, input your details and “VOILA”. You are all set. Look out for an email from us with your purchase information. When you are ready to join a show, just click on the link on your purchase history section and boom! You’re in!"
    },
    {
        "title": "How to become a Performer on Odiance?",
        "content": "Currently we only work with authenticated performers, Managers and Record Labels and not have the option to give access to everyone. If you would like to become a performer on Odiance then please send us an email at talent@odiance.com"
    },
    {
        "title": "Do I need to create an account?",
        "content": "Yes, you do. This is only to help secure your purchases on Odiance and ensure that your tickets are secured and stays that way."
    },
    {
        "title": "Can I buy multiple tickets?",
        "content": "But of course."
    },
    {
        "title": "Can I buy a ticket as a gift for someone I know?",
        "content": "Absolutely! We all love gifts and what’s a better way than a Live Performance Ticket?"
    },
    {
        "title": "How many shows can I see in a month?",
        "content": "As many as you like! We hold no grudges… Pinky swear!"
    },
    {
        "title": "How does ticket payments work, and can I get a refund on my tickets?",
        "content": "When you buy a ticket, the money is held and is transferred to the artist once a show has been successfully completed. In case the show is cancelled the money is returned to you safe and sound in all its glory."
    },
    {
        "title": "How can I buy Merchandize?",
        "content": "Currently the only way to buy any and all Merch is from the performer’s web address. But rest assured we are working on something amazing in those areas. Keep an eye out for more."
    },
    {
        "title": "I missed my show – Can I see a recording of it?",
        "content": "Unfortunately, no. Live is Live after all. We recommend you put your show dates in your calendar. Rest assured we would definitely notify you on the day of your show."
    },
    {
        "title": "How do I contact Customer Service?",
        "content": "Please email us at info@odiance.com with the subject line “Customer Support”"
    },
    {
        "title": "Do you guys have an app?",
        "content": "Wouldn’t we love to. Unfortunately, not yet. But soon. So very very soon!"
    }
]

function Faq(props) {

    const [activeIndex, setActiveIndex] = useState(0)

    // handleClick = (in) => {
    //     const { index } = titleProps
    //     const { activeIndex } = this.state
    //     const newIndex = activeIndex === index ? -1 : index

    //     this.setState({ activeIndex: newIndex })
    // }

    const faqAccordion = _.map(faqs, (element, index) => {
        return (
            <>
                <Accordion.Title index={index} active={activeIndex === index} onClick={e => setActiveIndex(index)}>
                    <Icon name='dropdown' />
                    <span className="just-font" >{element.title}</span>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                    <span className="just-font">{element.content}</span>
                </Accordion.Content>
            </>
        )
    })

    return (
        <div>
            <div className="h2 site-font">Frequently Asked Questions</div>
            <Divider />
            <Accordion fluid styled>
                {faqAccordion}
            </Accordion>
        </div>
    )
}

export default Faq