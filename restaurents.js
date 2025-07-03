// Replace the star ratings with your actual ratings
document.querySelectorAll('.rating').forEach(function(rating) {
    var stars = rating.getElementsByClassName('fa-star');
    var ratingValue = 3.5; // Example rating value
    var roundedRating = Math.round(ratingValue);

    for (var i = 0; i < roundedRating; i++) {
        stars[i].classList.add('checked');
    }
});
var app = angular.module('myApp', []);
app.controller('RestaurantController', function($scope) {
    $scope.restaurants = [
        {
            name: 'Restaurant 1',
            image: 'https://th.bing.com/th/id/OIP.d1D4vAy8lO84Z506xch8vQHaFj?w=211&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            stars: [true, true, true, false, false] // Rating: 3 stars
        },
        // Add more restaurant objects similarly
    ];
});
