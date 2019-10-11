# FrapWithFriends

Welcome! FrapWithFriends is based off of the meetup site TeaWithStrangers. It was built during my time at Full Stack Academy for my 10-day sprint: a project in which we create replicas of a project of our choosing. I chose this site because I thought it would be fun and interesting to add different functionalities to an already fully-developed site. <a href="https://frapwithfriends.herokuapp.com/#/">You can check out the site here</a>




<strong>Bug Log</strong>

These are just a few of the key bugs that I have managed to snag during my journey.

-When debugging a rollback go into rails console try the command that you think is breaking the code and append .errors.full_messages
-Use conditional rendering to deal with async

<i>heroku bugs</i>
<strong>IF REPLACING A FILE</strong>, must name it exactly the same name or else the way git tracks the file and the way heroku tracks the file will clash
-AKA splash1.png committed to git, replace the file with Splash1.png (a different photo) and then commit again, will cause clash with heroku
-Git doesn’t count changing file upper/lower casing as a change
-Don't forget to commit and repush to heroku before checking if your changes have applied!
-Keep separate terminal open while opening heroku to see live logs rather than looking at logs afterwards

<strong>Work In Progress</strong>
<ul>
  <li>Build out the user dashboard</li>
  <li>Delete functionality for hosted/joined events</li>
  <li>y u struggle?</li>
</ul>
