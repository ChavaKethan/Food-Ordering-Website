// script.js
document.addEventListener("DOMContentLoaded", function() {
    const locationDropdown = document.getElementById("location-dropdown");
    const viewRestaurantsBtn = document.getElementById("view-restaurants-btn");
    const restaurantListSection = document.getElementById("restaurant-list");

    viewRestaurantsBtn.addEventListener("click", function() {
        const selectedLocation = locationDropdown.value;
        // Here you can make an API request to fetch restaurants based on the selected location
        // For now, let's assume you have an array of restaurant names
        const restaurants = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3'];

        // Clear previous restaurant options
        restaurantListSection.style.display = 'block';
        restaurantListSection.innerHTML = '<h2>Restaurants in Selected Location</h2>';
        const restaurantOptions = document.getElementById("restaurant-options");
        restaurantOptions.innerHTML = '';

        // Populate restaurant options
        restaurants.forEach(restaurant => {
            const li = document.createElement("li");
            li.textContent = restaurant;
            restaurantOptions.appendChild(li);
        });
    });
});
