// Set the current year and month
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const yearSelect = document.getElementById("year-select");
const monthSelect = document.getElementById("month-select");
const datesContainer = document.getElementById("dates");

// Event data storage (use localStorage to persist between sessions)
let events = JSON.parse(localStorage.getItem('events')) || {};

// Populate year and month dropdowns
function populateSelectors() {
  for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    if (year === currentYear) option.selected = true;
    yearSelect.appendChild(option);
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthNames.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = month;
    if (index === currentMonth) option.selected = true;
    monthSelect.appendChild(option);
  });
}

// Render calendar for selected month and year
function renderCalendar(year, month) {
  datesContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("date");
    datesContainer.appendChild(emptyDiv);
  }

  for (let date = 1; date <= daysInMonth; date++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = date;

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    if (events[dateStr]) {
      dateDiv.classList.add("event");
      dateDiv.onclick = () => showEventDetails(events[dateStr]);
    }

    datesContainer.appendChild(dateDiv);
  }
}

// Show event details in the popup
function showEventDetails(eventDetails) {
  const eventDateDisplay = new Date().toLocaleDateString();
  document.getElementById("eventDateDisplay").innerHTML =eventDateDisplay;
  document.getElementById("eventDetails").textContent = eventDetails;
  togglePopup();
}

// Toggle popup display
function togglePopup() {
  document.getElementById("eventPopup").classList.toggle("active");
}

// Toggle event form visibility
function toggleEventForm() {
  document.getElementById("eventForm").classList.toggle("active");
}

// Add a new event
function addEvent() {
  const eventDate = document.getElementById("eventDate").value;
  const eventTitle = document.getElementById("eventTitle").value;

  if (eventDate && eventTitle) {
    events[eventDate] = eventTitle;
    localStorage.setItem("events", JSON.stringify(events));
    
    renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
    toggleEventForm();
  } else {
    alert("Please enter both a date and event title.");
  }
}

// Event listeners for dropdown changes
yearSelect.addEventListener("change", () => {
  renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});
monthSelect.addEventListener("change", () => {
  renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});

// Initial setup
populateSelectors();
renderCalendar(currentYear, currentMonth);
