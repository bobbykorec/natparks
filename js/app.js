/************ 

JQUERY 

*************/

// Modal functionality
var $modal = $('.modal');
var $natPark = $('.nat-park');
var $closeBtn = $('.closeBtn');
   
$natPark.on('click', function(){
  $(this).find($modal).addClass('show-modal');    
});

$closeBtn.on('click', function(e){
  e.stopPropagation();
  $(this).parent().parent().removeClass('show-modal');
});

/************ 

VANILLA JS 

*************/
const footerNav = document.querySelector('.footer-wrapper');
const footerBtn = document.querySelector('.footer-primary');
const footerExitStats = document.querySelector('.exit-stats');
const tooltip = document.querySelector('.tooltip');
const seeResultsBtn = document.querySelector('.see-results');
const resultsModal = document.querySelector('.results-modal-wrapper');
const closeResultsModal = document.querySelector('.results-modal-close');
const navbarInput = document.querySelector('#navbar-input');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const natParkTotal = document.querySelector('.nat-park-total');
const resultsText = document.querySelector('.results-text');
const resultsAwards = [
  'Beginner Explorer', 
  'Toe-Dipping Adventurist', 
  'Intermediate Trekker', 
  'Fierce Adventurer', 
  'Bad Ass Pathfinder', 
  'Raging Pioneer', 
  'Ultimate Trailblazer'
];

// Checkboxes
natParkTotal.textContent = '0';
let count = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (checkbox.checked) {
      natParkTotal.textContent = count + 1;
      count = count + 1;
    }  
    if (!checkbox.checked) {
      natParkTotal.textContent = count - 1;
      count = count - 1;
    }
    if (count <= 63) {
    resultsText.innerHTML = resultsAwards[6];
    }
    if (count <= 57) {
    resultsText.innerHTML = resultsAwards[5];
    }
    if (count <= 40) {
    resultsText.innerHTML = resultsAwards[4];
    }
    if (count <= 30) {
    resultsText.innerHTML = resultsAwards[3];
    }
    if (count <= 18) {
    resultsText.innerHTML = resultsAwards[2];
    }
    if (count <= 8) {
    resultsText.innerHTML = resultsAwards[1];
    }
    if (count <= 3) {
    resultsText.innerHTML = resultsAwards[0];
    }
  })  
})

// Footer stats functionality
footerBtn.addEventListener('click', () => {
  tooltip.classList.add('show-tooltip');
  footerNav.classList.add('show-stats');
  checkboxes.forEach((checkbox) => {
    checkbox.classList.add('show-checkboxes');
  })
 })

footerExitStats.addEventListener('click', () => {
  tooltip.classList.remove('show-tooltip');
  footerNav.classList.remove('show-stats');
  checkboxes.forEach((checkbox) => {
    checkbox.classList.remove('show-checkboxes');
  })
})

// Show nat park results on click
seeResultsBtn.addEventListener('click', () => {
  resultsModal.classList.add('show-results-modal');
})

closeResultsModal.addEventListener('click', () => {
  resultsModal.classList.remove('show-results-modal');
})

// Navbar search function
navbarInput.addEventListener('keyup', () => {
  //let input = document.getElementById('navbar-input');
  let filter = navbarInput.value.toUpperCase();
  let ul = document.getElementById('national-parks-list');
  let li = ul.getElementsByTagName('li');

  // Loop through all nat parks and hide those who don't match the search query
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    let txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
      window.scrollTo(0, 0);
    } else {
      li[i].style.display = 'none';
    }
  }
});