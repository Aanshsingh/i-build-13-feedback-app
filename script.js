// 1. Select HTML elements
const stars = document.querySelectorAll(".star");
const ratingMessage = document.getElementById("Rating-message");
const feedback = document.getElementById("feedback");
const postButton = document.getElementById("post-btn");

// 2. Store selected rating
let selectedRating = 0;

// 3. Handle star clicks
stars.forEach(function (star) {

    star.addEventListener("click", function () {

        // Get the clicked star's rating
        selectedRating = Number(star.dataset.rating);

        // Update star colors
        stars.forEach(function (currentStar) {

            const starRating = Number(currentStar.dataset.rating);

            if (starRating <= selectedRating) {
                currentStar.classList.add("active");
            } else {
                currentStar.classList.remove("active");
            }

        });

        // Update the message
        updateRatingMessage(selectedRating);

    });

});

// 4. Update message according to rating
function updateRatingMessage(rating) {

    if (rating === 1) {
        ratingMessage.textContent = "Terrible 😞";
    } 
    else if (rating === 2) {
        ratingMessage.textContent = "Bad 🙁";
    } 
    else if (rating === 3) {
        ratingMessage.textContent = "It's okay 🙂";
    } 
    else if (rating === 4) {
        ratingMessage.textContent = "Good 😊";
    } 
    else if (rating === 5) {
        ratingMessage.textContent = "It is awesome 😁";
    }

}

// 5. Handle POST button
postButton.addEventListener("click", function () {

    const feedbackText = feedback.value.trim();

    // Check rating
    if (selectedRating === 0) {
        alert("Please select a star rating!");
        return;
    }

    // Check feedback
    if (feedbackText === "") {
        alert("Please describe your experience!");
        return;
    }

    // Successful submission
    alert(
        "Thank you for your feedback!\n" +
        "Rating: " + selectedRating + "/5\n" +
        "Review: " + feedbackText
    );

});