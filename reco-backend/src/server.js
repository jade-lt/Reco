const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");


const app = express();

require("./db/db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.use(
  session({
    secret: "random secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());

const recoController = require("./controllers/recoController");
const userController = require("./controllers/userController");
const clubController = require("./controllers/clubController");
const listController = require("./controllers/listController");
const myClubController = require("./controllers/myClubController");



app.use("/api/recos", recoController);
app.use("/api/users", userController);
app.use("/api/clubs", clubController);
app.use("/api/lists", listController);
app.use("/api/my-clubs", myClubController);




app.listen(process.env.PORT || 9000, () => {
    console.log(`listening on port ${process.env.PORT || 9000}`);
  });

console.log("app is running");
