# Event_Resources - SoftUni
Welcome to the Event Management SPA! This Single Page Application (SPA) allows users to browse, create, and manage events seamlessly. Below is a guide to help you understand the project structure, technical details, and how to get started.

## Overview

The Event Management SPA is designed to provide a user-friendly interface for event management. Users can register, log in, create, edit, and delete events. The application includes features such as a navigation bar, a home page, a dashboard for event listings, user authentication, and more.

## Technical Details

### Project Setup

1. **Initialize Project:**
   npm install
Use this command to install project dependencies. Avoid modifying `devDependencies` and `scripts` in the `package.json` file to ensure proper test operation.

2. **Run Automated Tests:**
   npm test
Execute this command to run the included automated test suite. Refer to Appendix B for more information.

### Resources

- **HTML and CSS Files:**
Views and styles are included in `index.html`. Maintain the provided structure for accurate testing.

- **Local REST Service:**
A local server with sample data supports user registration and CRUD operations. Review Appendix A for details on using the service.

## Application Requirements

1. **Navigation Bar:**
- NavBar with links for Home, Dashboard, Events, Login, Register, Add Event, and Logout based on user authentication status.

2. **Home Page:**
- Home page using provided resources.

3. **Login User:**
- Authenticating users with the provided REST service. POST requests to `/users/login` are used and success or error responses are processed.

4. **Register Page:**
- New users are registered with the provided REST service. Used POST requests to `/users/register` and processed success or error responses.

5. **Logout:**
- Logged in users are allowed to log out with a GET request to `/users/logout`. Clears session information on success.

6. **Dashboard:**
- Display a list of events. Use a GET request to `/data/events?sortBy=_createdOn%20desc`. Provide a user-friendly view for no events.

7. **Adding New Event:**
- Logged in users are allowed to add new form events. A POST request to `/data/events` was used.

8. **Event Details:**
- Show event details to all users. Added Edit and Delete buttons for the event creator. A GET request to `/data/events/:id` was used.

9. **Edit an Event:**
- Allow event authors to edit their events. A PUT request to `/data/events/:id` was used.

10. **Delete Event:**
 - Event authors are allowed to delete their events. A DELETE request was used on `/data/events/:id`.

11. **BONUS: Go to Event:**
 - Allowed logged in users to express interest in an event with a "Go" button. Implemented logic for visibility and number of buttons. POST and GET requests to `/data/going` were used.

## Getting Started

1. **Clone the Repository:**
   https://github.com/BojidaraBojanova/Event_Resources
   
2. **Navigate to the Project Directory:**
   cd event-management-spa
   
3. **Install Dependencies:**
   npm install
   
4. **Run the Application:**
   npm start

Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.


## Acknowledgments

- Special thanks to [SoftUni](https://softuni.org/) for providing the project scaffold and resources.



