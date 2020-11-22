

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
  



  // * Event listeners
  document.addEventListener('keyup', handleKeyUp)


  createGrid(gerryPosition)
}

window.addEventListener('DOMContentLoaded', init)
