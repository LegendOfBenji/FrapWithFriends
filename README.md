# FrapWithFriends

<img width=100% height= 700px src="https://frapwithfriends1-seeds.s3.amazonaws.com/Screen+Shot+2019-10-11+at+9.53.09+AM.png" />

Welcome! FrapWithFriends is based off of the meetup site TeaWithStrangers. It was built during my time at Full Stack Academy for my 10-day sprint: a project in which we create replicas of a project of our choosing. I chose this site because I thought it would be fun and interesting to add different functionalities to an already fully-developed site. <a href="https://frapwithfriends.herokuapp.com/#/">You can check out the site here</a>

<img width=100% height=700px src="https://frapwithfriends1-seeds.s3.amazonaws.com/Screen+Shot+2019-10-11+at+11.45.44+AM.png" />

<strong>Technologies/libraries used</strong>

The site was built using react/redux, rails, postgresql, all built from scratch.
Outside technologies used were Google Maps Javascript - Places - Autocomplete, React Calendar, and AWS S3

<strong>Features</strong>
<ul>
  <li>Users are able to login/signup/demo the website</li>  
  <li>Events are shown based off of four different locations with infowindows showing each user's information</li>
  <li>From the infowindow, a clickable button allows users to go to that specific event displaying host information</li>
  <li>Users are able to use an autocomplete search based off of the four specified cities, each city has its own autosearch boundaries and zoom features.</li>
</ul>

<strong>Bug Log</strong>

These are just a few of the key bugs that I have managed to snag during my journey.

-When debugging a rollback go into rails console try the command that you think is breaking the code and append .errors.full_messages \n
-Use conditional rendering to deal with async

<strong>heroku bugs</strong>

<p>-<u>IF REPLACING A FILE</u>, must name it exactly the same name or else the way git tracks the file and the way heroku tracks the file will clash</p>
<p>-AKA splash1.png committed to git, replace the file with Splash1.png (a different photo) and then commit again, will cause clash with heroku</p>
<p>-Git doesn’t count changing file upper/lower casing as a change</p>
<p>-Don't forget to commit and repush to heroku before checking if your changes have applied!</p>
<p>-Keep separate terminal open while opening heroku to see live logs rather than looking at logs afterwards</p>

<strong>Work In Progress</strong>
<ul>
  <li>Build out the user dashboard</li>
  <li>Delete functionality for hosted/joined events</li>
  <li>y u struggle?</li>
</ul>
