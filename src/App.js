import "./App.css";
import React from "react";
import { useState } from "react";

var musicDB = {
  All: [
    { name: "Follow You - Imagine Dragons", rating: "3/5", url: ""},
    { name: "Wrecked - Imagine Dragons", rating: "3/5", url: ""},
    { name: "Believer - Imagine Dragons", rating: "3/5", url: ""},
    { name: "Radioactive - Imagine Dragons", rating: "3/5", url: ""},
    { name: "Demons - Imagine Dragons", rating: "3/5", url: ""},
    { name: "1+1 - Sia", rating: "5/5", url: ""},
    { name: "Courage To Change - Sia", rating: "3/5", url: ""},
    { name: "Elastic Heart - Sia", rating: "3/5", url: ""},
    { name: "Cheap Thrills - Sia", rating: "4/5", url: ""},
    { name: "Chandelier - Sia", rating: "4/5", url: ""},
    { name: "Unstoppable - Sia", rating: "4/5", url: ""},
    { name: "Stronger - The Score", rating: "4/5", url: ""},
    { name: "Glory - The Score", rating: "", url: "4/5"},
    { name: "Born For This - The Score", rating: "4/5", url: ""},
    { name: "The Champion - The Score", rating: "4/5", url: ""},
    { name: "On and On - The Score", rating: "", url: "4/5"},
    { name: "Call Out My Name - The Weekend", rating: "4/5", url: ""},
    { name: "Binding Lights - The Weekend", rating: "4/5", url: ""},
    { name: "In Your Eyes - The Weekend", rating: "4/5", url: ""}
  ],
  ImagineDragons: [
    { name: "Follow You", rating: "5/5", url: ""},
    { name: "Wrecked", rating: "", url: ""},
    { name: "Believer", rating: "5/5", url: ""},
    { name: "Radioactive", rating: "4/5", url: ""},
    { name: "Demons", rating: "4/5", url: ""}
  ],
  Sia: [
    { name: "1+1", rating: "5/5", url: ""},
    { name: "Courage To Change", rating: "5/5", url: ""},
    { name: "Elastic Heart", rating: "4/5", url: ""},
    { name: "Cheap Thrills", rating: "4/5", url: ""},
    { name: "Chandelier", rating: "4/5", url: ""}
  ],
  TheWeekend: [
    { name: "Call Out My Name", rating: "5/5", url: ""},
    { name: "Binding Lights", rating: "4/5", url: ""},
    { name: "In Your Eyes", rating: "4/5", url: ""}
  ],
  TheScore: [
    { name: "Stronger", rating: "5/5", url: ""},
    { name: "Glory", rating: "4/5", url: ""},
    { name: "On and On", rating: "4/5", url: ""},
    { name: "In My Bones", rating: "5/5", url: ""},
    { name: "Dreamin (with blackbear)", rating: "5/5", url: ""}
  ],
};

export default function App() {
  const [selectedArtist, setSelectedArtist] = useState("All");

  function artistClickHandler(artistName) {
    setSelectedArtist(artistName);
  }
  return (
    <div className="App">
      <div className="App-header">

      <h1>Music Recommendations</h1>
      <p style={{ fontSize: "medium" }}>
        Checkout my favorite songs. Select an artist to get started
      </p>
      <div>
        {Object.keys(musicDB).map((artistName) => (
          <button
          style={{
            cursor: "pointer",
            background: "#059669",
            borderRadius: "1rem",
            padding: "0.9rem  1.5rem",
            border: "2px solid #059669",
            margin: "1rem 0.3rem",
            color: "white"
            }}
            onClick={() => artistClickHandler(artistName)}
            >
            {artistName}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedArtist].map((song) => (
            <li
            key={song.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "2px solid #15171b",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.7rem",
              background: "#15171b"
            }}
            >
              <a href={song.url} style={{ fontSize: "large", color: "white" }}>{song.name}</a>
              <div style={{ fontSize: "large" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
