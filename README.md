# Reco

A working full stack CRUD app for writing, sharing and finding recommendations for books, movies, TV shows and games.

The app includes registration for new users, login/logout functionality, and protected routes for creating, updating or deleting recommendations, with users needing to be logged in to access these features.

![Image of Home page](https://github.com/jade-lt/Reco/blob/main/images/Reco-home.png?raw=true)

![Image of Rego page](https://github.com/jade-lt/Reco/blob/main/images/reco-rego.png?raw=true)


Once logged in, the user is routed to a list of recommendations, with each having a clickable edit or delete link. There is also the option to create a new recommendation or logout.

![Image of my recos 1](https://github.com/jade-lt/Reco/blob/main/images/my-recos-1.png?raw=true)

![Image of my recos 2](https://github.com/jade-lt/Reco/blob/main/images/my-recos-2.png?raw=true)

![Image of my recos 3](https://github.com/jade-lt/Reco/blob/main/images/my-recos-3.png?raw=true)


When a user clicks to create a new recommendation, they are routed to a form to create a new entry that posts to the database.

![Image of create 1](https://github.com/jade-lt/Reco/blob/main/images/reco-create-1.png?raw=true)

![Image of create 2](https://github.com/jade-lt/Reco/blob/main/images/reco-create-2.png?raw=true)



The edit link 
routes to a form with pre-filled input fields relevant to the recommendation, and from there a user can change the input fields and save the updates. The delete link routes to a component with the relevant recommendation name and image, and asks the user if they are sure they want to delete. Upon clicking the delete button, the recommendation is deleted from the database.

![Image of edit 1](https://github.com/jade-lt/Reco/blob/main/images/reco-edit-1.png?raw=true)

![Image of edit 2](https://github.com/jade-lt/Reco/blob/main/images/reco-edit-2.png?raw=true)

![Image of delete 1](https://github.com/jade-lt/Reco/blob/main/images/reco-delete-1.png?raw=true)

![Image of delete 2](https://github.com/jade-lt/Reco/blob/main/images/reco-delete-2.png?raw=true)


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


