document.querySelectorAll('.join-club-btn').forEach(button => {
    button.addEventListener('click', function () {
        const clubName = this.getAttribute('data-club');
        let joinedClubs = JSON.parse(sessionStorage.getItem('joinedClubs')) || [];

        if (!joinedClubs.includes(clubName)) {
            // Add the club to session storage
            joinedClubs.push(clubName);
            sessionStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
            
            // Change button text to "Joined" and disable the button
            this.textContent = "Joined";
            this.disabled = true;
            this.classList.add('joined'); // Optional: Add a class for styling the "Joined" state
        }
    });
});

// Initialize buttons based on session storage
window.addEventListener('DOMContentLoaded', function () {
    const joinedClubs = JSON.parse(sessionStorage.getItem('joinedClubs')) || [];
    
    document.querySelectorAll('.join-club-btn').forEach(button => {
        const clubName = button.getAttribute('data-club');
        if (joinedClubs.includes(clubName)) {
            button.textContent = "Joined";
            button.disabled = true;
            button.classList.add('joined'); // Optional: Add a class for styling
        }
    });
});
