

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
  let zombiePosition = 0
  let zombies = [1, 2, 3, 5, 6, 7, 11, 12, 13, 15, 16, 17, 21, 22, 23, 25, 26, 27, 31, 32, 33, 35, 36, 37]
  

  let weaponFiredPosition = gerryPosition - width
  let bulletAvailable = true

  let timerID = null
  let numOfMoves = 0

  let timer
  //let playing = false
  //let alienArray = zombies.slice()

  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    //addGerry()
    //addZombies()
    //moveZombies()
    
  }
  createGrid()

  //* Add Gerry to the grid
  function addGerry() {
    cells[gerryPosition].classList.add(gerryClass)
  }
  addGerry()

  //* Remove Gerry from the grid
  function removeGerry() {
    cells[gerryPosition].classList.remove(gerryClass)
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
      cells[zombiePosition + invader].classList.add(zombieClass))
  }
  addZombies()
  
  function removeZombies() {
    zombies.forEach(invader => 
      cells[zombiePosition + invader].classList.remove(zombieClass))
  }
  //removeZombies()
  
  function moveZombiesRight() {
    removeZombies()
    zombiePosition = zombiePosition + 1
    // for (let i = 0; i < zombies.length; i++) {
    //   zombies[i] += 1
    // }
    addZombies()
  }

  function moveZombiesLeft() {
    removeZombies()
    zombiePosition = zombiePosition - 1
    // for (let i = 0; i < zombies.length; i++) {
    //   zombies[i] -= 1
    // }
    addZombies()
  }

  function moveZombiesDown() {
    removeZombies()
    zombiePosition = zombiePosition + 10
    // for (let i = 0; i < zombies.length; i++) {
    //   zombies[i] += 10
    // }
    addZombies()
  }

  function moveZombies(countdownTimerID) {
    countdownTimer()
    let zombieMovingRight = true
    timerID = setInterval(() => {
      console.log('this timer is running')
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
      //for (let i = 0; i < zombies.length; i++) {
      console.log(zombiePosition)
      if (zombiePosition === 40) {
        console.log('hello')
        removeZombies()
        clearInterval(timerID)
        clearInterval(countdownTimerID)
      }
      // }
    }, 2000)
    // timerID = setInterval(() => {
    //   setTimeout(() => {
    //     moveZombiesRight()
    //   }, 1500)
    //   setTimeout(() => {
    //     moveZombiesDown()
    //   }, 2000)
    //   setTimeout(() => {
    //     moveZombiesLeft()
    //   }, 2500)
    //   //for (let i = 0; i < zombies.length; i++) {
    //   if (zombiePosition === 24) {
    //     removeZombies()
    //     clearInterval(timerID)
    //     clearInterval(countdownTimerID)
    //     //removeZombies()
    //   }
    //   // }
    // }, 1000)
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
      console.log(bulletTimerID)
      console.log(moveBulletUpwards)
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
    }, 25)
  }

  // let bulletPos = gerryPosition

  // const bulletId = setInterval(() => {

  //   if (!playing) {
  //     clearInterval(bulletId)
  //   }
      
  //   if (bulletPos - width >= 0) {
  //cells[bulletPos].classList.remove('gerryGunBullet')

  //   bulletPos -= width
  //   cells[bulletPos].classList.add('gerryGunBullet')
  // } else {
  //   cells[bulletPos].classList.remove('gerryGunBullet')
  // }

  // if (cells[bulletPos].classList.contains('zombie')) {
  //   clearInterval(bulletId)
  //   cells[bulletPos].classList.remove('gerryGunBullet')
        
  //   const alienPos = alienArray.indexOf(bulletPos)
  //   alienArray.splice(alienPos, 1)
  //   cells[bulletPos].classList.remove('zombie')
  // }

  // if (alienArray.length === 0) {
  //clearInterval(moveAliensId)
  // clearInterval(dropBombsId)
  // clearInterval(bulletId)
  // win()
  // })




  //* Timer 

  function countdownTimer() {
    let countdownTimerID = null
    let count = 31
    countdownTimerID = setInterval(() => {
      count --
      if (count <= 0) {
        clearInterval(countdownTimerID)
      } else {
        timeRemaining.innerHTML = count
      }  
    }, 500)
    
  }




  //*  Start button
  function handleStartButton() {
    // timer = setInterval(() => {
    console.log('happend')
    startButton.blur()
    moveZombies()
    // }, 1000)
  }






  // * Event listeners
  document.addEventListener('keyup', handleKeyUp)
  
  startButton.addEventListener('click', handleStartButton)
  

  //createGrid(gerryPosition)
}

window.addEventListener('DOMContentLoaded', init)
