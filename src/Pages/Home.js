import "./Home.css";
import React from "react";

const Home = () => (
  <div>
    <h1 className="title is-1">Naija Spark</h1>
    <p 
    style={{
            cursor: "pointer",
            background: "#059669",
            borderRadius: "1rem",
            padding: "0.9rem  1.5rem",
            border: "2px solid #065F46",
            margin: "1rem 0.3rem",
            color: "white"
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
  </div>
);

export default Home;
