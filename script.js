const gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById("clear");
const rainbowButton = document.getElementById("rainbow");
const greyButton = document.getElementById("greyscale");
const blackButton = document.getElementById("black");
const eraseButton = document.getElementById("erase");
const lineButton = document.getElementById("lines");

// Create first grid

function addDivs(numberOfDivs) {
  var i = 0;
  var newElement = [];
  var numberOfDivs = prompt ("Select grid size between 1 and 100", 16);

  for (i; i < numberOfDivs*numberOfDivs; i++) {
    newElement[i] = document.createElement('div');
    newElement[i].className = 'grid-segment';
    newElement[i].id = (i + 1);
    //newElement[i].textContent = 'this is div number: ' + (i + 1);
    //newElement[i].addEventListener("mouseover", changeColor);
    gridContainer.appendChild(newElement[i]);
    gridContainer.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
    //rainbowColor();
  }
}
addDivs();

// Add functions for buttons

function clearGrid() {
  let gridSegments = document.querySelectorAll('div.grid-segment');
  gridSegments.forEach(div => {
    gridContainer.removeChild(div);
  });
}


function rainbowColor() {
  let gridSegments = document.querySelectorAll('div.grid-segment');
  gridSegments.forEach(div => {
    div.addEventListener("mouseover", function(){
      div.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    })
  })
}

/*
function rainbowColor(e) {
  thisCell = e.target;
  thisCell.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
*/
function greyHex() {
    //bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
    let v = (Math.random()*(256)|0).toString(16);
    return "#" + v + v + v;
};

function greyColor() {
  let gridSegments = document.querySelectorAll('div.grid-segment');
  gridSegments.forEach(div => {
    div.addEventListener("mouseover", function(){
      div.style.backgroundColor = greyHex();
    })
  })
}

function blackColor() {
  let gridSegments = document.querySelectorAll('div.grid-segment');
  gridSegments.forEach(div => {
    div.addEventListener("mouseover", function(){
      div.style.backgroundColor = '#000';
    })
  })
}

function erase() {
  let gridSegments = document.querySelectorAll('div.grid-segment');
  gridSegments.forEach(div => {
    div.addEventListener("mouseover", function(){
      div.style.backgroundColor = '#fff';
    })
  })
}

function removeLines() {
  let gridSegments = document.querySelectorAll('div.grid-segment');
  gridSegments.forEach(div => {
    div.style.setProperty('border', 'initial');
  })
}

// Add event listeners to buttons

clearButton.addEventListener("click",() => {
  clearGrid();
  addDivs();
});

rainbowButton.addEventListener("click",() => {
  rainbowColor();
})

greyButton.addEventListener("click",() => {
  greyColor();
})

blackButton.addEventListener("click",() => {
  blackColor();
})

eraseButton.addEventListener("click",() => {
  erase();
})

lineButton.addEventListener("click",() => {
  removeLines();
});
