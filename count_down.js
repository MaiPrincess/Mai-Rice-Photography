// Array of event dates (relative to each year)
const eventDates = [
    "03-01T23:59:59",
    "07-04T12:00:00",
    "09-27T23:59:59"
];

// Function to get the next event date for the current year
function getNextEventDate() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Try to find the next event date
    for (let date of eventDates) {
        const [month, dayTime] = date.split('T');
        const [monthIndex, day] = month.split('-');
        const [hours, minutes, seconds] = dayTime.split(':');
        
        // Construct event date
        const eventDate = new Date(`${currentYear}-${monthIndex}-${day}T${hours}:${minutes}:${seconds}`);
        
        if (eventDate > now) {
            return eventDate;
        }
    }
    
    // If no future event, return the first event date of the next year
    const firstEventDate = eventDates[0];
    const [month, dayTime] = firstEventDate.split('T');
    const [monthIndex, day] = month.split('-');
    const [hours, minutes, seconds] = dayTime.split(':');
    
    return new Date(`${currentYear + 1}-${monthIndex}-${day}T${hours}:${minutes}:${seconds}`);
}

// Function to format date for display
function formatEventDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Set the initial countdown date
let countDownDate = getNextEventDate();
document.getElementById("event-date").innerText = `Next Event Date: ${formatEventDate(countDownDate)}`;

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date();
    
    // Calculate the remaining time
    const distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements with id's
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the countdown is finished, set the next event date
    if (distance < 0) {
        countDownDate = getNextEventDate();
        document.getElementById("event-date").innerText = `Next Event Date: ${formatEventDate(countDownDate)}`;
    }
}, 1000);
