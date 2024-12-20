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