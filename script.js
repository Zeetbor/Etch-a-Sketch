function addDiv(numberOfDivs) {
  var i = 0;
  var newElement = [];
  var gridContainer = document.getElementById('grid-container');
  var numberOfDivs = prompt ("Select grid size", 16);

  for (i; i < numberOfDivs*numberOfDivs; i++) {
    newElement[i] = document.createElement('div');
    newElement[i].className = 'grid-segment';
    newElement[i].textContent = 'this is div number: ' + (i + 1);
    newElement[i].id = (i + 1);
    newElement[i].addEventListener("mouseover", changeColor);
    gridContainer.appendChild(newElement[i]);
    gridContainer.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;

    function changeColor(e) {
      thisCell = e.target;
      thisCell.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
}
addDiv();

/*
function reset() {
  const.getElementById("reset");
  reset.addEventListener("click", resetGrid)
}
*/
