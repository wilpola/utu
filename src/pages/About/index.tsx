// Code for the about page

import { NavLink as Link } from "react-router-dom";

const About = () => {
  return (
    <>
        <Link end to={'/'}>Home page</Link>
      <h1>About page</h1>
      <p>Moi olen Janne, ja haluan oppia koodaamaa. Tällä hetkellä opiskelen Pythonia, ja gittin käyttöä.</p>
    </>
  );
};

// export
export default About;
