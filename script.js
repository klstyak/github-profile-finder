// defining all the html elements we be interacting with and url for github REST api
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const profileContainer = document.getElementById('profile-container');
const themeToggle = document.getElementById('theme-toggle');

const API_URL = 'https://api.github.com/users/';

// defining the fetching function
const fetchUser = async (username) => {
    profileContainer.innerHTML = '<div class="loading">Searching...</div>';

    try {
        const response = await fetch(`${API_URL}${username}`);

        // checking response (e.g. 404, 403 etc), if an error - throw an error message
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found!");
            } else if (response.status === 403) {
                throw new Error("Rate limit exceeded. Try again later");
            } else {
                throw new Error("Something went wrong.");
            }
        }

        // parsing json data from response body
        const userData = await response.json();
        renderUserCard(userData);

    } catch (error) {
        // in case of any error - jump here to display error message
        renderError(error.message);
    }
};

// function to create user profile card using backticks. more convenient than billions of document.createElement()
const renderUserCard = (user) => {
    const cardHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            <div class="user-info">
                <h2>${user.name}</h2>
                <a href="${user.html_url}" target="_blank" class="username">@${user.login}</a>
                <p class="bio">${user.bio ? user.bio : 'This profile has no bio.'}</p>
                
                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-value">${user.followers}</span>
                        <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${user.following}</span>
                        <span class="stat-label">Following</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${user.public_repos}</span>
                        <span class="stat-label">Repos</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    profileContainer.innerHTML = cardHTML;
};

// error message function
const renderError = (message) => {
    profileContainer.innerHTML = `
        <div class="error-message">
            ${message}
        </div>
    `;
};

// event listener to start the search when button is clicked + to use enter key to trigger search + theme toggle
searchButton.addEventListener('click', () => {
    const username = searchInput.value.trim();
    if (username) fetchUser(username);
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') searchButton.click();
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

