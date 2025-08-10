const page1 = document.querySelector('.container_one');
const page2 = document.querySelector('.container_two');
const page3 = document.querySelector('.container_three');
const page41 = document.querySelector('.container_four');
const card = document.querySelector('.card_last');
const left = document.querySelector('.left_last');
const right = document.querySelector('.right');

let currentPage = 1; // Track the current page
function flipPage(nextPage) {
    const pages = [page1, page2, page3, page41];

    // Determine direction based on current and next page
    if (nextPage > currentPage) {
        pages[currentPage - 1].classList.add('flip-to-left');
        pages[nextPage - 1].classList.add('flip-to-right');
    } else {
        pages[currentPage - 1].classList.add('flip-to-right');
        pages[nextPage - 1].classList.add('flip-to-left');
    }

    // After the flip, update the page display
    setTimeout(() => {
        pages[currentPage - 1].style.display = 'none';
        pages[nextPage - 1].style.display = 'flex';

        // Reset classes for the next transition
        pages[currentPage - 1].classList.remove('flip-to-left', 'flip-to-right');
        pages[nextPage - 1].classList.remove('flip-to-left', 'flip-to-right');
    }, 400); // Match the timeout to the new transition duration (0.4s)
}

function page12() {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page41.style.display = 'none';
    right.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
    left.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
}

function page21() {
    page1.style.display = 'flex';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page41.style.display = 'none';
    right.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
    left.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
}

function page22() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'flex';
    page41.style.display = 'none';
    right.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
    left.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
}

function page31() {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page41.style.display = 'none';
    right.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
    left.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 1)'; // Correct property name and syntax
}

function page32() {
    page1.style.display = 'none'; // Hide first container
    page2.style.display = 'none'; // Hide second container
    page3.style.display = 'none'; // Hide third container
    page41.style.display = 'flex'; // Show last container

    card.style.width = '450px'; // Shrink card width
    left.style.width = '100%'; // Set left side width to full
    card.style.justifyContent = 'center'; // Center the content

    // Remove box shadow from right and left sections
    right.style.boxShadow = 'none'; // Correct property name and syntax
    left.style.boxShadow = 'none'; // Correct property name and syntax
    card.style.setProperty('--before-background', 'transparent'); // Change background to transparent
}

function page4() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'flex';
    page41.style.display = 'none';
}

function contact(){
    page1.style.display = 'none'; // Hide first container
    page2.style.display = 'none'; // Hide second container
    page3.style.display = 'none'; // Hide third container
    page41.style.display = 'flex'; // Show last container

    card.style.width = '450px'; // Shrink card width
    left.style.width = '100%'; // Set left side width to full
    card.style.justifyContent = 'center'; // Center the content

    // Remove box shadow from right and left sections
    right.style.boxShadow = 'none'; // Correct property name and syntax
    left.style.boxShadow = 'none'; // Correct property name and syntax
    card.style.setProperty('--before-background', 'transparent'); // Change background to transparent

}

async function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare data to send
    const data = { name, email, message };

    try {
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Email sent successfully!');
            console.log('Email sent successfully from:', email); // Console notification
        } else {
            alert('Error sending email.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    }
}

// Prevent parent onclick when clicking on form inputs and submit button
const form = document.getElementById('contact-form');
form.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the click event from bubbling up
});

// Prevent CSS change on input fields
const inputs = form.querySelectorAll('input, textarea, button');
inputs.forEach(input => {
    input.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the click event from bubbling up
    });
});
x