# Interactive Frontened Development Milestone Project - Jakub´s Memory Game.

I´ve been required by Code Institute to create a project in order to test my Javascript knowledge and skills.
For this project, I have used three programs: Html, Css and Javascript. The purpose of this site is to apply all the learnt Javascript competences
 to create a game where all these will be shown.

## UX :
This game is aimed for everyone who likes to warm up before hard brain work and/or people who just like challenging their memorizing skills.
Basically, it is for everyone who enjoys online games.

1. As a creator I want:
* To create a simple navigation through the game or to the contact section.
* To create a game where players can have fun.
* A contact page with an option to be contacted via e-mail.
* To provide a simple description of what the game is like and how it works.

2. As a user I want to :
* Know what the game is about and what rules there are.
* Be able to navigate through the site easily.
* Be able to contact the creator.
* To have fun with the game.
* To be able to restart the game if I want to play again.
* I want to be able to find the creator's profile on Github.

## This webside consists of three sections:
1. index.html - is a menu section where you cand find a simple description of the game and other content.

2. Game Page - This is where the game will be found.

3. Contact Page - Here there is an option to contact me. I will respond to any received e-mails.
### Wireframe, Mockup
1. Mockup https://wireframe.cc/pro/pp/f29e8e8b3414265
2. Wireframe sketch  https://github.com/Jakub1994/MyJSMilestoneProject/blob/master/Sketch/draw.jpg?raw=true

# Features 
## Existing Features:
* A memory game to play online on this site.
* A "restart board" option to start once again when all cards are  matched.
* A script has been written to avoid double clicking bugs
* If cards are matched, the pair will be locked until the game is reseted.
* A contact section that allows the user to contact the creator.
* About - This is where the game is described.
## Features Left to Improve and add to the page:
* A timer, to start a countdown when the user starts playing and show the time left in every moment.
* A game score, to show the player the points gained.
* A number of moves counter, to show the player the number of times he/she flipped a pair of cards.
* Best scores, showing a list with the 10 highest scores, including other players' scores
# Technologies used:
1. Programs:
- HTML - Program used to create the base of the project
- CSS - Used to design the whole project.
- Javascript - Really powerfull code language used to code the game itself and the contact section.
2. Library:
- Bootstrap - The Css Library used to modify the project in order to design the mobile, tablet and laptop versions.
- Google fonts - Font library.
3. Coding Platforms:
- Gitpod - used to code, test and write the UX.
- Visual Studio Code - Platform used for the project's code.
4. Coding library:
- Github - Used to store the project.
5.Websites:
- https://www.emailjs.com/ -Used to send the e-mails written on the site to my personal e-mail.

# Testing:
## Navigation 
1. From menu page to game (Start Game) and from game to menu works
2. From menu to Contact Page and from Contact to menu works
3. From menu to Github works
## Game:
I tested game by plaing it many times.
Functions are working and game is fully playable.

### Testing Game Functions:
1. Card flip - Tested by clicking on a card and the card flipped over.
2. Matching - when clicking two cards that match, they stay flipped and locked until the board restarts.
3. Not a match - if both clicked cards are different, they flip back and the game continues.
4. Restart - when the game is finished, the player will be prompted to restart it by pressing "ok"
 
## Contact section:
The whole section works correctly, an e-mail message will be sent if the user fills every field.
1. Username: it is the text type field where the user has to write his/her name.
2. Email: it is the e-mail type field where the user has to write his/her e-mail address.
3. Phone: its the text type field for the user to insert his/her phone number.
4. Message: this field is for the user to type the message he/she wants the creator to receive.
5. A confirmation text will show up when the message is sent.
 Once these steps are completed, the user can select the "Go Back" navigator.

#Bugs:
1. The worst bug I usually find in my projects, is when I try to separate the CSS, HTML and Javascript files.
If I do this, either CSS or JS files, do not work.

# Code Validators:
1. https://validator.w3.org/#validate_by_input - HTML validator:
* index.html
- no errors
- 1 warning 
* Contact Page
- no errors
- 2 warnings
* Game Page
- No errors nor warnings
2. https://jigsaw.w3.org/css-validator/#validate_by_input - Css validator:
- no errors
- it detected 7 Warnings.
3.
![lighthouse screenshot](https://github.com/Jakub1994/MyJSMilestoneProject/blob/master/screenshot/lighthouse%20performance.png?raw=true)


4.https://jshint.com/ - JS Validator:
* game.js - one warning.
* email.js - one undefined variable

# Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The live site updates itself automatically everytime there is a new push to the repository.
 You can git clone the code to run it locally on your machine.
 
Most of the coding was done in Visual Studio Code and deployed manually form my laptop to github.
1. I opened github .
2. I created my milestone repository.
3. I opened my milestone repository folder.
4. I clicked on the "add file" button, and sleected "update file" on the left side of the gitpod button).
5. After that, I was prompted to add a file so I opened the folder with all the files.
6. To finalize, I clicked on "commit" to save everything.
# Credits:
1. https://www.iconfinder.com/ - The icons in the game were imported from here.
2. https://www.emailjs.com/ - Used in the contact section to enable sending e-mails.
3. https://www.w3schools.com/ - Used as an advice resource.
4. https://courses.codeinstitute.net/program/FullstackWebDeveloper 
5. https://www.youtube.com/watch?v=c_ohDPWmsM0 - this project was based on this JS code.

# Thanks 
I really want to thank to whole team from Code Institute for their constant support and periodic checks on my performance, and besides, for the huge amount of resources and useful material provided, which made this project possible.
