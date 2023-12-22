// Code for the home page

import { NavLink as Link } from "react-router-dom";

const Home = () => {

    return (
        <>
        <Link end to={"/about"}>About page</Link>
        <h1>Home page</h1>
        </>
    )
}

// export 
export default Home;