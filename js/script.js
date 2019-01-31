// MENU NAVIGATION

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});


// CHART

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            hidden: true,
        }]
    },
});

// MODALS

function closeModal() {
  document.getElementById('overlay').classList.remove('showModal')
};

//closing modal by click on the x or OK button
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

//closing modal by click on overlay
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
 }
})

//closing modal by enter ESC key
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})
//opening the modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('showModal')
  })
  document.querySelector('#overlay').classList.add('showModal')
  document.querySelector(modal).classList.add('showModal')
}

var quit = document.getElementById('quit');
quit.addEventListener('click', function(e) {
    e.preventDefault()
    openModal('#modalQuit')
 });

