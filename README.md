# Reco

Overview:

Reco is a working full stack CRUD app for creating, sharing, finding and saving recommendations for books, movies, TV shows and games.

The app includes registration for new users, login/logout functionality, and protected routes for creating, updating, deleting of saving recommendations, with users needing to be logged in to access these features.

A full list of all recommendations is available without needing to log in, along with a search feature and lists of recommendations sorted by genre or category.

![Image of Home page 1](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/Home-1.png?raw=true)

![Image of Home page 2](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/Home-2.png?raw=true)

Once logged in, the Navbar options change and the user is routed to their dashboard which has an overview of their list of saved recommendations, the things they are recommending, and the clubs they have joined.

![Image of Dashboard and Navbar](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/Dashboard.png?raw=true)

The app features the ability for logged in users to create new recommendations, and this can be done either manually via a form or by using a search feature which calls an API and lists any movies/tv shows/books/games that match the search terms. 

Users can edit or delete their own recommendations or favourite other user's recommednations, and these will be added to a list of things the user is interested in.

The app also features "Clubs" where users can find recommendations by category or interest along with a comment section to discuss the topic/category with other members of the club.

![Image of Club](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/club.png?raw=true)

![Image of Club comments](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/club-comment.png?raw=true)



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


