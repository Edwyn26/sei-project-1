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

```javascript
      // PLAYER MOVEMENT LOGIC ---------------------------------

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


## Key Learnings


## Future Features
