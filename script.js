document.addEventListener("DOMContentLoaded", function() {
    // Create profile card container
    var profileCardContainer = document.getElementById("profileCard");

    // Create profile card elements
    var profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");

    var profilePicture = document.createElement("div");
    profilePicture.classList.add("profile-picture");
    var profileImage = document.createElement("img");
    profileImage.src = "kokila.jpeg"; // Replace with your image URL
    profilePicture.appendChild(profileImage);

    var profileInfo = document.createElement("div");
    profileInfo.classList.add("profile-info");
    var profileName = document.createElement("div");
    profileName.classList.add("profile-name");
    profileName.textContent = "/home/temp/Downloads/Screenshot_20240410-095256_Telegram.jpg"; // Replace with name
    var profileTitle = document.createElement("div");
    profileTitle.classList.add("profile-title");
    profileTitle.textContent = "Software Developer"; // Replace with title
    profileInfo.appendChild(profileName);
    profileInfo.appendChild(profileTitle);

    // Append elements to profile card container
    profileCard.appendChild(profilePicture);
    profileCard.appendChild(profileInfo);
    profileCardContainer.appendChild(profileCard);
});
