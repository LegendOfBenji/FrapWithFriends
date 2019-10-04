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
                    <img className="chibi-img" src={window.splash1} />
                <div className="three-body">    
                    <p className="chibi-header">It's cool.</p>
                    <p className="chibi-body">Everyone at tea time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
                </div>
            </div>

            <div className="chibi-two">
                <div className="three-body">
                    <p className="chibi-header">It's an opportunity to meet.</p>
                    <p className="chibi-body">In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity.</p>
                </div>
                    <img className="chibi-img" src={window.splash2} />
            </div>

                <div className="chibi-three">
                    <img className="chibi-img" src={window.splash3} />
                    <div className="three-body">
                        <p className="chibi-header">Make new friends!</p>
                        <p className="chibi-body">And friends make everything better! Real humans are so much cooler than their tweets or Instagram pictures. Frap time has real humans! #nofilter!</p>
                    </div>
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