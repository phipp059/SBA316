// Cache DOM elements
const subscribeForm = document.getElementById('subscribeForm');
const subscribeMessage = document.getElementById('subscribeMessage');
const teamsList = document.querySelector('#teams');
const addTeamButton = document.querySelector('#addTeamButton');
const updateGameButton = document.getElementById('updateGameButton');
const upcomingGame = document.getElementById('upcomingGame');

// Event listener for form submission with HTML and DOM validation
subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!email.includes('@')) {  // Simple DOM validation
        alert('Please enter a valid email.');
        return;
    }

    // Modify text content on successful submission
    subscribeMessage.textContent = `Thank you for subscribing, ${name}!`;
});

// Add a new team to the list using createElement, appendChild, and DocumentFragment
addTeamButton.addEventListener('click', function () {
    const newTeam = document.createElement('li');
    newTeam.classList.add('team');
    newTeam.textContent = 'Dallas Cowboys';

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newTeam);

    teamsList.appendChild(fragment);
});

// Event listener for changing the game information
updateGameButton.addEventListener('click', function () {
    upcomingGame.innerHTML = 'New York Giants vs Philadelphia Eagles - Monday';
    upcomingGame.style.color = 'red';  // Modify style
});

// Iterate over teams and add click event listener
const teamItems = document.querySelectorAll('.team');
teamItems.forEach(function (team) {
    team.addEventListener('click', function () {
        alert(`You clicked on ${this.textContent}`);
    });
});

// Use BOM properties: window.alert and window.location
window.onload = function () {
    alert('Welcome to the American Football Fan Page!');
};

window.setTimeout(function () {
    console.log('This message is displayed after 5 seconds.');
}, 5000);
