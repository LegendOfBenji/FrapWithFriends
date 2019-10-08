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
                <p className="two-header">Show up for Frap time</p>
                <p className="two-body">You and a few others join a host at a cafe.</p> 
            </div>
            <div className="two-two">
                <p className="two-header">Have a real conversation</p>
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
                    <p className="chibi-body">Everyone at frap time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
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
                    <Link to='/fraptimes' className="splashlink">Let's Frap out</Link>
                </div>
            </div> 

            <div className="five">
                <div className="five-quotes">
                    <p>”I met people who I continue to be in touch with almost a year later, and people who I shared delightful conversations with that day but no more. Both are their own kind of fun.” <span className="quote">Jojo, NYC</span></p>
                    <p>”I’m not the type of person who talks to strangers. This doesn’t mean I don’t want to. Frap With Friends just makes it easier because you know everyone there wants it too.” <span className="quote">Kiki, SF</span></p>
                </div>
                <div className="five-first-pic">
                    <img src={window.splash4} />
                </div>
                <p className="splash-three">There's no such thing as too many friends.</p>
                <div className="final-pic">
                    <img src={window.splash5} />
                    <div className="final-text">
                        <p>You're always surrounded by potential friends, so long as you are willing to try. You know your story. Your embarrassments. Your joy. Your idiocyncrasies — the thing that make you, you. But they don't.</p>
                        <p>And everyone has these — whether or not we know what they are. Everyone around you is a person, loaded with stories that you can't even begin to fathom. They're different from yours, but the fact that we all have them is what brings us together.</p>
                        <p>In a friend's story, we might discover parts of our own. And in seeing where a friend is coming from, we might realize they're actually not so rare. But we don't discover much just by thinking about it. So let's find out.</p>
                </div>
                </div>
                    

            </div>
            <div className="four">
                <div className="four-content">
                    <p className="splash-four">Are you ready to make some friends?</p>
                    <Link to='/fraptimes' className="splashlink">YES</Link>
                </div>
            </div>
        
    </>
    )
}

export default SplashPage;