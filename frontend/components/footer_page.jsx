import React from 'react';

const FooterPage = () => {
    return (
        <>
            <div className="footer push">
                <div className="links-container">
                    <a href="https://www.linkedin.com/in/benjamin-gu-3a14a787/" target="_blank" className="footer-link-info"><img src={window.linkedin} alt="linkedin logo"/></a>
                    <a href="https://angel.co/benjamin-gu-1" target="_blank" className="footer-link-info"><img src={window.angellist} alt="angellist logo" /></a>
                    <a href="https://github.com/LegendOfBenji" target="_blank" className="footer-link-info"><img src={window.github} alt="github logo" /></a>
                </div>
                    
                <div className="footer-rant">
                    <p className="footer-info">
                        Frap With Friends is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
                    </p>
                    <p className="footer-info">
                        We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
                    </p>
                    <a href="https://www.icons8.com" className="footer-credit">Icons by icons8.</a>
                </div>
            </div>
        </>
    )
}

export default FooterPage;