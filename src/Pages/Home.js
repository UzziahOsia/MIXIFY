import "./Home.css";
import React from "react";

const Home = () => (
  <div>
    <h1 style={{
            cursor: "pointer",
            background: "#059669",
            borderRadius: "1rem",
            padding: "0.9rem  1.5rem",
            border: "2px solid #065F46",
            margin: "1rem 0.3rem",
            color: "white"
            }}
            className="title is-1">Naija Spark</h1>
    <p 
    style={{
            cursor: "pointer",
            background: "#059669",
            borderRadius: "1rem",
            padding: "0.9rem  1.5rem",
            border: "2px solid #065F46",
            margin: "1rem 0.3rem",
            color: "white"
            }}>Discover your next favorite song with our music recommender app. 
            Our algorithm analyzes your listening habits and suggests new tracks tailored to your tastes. 
            With a vast library of songs from different genres and eras, you'll never run out of options. 
            Save your favorite tracks and create playlists for any occasion. Start exploring new music today with our app.
    </p>
  </div>
);

export default Home;
