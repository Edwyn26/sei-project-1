

function init() {

  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const gerryClass = 'gerry'
  let gerryPosition = 94


  // * Make a grid
  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addGerry(startingPosition)
  }

  //* Add Gerry to the grid
  function addGerry(position) {
    cells[position].classList.add(gerryClass)
  }

  //* Remove Gerry from the grid
  function removeGerry(position) {
    cells[position].classList.remove(gerryClass)
  }


  createGrid(gerryPosition)
}

window.addEventListener('DOMContentLoaded', init)
