# Personal Portfolio - Assignment 2

## Project Description

This project is a responsive personal portfolio website developed for SWE 363 Web Engineering.

Assignment 2 builds on the portfolio created in Assignment 1 by adding more interactivity, data handling, user feedback, accessibility improvements, and animations.

The website allows visitors to learn about my background, skills, and projects while interacting with features such as project search, project filtering, dark/light mode, and contact form validation.

## Features

The website includes:

- Responsive navigation
- Hero section
- About Me section
- Skills section
- Projects section
- Contact form
- Dark and light mode
- Persistent theme using Local Storage
- Project search
- Project category filtering
- Contact form validation
- Success and error feedback
- Project card hover effects
- Accessibility improvements
- Responsive layout for desktop, tablet, and mobile

## New Features in Assignment 2

The following features were added or improved from Assignment 1:

### Project Search

Users can search for projects by entering text in the search field.

The results update automatically while the user types.

### Project Filtering

Projects can be filtered using the following categories:

- All Categories
- Web Development
- Software Engineering

The search and category filter can also work together.

### Dark and Light Mode

Users can switch between dark and light themes.

The selected theme is stored using Local Storage, so it remains active after refreshing the page.

### Contact Form Validation

The contact form validates:

- Name
- Email
- Message

The form displays specific error messages when the entered information is invalid.

If all fields are valid, a success message is displayed.

The contact form is only a demonstration and does not send information to a server.

### User Feedback

The website provides feedback when:

- No projects match the search
- Contact form information is invalid
- Contact form validation succeeds
- The website theme changes

### Accessibility

Accessibility improvements include:

- Accessible labels for project search controls
- A screen-reader-only search label
- Clear form feedback

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- Local Storage
- Git
- GitHub

No external JavaScript framework is required.

## Project Structure

assignment-2/

- README.md
- index.html
- css/
  - styles.css
- js/
  - script.js
- assets/
  - images/
- docs/
  - ai-usage-report.md
  - technical-documentation.md
- .gitignore

## How to Run

No installation is required.

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Open the file in a browser.

You can also use the Live Server extension in Visual Studio Code.

To use Live Server:

1. Open `index.html`.
2. Right-click inside the file.
3. Select `Open with Live Server`.

## How to Test the Features

### Project Search

Search for:

PeerLearn

Expected result:

Only the PeerLearn project should appear.

Search for an unknown project.

Expected result:

A "No projects found" message should appear.

### Project Filtering

Select:

Web Development

Expected result:

The Web Development project should appear.

Select:

Software Engineering

Expected result:

PeerLearn should appear.

### Dark Mode

1. Enable Dark Mode.
2. Refresh the page.

Expected result:

Dark Mode should remain active because the preference is stored using Local Storage.

### Contact Form

Try submitting invalid information.

Expected result:

Validation messages should appear.

Then enter valid information.

Expected result:

A success message should appear.

## Responsive Design

The website is designed to support:

- Desktop screens
- Tablets
- Mobile devices

CSS Grid, Flexbox, and media queries are used to adjust the layout for different screen sizes.

On smaller screens:

- Navigation changes layout
- Project cards appear in one column
- Search and category controls appear vertically
- Section spacing is reduced

## Documentation

More technical information is available in:

`docs/technical-documentation.md`

AI usage information is available in:

`docs/ai-usage-report.md`

## AI Usage

ChatGPT was used during Assignment 2 to assist with:

- Reviewing the existing portfolio
- Contact form validation
- Project search and filtering suggestions
- Dark mode improvements
- Accessibility suggestions
- Code review
- Technical documentation

AI-generated suggestions were reviewed and modified before being included in the final project.

The complete AI usage information and declaration are available in the AI Usage Report.

The AI Evidence ZIP is submitted separately through Blackboard and is not included in the GitHub repository.

## Limitations

The website is currently a front-end application.

The Contact form does not connect to a backend or email service.

The portfolio currently contains a limited number of projects and categories.

## Future Improvements

Possible future improvements include:

- Adding more projects
- Replacing placeholder images with real screenshots
- Adding GitHub links to projects
- Adding more project categories
- Improving project search
- Connecting the Contact form to a backend
- Adding additional accessibility improvements

## Author

Asim Alghamdi

Student ID: 202356250

Software Engineering Student

King Fahd University of Petroleum & Minerals (KFUPM)

## Course

SWE 363 - Web Engineering

Assignment 2 - Interactive Features