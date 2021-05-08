import { ButtonComponent } from "./ButtonComponent";
import { useHistory } from "react-router";

export const About = () => {
  const history = useHistory();

  return (
    <div className="main">
      <div className="about-info">
        <h1>About Reco</h1>
        <h5>
          Reco is a place to find and share
          <br /> recommendations of Movies, TV Shows, Books & Games.
          <br />
        </h5>
        <h3>How it Works</h3>
        <h5>
          If you just want to browse, you don't
          <br /> need to sign up, you can wander through categories
          <br /> and genres to find recommendations <br />
          of things you're interested in!
          <br />
        </h5>
        <h3>Join Reco!</h3>
        <h5>
          If you'd like to make recommendations <br />
          of all of your favourite things and share them with others,
          <br /> sign up to Reco for free!
          <br />
          You'll also be able to save other user's recommendations
          <br /> to a list to find later when you're looking <br />
          for ideas for something to read, watch or play.
        </h5>
      </div>
      <div>
        <ButtonComponent
          buttonLabel="Join Reco Now"
          onClick={() => history.push("./register")}
        />
      </div>
      <div className="credit">
        <h5>
          Reco was built using MongoDB, Express, React, Node, Material UI,
          Bootstrap, TMDb, Google Books and RAWG
          <br /> but is not affiliated with or endorsed or certified by these
          technologies.
        </h5>
      </div>
    </div>
  );
};
