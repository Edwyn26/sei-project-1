

function init() {

  // * Variables

  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const gerryClass = 'gerry'
  let gerryPosition = 94

  const zombieClass = 'zombie'
  const zombies = [1, 2, 3, 5, 6, 7, 11, 12, 13, 15, 16, 17, 21, 22, 23, 25, 26, 27, 31, 32, 33, 35, 36, 37]

  let weaponFired = gerryPosition - width


  // * Make a grid
  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
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
        if (zombies[i] >= 68) {
          clearInterval(zombieMoveInterval)
        }
      }
    }, 2000)
  }

// * Weapon functions

  function addBullet() {
    cells[weaponFired].classList.add('gerryGunBullet')
  }
  
  function removeBullet() {
    cells[weaponFired].classList.remove('gerryGunBullet')
  }

  function moveBullet() {
    removeBullet()
    weaponFired
    addBullet()
  }




  // * Event listeners
  document.addEventListener('keyup', handleKeyUp)


  createGrid(gerryPosition)
}

window.addEventListener('DOMContentLoaded', init)
