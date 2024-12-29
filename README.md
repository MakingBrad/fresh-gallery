## Brads notes on the application
** Notes on the application
Brad wanted to build an 'react gallery' that is 'fresh' so he can use it in a future application (hopefully).
The homework was too 'pre-baked' for brad - so he is going to do it the hard way.

TASK: GO ONLINE AND LOOK AT HOW TO CREATE A MARKDOWN DOCUMENT!
``
**general notes from Abrahams tutorial
1- Start in VS code
2- Push up later
3- Use standard set up with command:
	npx create-react-app fresh-gallery
4- delete node modluels

to push to github:
1- Initialize the git repo in the code
	by using - git init
2- make sure you package all the file I have and push them
thru the github pipeline by using - git add .
3- give a description about the project I have spun up - use the command - git commit -m "text to describe"
{command plus makes text larger}
**this sets up my code on my machine so it will migrate up
to github

then - we create a folder in github for this code to reside

then - we set up the connection between my local code and the folder on github

first we copy the line we need from github - it will look something like this:
git remote add origin git@github.com:MakingBrad/fresh-gallery.git

then we paste this into the command line (while I am in the proper directory)

then we need to create a branch as the main branch by copying this from github:
git branch -M main

then check the status - with "git status" it should say 'on branch main'
then we push what we have (which isn't much at all) with the standard: git push origin main
``