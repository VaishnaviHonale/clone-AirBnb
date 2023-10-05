// window.addEventListener("DOMContentLoaded", (event) => {
//     // Your code goes here



//  function createListingCard(listing) {
//             // ... (your existing code to create listingCard)

//             // Add a directions button
//             const directionsButton = document.createElement("button");
//             directionsButton.innerText = "Get Directions";
//             directionsButton.addEventListener("click", function() {
//                 openDirections(listing.location);
//             });
//             listingCard.appendChild(directionsButton);

//             return listingCard;
//         }

//         function openDirections(location) {
//             // Open Google Maps directions in a new tab
//             const url = `https://www.google.com/maps/dir//${location.latitude},${location.longitude}`;
//             window.open(url, "_blank");
//         }

//         var navBar = document.getElementById("navBar");
//         function togglebtn() {
//             navBar.classList.toggle("hidemenu");
//         }
    














// window.addEventListener("DOMContentLoaded", (event) => {
//     var navBar = document.getElementById("navBar");
    
//     function togglebtn() {
//         navBar.classList.toggle("hidemenu");
//     }

//     // Get the form and input elements
//     var searchForm = document.querySelector('.search-bar form');
//     var locationInput = document.querySelector('.location-input input');
//     var checkInInput = document.querySelector('input[placeholder="Add Date"]');
//     var checkOutInput = document.querySelectorAll('input[placeholder="Add Date"]')[1];
//     var guestInput = document.querySelector('input[placeholder="Add Guest"]');

//     // Handle form submission
//     searchForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get the values entered by the user
//         var locationValue = locationInput.value;
//         var checkInValue = checkInInput.value;
//         var checkOutValue = checkOutInput.value;
//         var guestValue = guestInput.value;

//         // Now you can use these values to perform a search or any other action
//         console.log('Location:', locationValue);
//         console.log('Check-in Date:', checkInValue);
//         console.log('Check-out Date:', checkOutValue);
//         console.log('Guests:', guestValue);

//         // Add your logic here to search for listings based on user input
//         // You can make an AJAX request to a server to fetch relevant data
//         // and update the UI accordingly
//     });
// });





// // step-2
//  var navBar = document.getElementById("navBar");
//     function togglebtn(){
//         navBar.classList.toggle("hidemenu");
//     }

//     const searchButton = document.getElementById("search-button");

//     searchButton.addEventListener("click", () => {
//         const searchInput = document.getElementById("search-input").value;

//         // Replace the placeholder URL with the actual API endpoint
//         fetch(`https://rapidapi.com/3b-data-3b-data-default/api/airbnb13?search=${searchInput}`)
//             .then(response => response.json())
//             .then(data => {
//                 // Your code to display the listings goes here
//             })
//             .catch(error => console.error('Error:', error));
//     });




//  var navBar = document.getElementById("navBar");
//     function togglebtn(){
//         navBar.classList.toggle("hidemenu");
//     }

//     const searchButton = document.getElementById("search-button");

//     searchButton.addEventListener("click", () => {
//         const searchInput = document.getElementById("search-input").value;

//         // Replace the placeholder URL with the actual Airbnb API endpoint
//         fetch(`https://3b-data-airbnb13.p.rapidapi.com/properties/v1/listings/search?query=${searchInput}`, {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Host': '3b-data-airbnb13.p.rapidapi.com',
//                 'X-RapidAPI-Key': 'ec1b159d21msh3d1afa4d52672a9p1823e9jsnb827d8c33bd3'  // Replace with your RapidAPI key
//             }
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Your code to display the listings goes here
//                 console.log(data);
//             })
//             .catch(error => console.error('Error:', error));
//     });



// var navBar = document.getElementById("navBar");
//     function togglebtn(){
//         navBar.classList.toggle("hidemenu");
//     }

    // Add the event listener for the search button
    // const searchButton = document.querySelector(".search-bar button");

    // searchButton.addEventListener("click", (event) => {
    //     event.preventDefault(); // Prevent the form from submitting

    //     const searchInput = document.querySelector(".search-bar input").value;

    //     // Replace 'https://api.example.com/listings' with the actual Airbnb API endpoint
    //     fetch(`https://rapidapi.com/3b-data-3b-data-default/api/airbnb13?search=${searchInput}`, {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
    //             'X-RapidAPI-Key': 'ec1b159d21msh3d1afa4d52672a9p1823e9jsnb827d8c33bd3',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Your code to display the listings goes here
    //         console.log(data); // For testing purposes
    //     })
    //     .catch(error => console.error('Error:', error));
    // });
  




// Function to create a listing card
function createListingCard(listing) {
    const listingCard = document.createElement("div");
    listingCard.classList.add("listing-card");

    const superhostIndicator = document.createElement("p");
    if (listing.host.is_superhost) {
        superhostIndicator.innerText = "Superhost";
        superhostIndicator.style.color = "red";
        listingCard.appendChild(superhostIndicator);
    }

    const rareFindIndicator = document.createElement("p");
    if (listing.is_rare_find) {
        rareFindIndicator.innerText = "Rare Find";
        rareFindIndicator.style.color = "green";
        listingCard.appendChild(rareFindIndicator);
    }

    listingCard.innerHTML = `
        <img src="${listing.image}" alt="${listing.title}">
        <div class="listing-info">
            <h2>${listing.title}</h2>
            <p>${listing.propertyType} · ${listing.beds} beds · ${listing.bathrooms} bathrooms</p>
            <p>${listing.price} per night</p>
            <p>${listing.location}</p>
            <p>Amenities: ${createAmenitiesPreview(listing.amenities)}</p>
            <p>Hosted by ${createHostDetails(listing.host)}</p>
            <button onclick="openDirections(${listing.latitude}, ${listing.longitude})">Get Directions</button>
            <button onclick="showBookingCostBreakdown(${listing})">Show Booking Cost Breakdown</button>
        </div>
    `;

    return listingCard;
}

// Function to create amenities preview
function createAmenitiesPreview(amenities) {
    const previewAmenities = amenities.slice(0, 3);
    let previewText = previewAmenities.join(", ");

    if (amenities.length > 3) {
        const extraCount = amenities.length - 3;
        previewText += `, and ${extraCount} more`;
    }

    return previewText;
}

// Function to create host details
function createHostDetails(host) {
    let hostText = host.name;

    if (host.is_superhost) {
        hostText += " (Superhost)";
    }

    return hostText;
}

// Function to open Google Maps directions
function openDirections(latitude, longitude) {
    const url = `https://www.google.com/maps/dir/${latitude},${longitude}`;
    window.open(url, "_blank");
}

// Function to show booking cost breakdown
function showBookingCostBreakdown(listing) {
    const additionalFees = listing.price * 0.10; // Assuming additional fees are 10% of base price
    const totalCost = listing.price + additionalFees;

    const modal = document.createElement("div");
    modal.style.display = "block";
    modal.style.width = "300px";
    modal.style.height = "200px";
    modal.style.backgroundColor = "#fff";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

    modal.innerHTML = `
        <h2>Booking Cost Breakdown</h2>
        <p>Base Rate: $${listing.price.toFixed(2)}</p>
        <p>Additional Fees: $${additionalFees.toFixed(2)}</p>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
    `;

    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", () => modal.style.display = "none");
    modal.appendChild(closeButton);

    document.body.appendChild(modal);
}

// Other code for event listeners and initialization
window.addEventListener("DOMContentLoaded", (event) => {
    // Your code goes here
    // Example: Add event listener to search button
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
        const searchInput = document.getElementById("search-input").value;
        // Fetch listings based on search input and update UI
        fetchListings(searchInput);
    });
});

// Additional code for fetching listings from the API
async function fetchListings(searchInput) {
    try {
        const response = await fetch(`https://rapidapi.com/3b-data-3b-data-default/api/airbnb13?search=${searchInput}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ec1b159d21msh3d1afa4d52672a9p1823e9jsnb827d8c33bd3',
            },
        });

        const data = await response.json();
        const listingsContainer = document.getElementById("listings-container");

        // Clear previous listings
        listingsContainer.innerHTML = "";

        // Append new listings
        data.listings.forEach(listing => {
            const listingCard = createListingCard(listing);
            listingsContainer.appendChild(listingCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}