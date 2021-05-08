# Reco

Overview:

Reco is a working full stack CRUD app for creating, sharing, finding and saving recommendations for books, movies, TV shows and games.

The app includes registration for new users, login/logout functionality, and protected routes for creating, updating, deleting of saving recommendations, with users needing to be logged in to access these features.

A full list of all recommendations is available without needing to log in, along with a search feature and lists of recommendations sorted by genre or category. Reco's are displayed as cards and are colour-coded based on category eg all movies will display on a card with a blue background and all tv shows display on a green background.

![Image of Home page 1](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/Home-1.png?raw=true)

![Image of Home page 2](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/Home-2.png?raw=true)

Once logged in, the Navbar options change and the user is routed to their dashboard which has an overview of their list of saved recommendations, the things they are recommending, and the clubs they have joined.

![Image of Dashboard and Navbar](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/Dashboard.png?raw=true)

The app features the ability for logged in users to create new recommendations, and this can be done either manually via a form or by using a search feature which calls an API and lists any movies/tv shows/books/games that match the search terms. 

Users can edit or delete their own recommendations or favourite other user's recommendations, and these will be added to a list of things the user is interested in.

The app also features "Clubs" where users can find recommendations by category or interest along with a comment section to discuss the topic/category with other members of the club.

![Image of Club](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/club.png?raw=true)

![Image of Club comments](https://github.com/jade-lt/Reco/blob/main/reco-frontend/images%20for%20readme/club-comment.png?raw=true)


Issues/things to fix:

Routes are protected in the front-end but are not yet protected in the back-end

When creating a new recommendation manually, a user can input anything for category or genre, but these should be drop down menus that limit the choices, so that recommendations are correctly sorted into a category, genre or club later.

The user registration process should include required fields and input formats

The navbar is not yet mobile optimized

Future plans

I plan to expand out the types of recommendations that can be made/saved eg travel, food, products etc

Installation instructions

Once cloned, start a terminal for both the frontend (reco-frontend) and backend (reco-backend) folders and run the “npm install” command in both.

Start the servers in both terminals by using the "npm start" commands. If not automatically redirected, open a browser and enter http://localhost:3000/

Built using MongoDB, Express, React, Node, Material UI, Bootstrap, TMDb, Google Books and RAWG

You can see initial wireframe here: https://www.figma.com/file/Rgm5ovPNVxM9xzCTyN5MVe/Reco-App?node-id=0%3A1


