window.addEventListener('DOMContentLoaded', function () {
    const joinedClubsList = document.getElementById('joined-clubs-list');
    
    // Function to render the list of joined clubs
    function renderJoinedClubs() {
        // Retrieve the list of joined clubs from session storage
        const joinedClubs = JSON.parse(sessionStorage.getItem('joinedClubs')) || [];

        // Display the clubs or a placeholder message if no clubs have been joined
        if (joinedClubs.length === 0) {
            joinedClubsList.innerHTML = '<li>No clubs joined yet.</li>';
        } else {
            joinedClubsList.innerHTML = joinedClubs
                .map(
                    club => `
                        <li>
                            ${club} 
                            <button class="remove-club-btn" data-club="${club}">Remove</button>
                        </li>
                    `
                )
                .join('');
        }
// Get elements


// Wait for the DOM to fully load


        // Add event listeners to "Remove" buttons
        document.querySelectorAll('.remove-club-btn').forEach(button => {
            button.addEventListener('click', function () {
                const clubToRemove = this.getAttribute('data-club');
                removeClub(clubToRemove);
            });
        });
    }


    // Function to remove a club
    function removeClub(clubToRemove) {
        let joinedClubs = JSON.parse(sessionStorage.getItem('joinedClubs')) || [];
        joinedClubs = joinedClubs.filter(club => club !== clubToRemove);
        sessionStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
        renderJoinedClubs(); // Re-render the updated list
    }

    // Initial render
    renderJoinedClubs();
});

const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep() {
  // Hide all steps
  steps.forEach(step => step.classList.remove('active'));

  // Show the current step
  steps[currentStep].classList.add('active');

  // Move to the next step, loop if at the end
  currentStep = (currentStep + 1) % steps.length;
}

// Show the first step initially
showStep();

// Loop through steps every 3 seconds
setInterval(showStep, 3000);

//blockquotes
document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const navDots = document.querySelectorAll('.nav-dot');
  const testimonialCount = testimonials.length;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove('active');
          navDots[i].classList.remove('active');
      });
      testimonials[index].classList.add('active');
      navDots[index].classList.add('active');
  }

  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonialCount;
      showTestimonial(currentIndex);
  }

  // Auto-rotate every 5 seconds
  let autoRotate = setInterval(nextTestimonial, 5000);

  // Manual switching with dots
  navDots.forEach(dot => {
      dot.addEventListener('click', function() {
          clearInterval(autoRotate); // Stop auto-rotation when user interacts
          currentIndex = parseInt(this.getAttribute('data-index'));
          showTestimonial(currentIndex);

          // Restart auto-rotation after manual interaction
          autoRotate = setInterval(nextTestimonial, 5000);
      });
  });
});


// Script to toggle completed tasks
document.querySelectorAll('.event-tasks input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const task = this.parentNode;
        if (this.checked) {
            task.style.textDecoration = 'line-through';
            task.style.color = '#888';
        } else {
            task.style.textDecoration = 'none';
            task.style.color = '#333';
        }
    });
});
{/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> */}
// Chart.js example: Event Activity Chart
const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with dynamic data if available
        datasets: [
            {
                label: 'Events Attended',
                data: [3, 5, 2, 8, 6], // Example data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});



  