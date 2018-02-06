# test01
PROJECT IDEA

Drink Don’t Drive is a university project developed using p5.js library for the course Creative Coding, attended at Politecnico di Milano. 
The aim of this interactive app is to make sober people experience drunk driving to become aware of its risks, without underestimate them because of drunkenness. 
For our experience we selected three of the main effects caused by alcohol consumption: delayed reflexes, dizziness and sleepiness. As you increase blood alcohol concentration (BAC), you can experience gradually, in five steps, all these effects adding together.

INTERACTIONS

Our project is built to work on desktop. User can interact with the sketch only by pressing arrow keys. Up and down arrow keys set BAC, symbolized by the amount of drunk beers, while left and right arrow keys control car movements. The goal is to keep the car on track although it becomes harder step by step.
Using arrow keys allows you to experience also the physical effort of this challenge because with high blood alcohol level you have to press the keys repeatedly.

GRAPHIC STYLE

To draw our sketch we tried to find a middle ground between a realistic representation and a simplified one, so we chose to simulate the watercolour technique.
Since we decided to opt for a nocturnal setting, we focused on how to make lights look real.

MUSIC

The chosen song is a Royalty Free Music (link below):
https://soundcloud.com/free-cc-music/street-riot?in=free-cc-music/sets/rock-playlist

As the other parameters it is influenced by BAC variable. As it grows the music rate slows down and consequently the pitch becomes lower, increasing the overall sense of drunkenness.

USED LIBRARIES

To develop our project we used the following libraries:
p5.js
p5.dom.js
p5.sound.js

PROBLEMS AND SOLUTIONS

The main challenge of our project was having several effects working together, depending on a single variable (BAC).
The solution was to use a number of if statements for each set of variables with a common parameter.

Another difficult point was to give a realistic perception of speed and depth. To achieve that result we decided to reproduce the perspective, moving and scaling the trees on both sides of the road. Moreover clouds movement emphasizes the driving experience.

PROJECT DEVELOPERS

Simone Casartelli
Livia Fiume
Francesca Pavanel
