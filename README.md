# Reco

A working full stack CRUD app for writing, sharing and finding recommendations for books, movies, TV shows and games.

The app includes registration for new users, login/logout functionality, and protected routes for creating, updating or deleting recommendations, with users needing to be logged in to access these features.

Once logged in, the user is routed to a list of recommendations, with each having a clickable edit or delete link. The edit link 
routes to a form with pre-filled input fields relevant to the recommendation, and from there a user can change the input fields and save the updates. The delete link routes to a component with the relevant recommendation name and image, and asks the user if they are sure they want to delete. Upon clicking the delete button, the recommendation is deleted from the database.

Issues/things to fix

The create, update and delete routes are protected in the back end, so recommendations can only be added or updated/deleted if a user is logged in. However the React browser routes are not protected on the front end, so the urls that lead to the create/update/delete forms can be accessed by anyone.

When a user logs in, they can create, update and delete any recommendations, not just their own.

The app is not currently mobile optimized, so I’d like to update it to render properly on smaller screens.

Future plans

The home page will have a “Featured Recos” section that renders a couple of random recommendations pulled from the database.

I plan to add in a search feature to look for a specific recommendation and also a sort feature that allows recommendations to be shown based on category and/or genre.

Installation instructions

Once cloned, start a terminal for both the frontend (reco-frontend) and backend (reco-app-api) folders. Run the “npm install” command in the frontend terminal, and the “bundle install” command in the backend terminal to ensure you have the necessary dependencies.

Start the server in the backend first with the “rails server” command. Once this is running, start the frontend server with the “npm start” command. The default port of 3000 will already be running the backend, so you will be asked if you’d like to select another available port. Enter “y”, and this will automatically select another available port (usually 3001).

If not automatically redirected, open a browser and enter http://localhost:3001/ (or whatever port number you selected) and this should open the app to the login page.

Built using React, Bootstrap, Ruby on Rails and PostgreSQL.


