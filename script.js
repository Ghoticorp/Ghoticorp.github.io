

// function for hiding all the days when the page loads from w3 schools and assist from github copilot
function hideAllDays() {
  const days = document.querySelectorAll('.tabcontent');

  for (var i = 0; i < days.length; i++) {
    days[i].style.display = 'none';
  }
}
// help from w3schools, mozilla and github copilot
// calling the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  hideAllDays();
});

// function for opening the specific day when the user clicks on the tab from w3 schools and assist from github copilot and chatgpt explained the code to me well
function openDay(evt, weekDay) {
  var i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  // removing the active class from all the tabs
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // displaying the specific day and adding the active class to the tab
  document.getElementById(weekDay).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function redirectToWiki(url) {
  window.open(url, '_blank');
}

// help from w3schools and github copilot