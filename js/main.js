// Get the current year
function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  // Update the year element
  function updateYearElement() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = getCurrentYear();
    }
  }

  // Initial update
  updateYearElement();

  // Update the year every second (you can adjust the interval)
  setInterval(updateYearElement, 1000);