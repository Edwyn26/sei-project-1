# Project 1: World War Z Space Invaders
### Overview

A classic '70s aracade game brought to life on the web, encompassed in the theme of World War Z. You, who plays the main character, Gerry Lane, will need to protect and defend humanity (in 20 seconds!), from the infected zombies for the survival of mankind. After 3 weeks of learning HTML, CSS and JavaScript, I was tasked to implement a grid-based game in the space of a week.

## Deployment
The game is hosted with GitHub Pages and is available [here](https://edwyn26.github.io/sei-project-1/)

## Technologies

* HTML5
* CSS3
* JavaScript (ES6)
* GitHub

## Process

I began the process by creating a plan out on paper of all the functionality the game will need to have. After which I created the grid to display the game on in JavaScript. 

* I created a function below that allows the player to move within the boundary of the grid and refrain from moving up or down.
* The player movement was delivered by a key up event listener, in a series of switch statements, to move with the left and right arrow keys, along with a space bar to fire. 

```javascript
// PLAYER MOVEMENT LOGIC -----------------------------------------

 function handleKeyUp(event) {
    removeGerry(gerryPosition)
    const horizontalPosition = gerryPosition % width 
    switch (event.keyCode) {
      case 39: //arrow right
        if (horizontalPosition < width - 1) gerryPosition++ 
        break
      case 37: //arrow left
        if (horizontalPosition > 0) gerryPosition-- 
        break
      case 32:
        gerryFiringWeapon()
        break
      default:
        console.log('INVALID KEY')
    }
    addGerry(gerryPosition)
  }
```
* After creating the player functionality, the zombie invader movement was made with a timer and cleared the zombies when time was up.

```javascript
// ZOMBIE INVADER MOVEMENT LOGIC ---------------------------------

     if (zombieMovingRight) {
        moveZombiesRight()
      } else {
        moveZombiesLeft()
      }
      numOfMoves++
      if (numOfMoves === 2) {
        numOfMoves = 0
        zombieMovingRight = !zombieMovingRight
        moveZombiesDown()
      }
      if (zombiePosition === 40) {
        removeZombies()
        clearInterval(timerID)
        clearInterval(countdownTimerID)
      }
```

## Challenges
* The main challenge was developing the invaders to move across and down the grid. I had many issues with the zombies not moving as accord but the time it took in this phase to reach the MVP stage proved to be worth it and the challenge was an obstacle that I overcame.

## Key Learnings
* The main challenge I found myself in was, as it was my first project I felt an immense pressure on delivering the project on time. However, by breaking the steps down to develop the functionality of the game proved to be an effective method to building and managing my time of the game. This kept any worries I had at ease and successfully completed the project myself, despite learning JavaScript, HTML and CSS in three weeks. The experience taught me that I can trust my abilities to learn to deliver on my code despite any normal worries at the start of a project.
* Also, I enjoyed the styling portion of the game and boosted my self abilities by packaging the game in a simple yet stylish product.

## Future Features
* I would like to add the zombie invaders to fire back at the player and maybe introduce some blockers to emmulate the classic space invaders game.
* Also, adding the feature of separate pages such as a start and score page when the game is finished will add a personal touch for the user experience.
* Lastly, a feature for the user to choose what difficulty level they would like play on will be a nice touch too.