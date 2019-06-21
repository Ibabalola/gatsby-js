import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact Us</Link> <br/>
        <Link to="/profile/">Profiles</Link> <br/>
        <Link to="/impact/">Impact</Link> <br/>
        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)