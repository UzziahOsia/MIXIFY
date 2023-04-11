import "./App.css";
import React from "react";
import { useState } from "react";

var musicDB = {
  All: [
    { name: "Joha - Asake", rating: "5/5", url: ""},
    { name: "Dull - Asake", rating: "", url: ""},
    { name: "Yoga - Asake", rating: "5/5", url: ""},
    { name: "Sungba - Asake", rating: "4/5", url: ""},
    { name: "Nzaza - Asake", rating: "4/5", url: ""},
    { name: "Unavailable - Davido", rating: "5/5", url: ""},
    { name: "Over Dem - Davido", rating: "5/5", url: ""},
    { name: "Feel - Davido", rating: "4/5", url: ""},
    { name: "Away - Davido", rating: "4/5", url: ""},
    { name: "Godfather - Davido", rating: "4/5", url: ""},
    { name: "Kante - Davido", rating: "4/5", url: ""},
    { name: "Bloody Samaritan - Ayra Starr", rating: "5/5", url: ""},
    { name: "Rush - Ayra Starr", rating: "4/5", url: ""},
    { name: "Sabilty - Ayra Starr", rating: "4/5", url: ""},
    { name: "Common Person - Burna Boy", rating: "5/5", url: ""},
    { name: "For my Hand - Burna Boy", rating: "4/5", url: ""},
    { name: "Last Last - Burna Boy", rating: "4/5", url: ""},
    { name: "Way Too Big - Burna Boy", rating: "5/5", url: ""},
    { name: "Anybody - Burna Boy", rating: "5/5", url: ""}
  ],
  Asake: [
    { name: "Joha", rating: "5/5", url: ""},
    { name: "Dull", rating: "", url: ""},
    { name: "Yoga", rating: "5/5", url: ""},
    { name: "Sungba", rating: "4/5", url: ""},
    { name: "Nzaza", rating: "4/5", url: ""}
  ],
  Davido: [
    { name: "Unavailable", rating: "5/5", url: ""},
    { name: "Over Dem", rating: "5/5", url: ""},
    { name: "Feel", rating: "4/5", url: ""},
    { name: "Away", rating: "4/5", url: ""},
    { name: "Godfather", rating: "4/5", url: ""},
    { name: "Kante", rating: "4/5", url: ""}
  ],
  AyraStarr: [
    { name: "Bloody Samaritan", rating: "5/5", url: ""},
    { name: "Rush", rating: "4/5", url: ""},
    { name: "Sabilty", rating: "4/5", url: ""}
  ],
  BurnaBoy: [
    { name: "Common Person", rating: "5/5", url: ""},
    { name: "For my Hand", rating: "4/5", url: ""},
    { name: "Last Last", rating: "4/5", url: ""},
    { name: "Way Too Big", rating: "5/5", url: ""},
    { name: "Anybody", rating: "5/5", url: ""}
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
              border: "2px solid #059669",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.7rem",
              background: "#059669"
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
