# Technical Documentation
## Personal Portfolio Website – Assignment 2
**Student Name:** Asim Alghamdi  
**Student ID:** 202356250  
**Course:** SWE 363 – Web Engineering  
**University:** King Fahd University of Petroleum & Minerals (KFUPM)
---
## 1. Introduction
This project is an improved version of the personal portfolio website developed in Assignment 1.
The main objective of Assignment 2 is to improve website interactivity, user experience, and functionality using HTML, CSS, and JavaScript.
The original structure of Assignment 1 was kept and extended with new interactive features.
The website allows visitors to learn about my background, skills, and projects.
It also allows users to search projects, filter them by category, switch themes, and interact with a validated contact form.
The new features were added without changing the overall purpose of the original portfolio.
The project remains simple and lightweight.
No external JavaScript framework is required.
## 2. Technologies Used
The project uses the following technologies:
- **HTML5:** Creates the website structure and content.
- **CSS3:** Controls layout, styling, responsiveness, dark mode, and transitions.
- **JavaScript:** Handles project filtering, form validation, theme switching, and user interaction.
- **LocalStorage:** Stores the user's selected theme in the browser.
- **CSS Grid:** Organizes the project cards.
- **Flexbox:** Organizes the navigation, skills, and project controls.
- **Git:** Tracks project changes.
- **GitHub:** Stores the project repository.
The project does not use React, Bootstrap, or another external framework.
## 3. Project Structure
The project contains the following main files:
assignment2/
index.html
css/styles.css
js/script.js
assets/
docs/technical-documentation.md
docs/ai-usage-report.md
README.md
The HTML file defines the page structure and visible content.
The CSS file controls the visual design and responsive layout.
The JavaScript file contains all interactive functionality.
The assets folder can store images used by the portfolio.
The docs folder contains the technical documentation and AI usage report.
The README file explains the project and how to run it.
This structure keeps the project organized.
## 4. Website Features
### 4.1 Personal Information
The Hero section introduces the portfolio owner.
It displays my name and identifies me as a Software Engineering student at KFUPM.
A short description explains my interest in software and modern web technologies.
A button links directly to the Projects section.
### 4.2 About Me
The About Me section provides a short introduction to my background.
It explains my interest in web development and software design.
It also mentions my interest in learning new technologies and building practical projects.
### 4.3 Skills Section
The Skills section displays my technical skills.
The listed skills include HTML, CSS, JavaScript, Java, Python, SQL, Git, and GitHub.
Flexbox is used to organize the skill items.
The items can move to another line when the available width becomes smaller.
### 4.4 Projects Section
The Projects section contains two project cards.
The first project is PeerLearn.
PeerLearn is categorized as Software Engineering.
The second project is Student Learning Community.
Student Learning Community is categorized as Web Development.
Each project contains a title, description, and placeholder image.
Each card also includes data attributes used by JavaScript.
The data-title attribute stores the searchable project title.
The data-category attribute stores the project category.
### 4.5 Project Search and Filtering
A search input was added above the project cards.
The search input has the ID projectSearch.
Users can type part of a project title.
JavaScript reads the search text and converts it to lowercase.
The trim method removes unnecessary spaces from the beginning and end.
A category dropdown was also added.
The category dropdown has the ID projectFilter.
Available categories include:
- All Categories
- Web Development
- Software Engineering
JavaScript reads the selected category.
The filterProjects function checks the search text and selected category.
A project remains visible when both conditions match.
Projects that do not match receive the hidden class.
The results update without reloading the page.
The search field uses an input event.
The category dropdown uses a change event.
### 4.6 No Projects Feedback
JavaScript counts how many project cards remain visible.
The visibleProjects variable stores this number.
If no projects match, the No projects found message appears.
The message has the ID noProjectsMessage.
If at least one project matches, the message remains hidden.
This prevents the Projects section from appearing empty without explanation.
### 4.7 Dark and Light Mode
The website supports dark and light themes.
A theme button is displayed in the navigation bar.
The button has the ID themeButton.
JavaScript listens for a click on the button.
The dark-mode class is toggled on the page.
When dark mode is active, the button displays Light Mode.
When light mode is active, the button displays Dark Mode.
CSS changes the background and text colors.
Project card borders are also adjusted.
Skill elements use a darker background in dark mode.
Search and filter controls receive dark-mode styling.
### 4.8 Theme Persistence
Assignment 2 improves the theme feature using LocalStorage.
When the page loads, JavaScript retrieves the saved theme.
The saved value is read using localStorage.getItem.
If the stored value is dark, dark mode is activated automatically.
The theme button is also updated.
When dark mode is selected, the value dark is stored.
When light mode is selected, the value light is stored.
The values are saved using localStorage.setItem.
The selected theme remains active after refreshing the page.
This demonstrates basic client-side data handling.
### 4.9 Contact Form
The Contact section includes a form.
The form contains Name, Email, and Message fields.
The form has the ID contactForm.
The novalidate attribute is used.
This allows JavaScript to provide custom validation messages.
Each field has a small element for its error message.
A general feedback element is also included.
The Contact form is a front-end demonstration.
It does not send information to a server.
### 4.10 Contact Form Validation
JavaScript reads the Name, Email, and Message values.
The trim method removes unnecessary spaces.
Previous error messages are cleared before every validation attempt.
A Boolean variable called isValid starts as true.
The Name field must contain at least two characters.
If the name is too short, a specific error message appears.
The Email field must contain the @ symbol.
If the symbol is missing, an email error appears.
The Message field must contain at least ten characters.
If the message is too short, a message error appears.
When any rule fails, isValid becomes false.
If validation fails, a general error message is displayed.
The message tells the user to correct the errors above.
If all fields are valid, a success message is displayed.
The success message explains that the form was validated successfully.
It also explains that the demo does not send messages.
The form is reset after successful validation.
A timeout removes the success message after four seconds.
### 4.11 Animations and Transitions
Project cards use simple CSS transitions.
The transition affects movement and box shadow.
When users hover over a project card, the card moves slightly upward.
A shadow is also displayed.
The hover effect lasts 0.3 seconds.
Additional transitions are used for theme changes.
Background colors change smoothly.
Text colors also change smoothly.
Border colors use the same transition behavior.
These effects improve visual feedback without adding heavy animation.
### 4.12 Accessibility
The project search includes accessibility improvements.
A label is connected to the search field.
The label uses the sr-only class.
The label is hidden visually but remains available to assistive technologies.
The search input also contains an aria-label.
The category dropdown also contains an aria-label.
These attributes explain the purpose of the controls.
The changes improve accessibility without changing the visible design.
### 4.13 Responsive Design
The website uses responsive CSS rules.
The main breakpoint is 768 pixels.
On larger screens, project cards appear in two columns.
On smaller screens, project cards appear in one column.
The navigation changes to a vertical layout.
The Hero heading becomes smaller.
Section padding is reduced.
The project search and category dropdown also change layout.
On smaller screens, the project tools are arranged vertically.
This improves usability on tablets and mobile devices.
## 5. JavaScript Implementation
The JavaScript file contains the main interactive behavior.
The first part manages the website theme.
The saved theme is read when the page loads.
The theme button changes the current theme.
The selected value is stored using LocalStorage.
The second part handles Contact form validation.
The form uses a submit event listener.
Default submission is stopped using preventDefault.
Input values are read and cleaned using trim.
Validation messages are displayed when needed.
Success or error feedback is shown after validation.
The third part handles project search and filtering.
The filterProjects function reads the search text and category.
Each project card is checked.
Matching cards remain visible.
Non-matching cards receive the hidden class.
The function also updates the no-projects message.
These features respond immediately to user actions.
## 6. Error Handling and User Feedback
The website includes several methods of user feedback.
A short name produces a Name error.
An email without @ produces an Email error.
A short message produces a Message error.
Invalid form input produces a general error message.
Valid form input produces a success message.
The success message disappears after a short delay.
A no-projects message appears when filtering returns no results.
The theme button text changes based on the active mode.
These messages help users understand the result of their actions.
## 7. Performance and Compatibility
The website uses standard HTML, CSS, and JavaScript.
No large front-end framework is required.
No external JavaScript library is loaded.
Project filtering works with elements already available on the page.
LocalStorage stores only a small theme preference.
CSS transitions are lightweight.
These choices help keep the website simple and efficient.
The website is intended to work in modern browsers.
Examples include Google Chrome, Safari, Microsoft Edge, and Mozilla Firefox.
## 8. Testing
The main features were tested manually in the browser.
The following test cases can be used:
| Test Case | Expected Result |
| --- | --- |
| Search for PeerLearn | Only PeerLearn appears |
| Search for an unknown project | No projects found message appears |
| Select Web Development | Web project appears |
| Select Software Engineering | PeerLearn appears |
| Search and filter together | Only matching projects appear |
| Enable dark mode | Website changes to dark mode |
| Refresh after enabling dark mode | Dark mode remains active |
| Submit an empty form | Validation errors appear |
| Enter a short name | Name error appears |
| Enter an email without @ | Email error appears |
| Enter a short message | Message error appears |
| Submit valid information | Success message appears |
| Open on a smaller screen | Responsive layout is displayed |
The browser console can also be checked for JavaScript errors.
Testing should be completed before the final submission.
## 9. Improvements from Assignment 1
Assignment 2 keeps the original portfolio structure.
The following features were added or improved:
- Project search.
- Project category filtering.
- Project data-title attributes.
- Project data-category attributes.
- Dynamic project visibility.
- No projects feedback.
- LocalStorage theme persistence.
- Custom Contact form validation.
- Field-specific error messages.
- General form feedback.
- Search accessibility labels.
- A hidden screen-reader label.
- Project card hover effects.
- Smooth theme transitions.
- Responsive project search controls.
These additions provide clear progress from Assignment 1.
## 10. AI Assistance
ChatGPT was used to assist with development and review.
AI assistance included:
- Reviewing Assignment 2 requirements.
- Suggesting project search and filtering improvements.
- Suggesting LocalStorage for theme persistence.
- Reviewing Contact form validation.
- Suggesting user feedback improvements.
- Suggesting accessibility improvements.
- Reviewing CSS transitions.
- Assisting with technical documentation.
The AI-generated suggestions were reviewed before use.
Some suggestions were simplified to match the existing project.
The final features were tested after being added.
Detailed AI usage is documented in docs/ai-usage-report.md.
## 11. Limitations and Future Improvements
The current website is a front-end application.
The Contact form does not send information to a server.
The email validation is intentionally simple.
It only checks whether the input contains the @ symbol.
The portfolio currently contains two projects.
Only two project categories are available.
The search currently checks project titles only.
Future improvements could include:
- Connecting the Contact form to a backend.
- Adding stronger email validation.
- Adding more portfolio projects.
- Adding more project categories.
- Searching project descriptions.
- Replacing placeholder images with real screenshots.
- Adding links to project repositories.
- Adding more accessibility improvements.
These improvements are not required for the current assignment.
## 12. Conclusion
Assignment 2 improves the original portfolio while keeping the Assignment 1 structure.
The main changes focus on interactivity and user experience.
Project searching and filtering provide dynamic content.
LocalStorage saves the user's preferred theme.
Contact form validation provides clearer feedback.
Accessibility additions improve the project search controls.
CSS transitions make interactions smoother.
Responsive design keeps the website usable on different screen sizes.
Overall, the project demonstrates practical use of HTML, CSS, and JavaScript in a simple interactive portfolio.