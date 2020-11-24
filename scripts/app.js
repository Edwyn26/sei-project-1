

function init() {

  // * Variables

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#start')
  const scoreDisplay = document.querySelector('#score-display')
  const timeRemaining = document.querySelector('#time-remaining')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  let score = 0

  const gerryClass = 'gerry'
  let gerryPosition = 94

  const zombieClass = 'zombie'
  let zombies = [1, 2, 3, 5, 6, 7, 11, 12, 13, 15, 16, 17, 21, 22, 23, 25, 26, 27, 31, 32, 33, 35, 36, 37]
  

  let weaponFiredPosition = gerryPosition - width
  let bulletAvailable = true

  let timerID = null



  // * Make a grid
  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      //cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addGerry(startingPosition)
    addZombies(startingPosition)
    moveZombies()
    
  }

  //* Add Gerry to the grid
  function addGerry(position) {
    cells[position].classList.add(gerryClass)
  }

  //* Remove Gerry from the grid
  function removeGerry(position) {
    cells[position].classList.remove(gerryClass)
  }

  // * Move Gerry
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

  //* Add zombies

  function addZombies() {
    zombies.forEach(invader => 
      cells[invader].classList.add(zombieClass))
  }
  //addZombies()
  
  function removeZombies() {
    zombies.forEach(invader => 
      cells[invader].classList.remove(zombieClass))
  }
  
  function moveZombiesRight() {
    removeZombies()
    for (let i = 0; i < zombies.length; i++) {
      zombies[i] += 1
    }
    addZombies()
  }

  function moveZombiesLeft() {
    removeZombies()
    for (let i = 0; i < zombies.length; i++) {
      zombies[i] -= 1
    }
    addZombies()
  }

  function moveZombiesDown() {
    removeZombies()
    for (let i = 0; i < zombies.length; i++) {
      zombies[i] += 10
    }
    addZombies()
  }

  function moveZombies() {
    countdownTimer()
    const zombieMoveInterval = setInterval(() => {
      setTimeout(() => {
        moveZombiesRight()
      }, 1500)
      setTimeout(() => {
        moveZombiesDown()
      }, 2000)
      setTimeout(() => {
        moveZombiesLeft()
      }, 2500)
      for (let i = 0; i < zombies.length; i++) {
        if (zombies[i] >= 60) {
          clearInterval(zombieMoveInterval)
        }
      }
    }, 2000)
  }




  // * Weapon functions

  function addBullet() {
    cells[weaponFiredPosition].classList.add('gerryGunBullet')
  }
  
  function removeBullet() {
    cells[weaponFiredPosition].classList.remove('gerryGunBullet')
  }

  function moveBullet() {
    removeBullet()
    weaponFiredPosition = weaponFiredPosition - width
    addBullet()
  }

  function gerryFiringWeapon() {

    if (!bulletAvailable) {
      return 
    }
    bulletAvailable = false
    weaponFiredPosition = gerryPosition - width
    const moveBulletUpwards = true
    const bulletTimerID = setInterval(() => {
      removeBullet()
      if (moveBulletUpwards) {
        moveBullet()
      } else {
        removeBullet()
      }

      if (cells[weaponFiredPosition].classList.contains('zombie')) {
        clearInterval(bulletTimerID)
        bulletAvailable = true
        cells[weaponFiredPosition].classList.remove('zombie')
        zombies = zombies.filter(zombie => {
          return zombie !== weaponFiredPosition
        })
        removeBullet()
        score += 1000
        scoreDisplay.innerHTML = score
      } else if (weaponFiredPosition < width) {
        clearInterval(bulletTimerID)
        bulletAvailable = true 
        removeBullet()
      }
    }, 50)
  }


  //* Timer 

  function countdownTimer() {
    let countdownTimerID = null
    let count = 21
    countdownTimerID = setInterval(() => {
      count --
      if (count < 0) {
        clearInterval(countdownTimerID)
      } else {
        timeRemaining.innerHTML = count
      }  
    }, 1000)
    
  }




  //*  Start button
  // function handleStartButton() {
  //   
  // }






  // * Event listeners
  document.addEventListener('keyup', handleKeyUp)
  
  startButton.addEventListener('click', moveZombies)
  

  createGrid(gerryPosition)
}

window.addEventListener('DOMContentLoaded', init)
