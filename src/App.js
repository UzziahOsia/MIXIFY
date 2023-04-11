import "./App.css";
import React from "react";
import { useState } from "react";

var musicDB = {
  All: [
  ],
  Asake: [
  ],
  Davido: [
  ],
  Ayra ,Starr: [
  ],
  Burna ,Boy: [
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

      <h1>Mixify</h1>
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
            border: "2px solid #065F46",
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
              border: "2px solid #065F46",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.7rem",
              background: "#ECFDF5"
            }}
            >
              <a href={song.url} style={{ fontSize: "large", color: "#ECFDF5" }}>{song.name}</a>
              <div style={{ fontSize: "large" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
