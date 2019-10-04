import React from 'react';

const FooterPage = () => {
    return (
        <>
            <div className="footer push">
                <div className="links-container">
                    <a href="https://www.linkedin.com/in/benjamin-gu-3a14a787/" className="footer-link-info"> LinkedIn</a>
                    <a href="https://www.facebook.com/benjamin.gu.54" className="footer-link-info">Facebook</a>
                    <a href="https://github.com/LegendOfBenji" className="footer-link-info">Github</a>
                </div>
                    
                <div className="footer-rant">
                    <p className="footer-info">
                        Frap With Friends is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
                    </p>
                    <p className="footer-info">
                        We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FooterPage;