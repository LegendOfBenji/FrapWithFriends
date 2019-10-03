import React from 'react';
import { Link } from 'react-router-dom';
const SplashPage = () => {
    return (
    <>
        <div className="zero">
            </div>
            <div className="one">
            <p className="splashpage-header">Everyone can be a Friend</p>
            <p className="splashpage-sub-header">So let's go out there and meet some people!</p>
            <Link to='/fraptimes' className="splashlink">Let's Frap Out</Link>
            </div>
        
        <div className="two">
            <div className="two-one">
               <p className="two-header">Show up For Frap Time</p>
                    <p className="two-body">You and a few others join a host at a cafe.</p> 
            </div>
            <div className="two-two">
                <p className="two-header">Have A real Conversation</p>
                    <p className="two-body">You talk for two hours about anything.</p>
            </div>
            <div className="two-three">
                    <p className="two-header">See what happens</p>
                    <p className="two-body">That's it. No strings attached.</p>
            </div>
        </div>
        <div className="three">
            <p className="splash-three">So why are people doing it?</p>
            <div className="chibi-one">
                    <p> one </p>
            </div>
            <div className="chibi-two">
                <p> two </p>
            </div>
            <div className="chibi-three">
                <p> three </p>
            </div>
        </div>
        <div className="four">
            <div className="four-content">
            <p className="splash-four">Do we get to Frap yet?</p>
            <Link to='/fraptimes' className="splashlink">Let's Frap Out</Link>
                </div>
        </div>
        <div className="five">

        </div>
        <div className="six">

        </div>
    </>
    )
}

export default SplashPage;