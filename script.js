// script.js

// Display an alert reminding users to perform a self-exam after a set time
setTimeout(() => {
    alert("Reminder: Don't forget to perform your breast self-exam this month!");
}, 5000);

// Function to track shares
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Breast Cancer Awareness',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Share functionality is not supported on your browser.');
    }
}