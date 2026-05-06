# Project description 

A clean, responsive web application that allows users to search for GitHub profiles. App allows users to:
* Enter a GitHub username
* Fetch user profile data from the GitHub REST API
* View key statistics (followers, following, public repositories, bio)
* Toggle between Light and Dark themes

## The app demonstrates:

  * API integration (REST)
  * Asynchronous JavaScript (async/await, fetch)
  * DOM manipulation & conditional rendering
  * Error handling (HTTP status codes 404, 403)
  * CSS variables for dynamic theming
  * Semantic HTML5 structure
  
## Tech Stack
* HTML5
* CSS3
* Vanilla JavaScript (ES6+)

# How to Run the Project Locally
1. Clone the repository

`git clone https://github.com/klstyak/github-profile-finder.git
cd github-profile-finder`

2. Open the application
Since this is a vanilla front-end project without a build step or dependencies, simply open the file in your browser:

`open index.html`

# ! Note on GitHub API limits
Unauthenticated requests to the GitHub REST API are limited to 60 per hour per IP address. If you encounter a 403 Forbidden error (handled gracefully by the UI), the limit has been reached and will reset automatically in an hour.
