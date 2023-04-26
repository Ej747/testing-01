// Get references to the door status and control elements
const doorStatus = document.getElementById('door-status');
const doorUpBtn = document.getElementById('door-up');
const doorDownBtn = document.getElementById('door-down');

// Define a function to update the status of the door based on its current position
function updateDoorStatus(doorPosition) {
  let statusText;
  if (doorPosition === 'open') {
    statusText = 'Open';
  } else if (doorPosition === 'closed') {
    statusText = 'Closed';
  } else {
    statusText = 'Partially Open';
  }
  doorStatus.innerText = statusText;
}

// Define a function to handle the door up button click
function doorUpHandler() {
  // TODO: Add code to send a request to open the door
  updateDoorStatus('open');
}

// Define a function to handle the door down button click
function doorDownHandler() {
  // TODO: Add code to send a request to close the door
  updateDoorStatus('closed');
}

// Attach event listeners to the door up and down buttons
doorUpBtn.addEventListener('click', doorUpHandler);
doorDownBtn.addEventListener('click', doorDownHandler);
