// Get elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Open Sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

document.getElementById("categoryFilter").addEventListener("change", function() {
    const selectedCategory = this.value;
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(card => {
        // Check if the card's data-category matches the selected category
        if (selectedCategory === "" || card.getAttribute("data-category") === selectedCategory) {
            card.style.display = "block"; // Show matching cards
        } else {
            card.style.display = "none"; // Hide non-matching cards
        }
    });
});
function openModal(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("eventModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("eventModal").style.display = "none";
}