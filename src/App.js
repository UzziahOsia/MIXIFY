import "./App.css";
import React from "react";
import { useState } from "react";

var musicDB = {
  All: [
    { name: "Joha - Asake", rating: "5/5", url: "https://open.spotify.com/track/5UwxpuGHkwiojKDaPC5ZNu?si=34bce2989eb44661"},
    { name: "Dull - Asake", rating: "", url: "https://open.spotify.com/track/46gfN72BxmLvACx6Pve4XU?si=0e484fb03e4741ed"},
    { name: "Yoga - Asake", rating: "5/5", url: "https://open.spotify.com/track/79xHOEYZKZEj6fPkmhQboa?si=d6e73f1feece4fe2"},
    { name: "Sungba - Asake", rating: "4/5", url: "https://open.spotify.com/track/4k4pdUWX8632g7yByxC3rS?si=c61f00c2bf324169"},
    { name: "Nzaza - Asake", rating: "4/5", url: "https://open.spotify.com/track/0VjzaXw81JQJM61pzWwP8b?si=f9aabf0b01aa4662"},
    { name: "Unavailable - Davido", rating: "5/5", url: "https://open.spotify.com/track/2kaH2Z8ezDUKf6fNw250rZ?si=1c99e47df9a94751"},
    { name: "Over Dem - Davido", rating: "5/5", url: "https://open.spotify.com/track/1KCCxeit3q5wJXxDmRgbl3?si=9403911cd19843d0"},
    { name: "Feel - Davido", rating: "4/5", url: "https://open.spotify.com/track/1mk8ZC9OeTZMr8Wy31LqRj?si=71421a1345804202"},
    { name: "Away - Davido", rating: "4/5", url: "https://open.spotify.com/track/14gQ7SmMZeeEC3YAPB5vFw?si=2ef1de4adbfd4ca8"},
    { name: "Godfather - Davido", rating: "4/5", url: "https://open.spotify.com/track/6Tf5WfhWbg8wRkox9bXHPd?si=ebb63d8d599b479b"},
    { name: "Kante - Davido", rating: "4/5", url: "https://open.spotify.com/track/7vKXc90NT5WBm3UTT4iTVG?si=c88f2930515f49ff"},
    { name: "Bloody Samaritan - Ayra Starr", rating: "5/5", url: "https://open.spotify.com/track/3Keas2doqXf1veo2DOOIdz?si=5af4fa1171874569"},
    { name: "Rush - Ayra Starr", rating: "4/5", url: "https://open.spotify.com/track/1rrqJ9QkOBYJlsZgqqwxgB?si=a67190741f054546"},
    { name: "Sabilty - Ayra Starr", rating: "4/5", url: "https://open.spotify.com/track/5V9XFfvCG4WP5ZdISOLvaF?si=2d27397b2cdc4303"},
    { name: "Common Person - Burna Boy", rating: "5/5", url: "https://open.spotify.com/track/52oDXfdKV4faAFLnNyf0bl?si=b9ff7aa2f7584dcc"},
    { name: "For my Hand - Burna Boy", rating: "4/5", url: "https://open.spotify.com/track/4N7AXHRMQYh9GHQd5hE6NP?si=e6ffcf8e2d9b4ad5"},
    { name: "Last Last - Burna Boy", rating: "4/5", url: "https://open.spotify.com/track/4N7AXHRMQYh9GHQd5hE6NP?si=a3d2ac7f4c7e45d6"},
    { name: "Way Too Big - Burna Boy", rating: "5/5", url: "https://open.spotify.com/track/3bOBWIdkRyN9yaGJ7uSOTf?si=814b7c50c73046d1"},
    { name: "Anybody - Burna Boy", rating: "5/5", url: "https://open.spotify.com/track/7iCSfoLBuenTKZoWIgqY9Q?si=7d923f744f2d4cf8"}
  ],
  Asake: [
    { name: "Joha", rating: "5/5", url: "https://open.spotify.com/track/5UwxpuGHkwiojKDaPC5ZNu?si=34bce2989eb44661"},
    { name: "Dull", rating: "", url: "https://open.spotify.com/track/46gfN72BxmLvACx6Pve4XU?si=0e484fb03e4741ed"},
    { name: "Yoga", rating: "5/5", url: "https://open.spotify.com/track/79xHOEYZKZEj6fPkmhQboa?si=d6e73f1feece4fe2"},
    { name: "Sungba", rating: "4/5", url: "https://open.spotify.com/track/4k4pdUWX8632g7yByxC3rS?si=c61f00c2bf324169"},
    { name: "Nzaza", rating: "4/5", url: "https://open.spotify.com/track/0VjzaXw81JQJM61pzWwP8b?si=f9aabf0b01aa4662"}
  ],
  Davido: [
    { name: "Unavailable", rating: "5/5", url: "https://open.spotify.com/track/2kaH2Z8ezDUKf6fNw250rZ?si=1c99e47df9a94751"},
    { name: "Over Dem", rating: "5/5", url: "https://open.spotify.com/track/1KCCxeit3q5wJXxDmRgbl3?si=9403911cd19843d0"},
    { name: "Feel", rating: "4/5", url: "https://open.spotify.com/track/1mk8ZC9OeTZMr8Wy31LqRj?si=71421a1345804202"},
    { name: "Away", rating: "4/5", url: "https://open.spotify.com/track/14gQ7SmMZeeEC3YAPB5vFw?si=2ef1de4adbfd4ca8"},
    { name: "Godfather", rating: "4/5", url: "https://open.spotify.com/track/6Tf5WfhWbg8wRkox9bXHPd?si=ebb63d8d599b479b"},
    { name: "Kante", rating: "4/5", url: "https://open.spotify.com/track/7vKXc90NT5WBm3UTT4iTVG?si=c88f2930515f49ff"}
  ],
  AyraStarr: [
    { name: "Bloody Samaritan", rating: "5/5", url: "https://open.spotify.com/track/3Keas2doqXf1veo2DOOIdz?si=5af4fa1171874569"},
    { name: "Rush", rating: "4/5", url: "https://open.spotify.com/track/1rrqJ9QkOBYJlsZgqqwxgB?si=a67190741f054546"},
    { name: "Sabilty", rating: "4/5", url: "https://open.spotify.com/track/5V9XFfvCG4WP5ZdISOLvaF?si=2d27397b2cdc4303"}
  ],
  BurnaBoy: [
    { name: "Common Person", rating: "5/5", url: "https://open.spotify.com/track/52oDXfdKV4faAFLnNyf0bl?si=b9ff7aa2f7584dcc"},
    { name: "For my Hand", rating: "4/5", url: "https://open.spotify.com/track/4N7AXHRMQYh9GHQd5hE6NP?si=e6ffcf8e2d9b4ad5"},
    { name: "Last Last", rating: "4/5", url: "https://open.spotify.com/track/4N7AXHRMQYh9GHQd5hE6NP?si=a3d2ac7f4c7e45d6"},
    { name: "Way Too Big", rating: "5/5", url: "https://open.spotify.com/track/3bOBWIdkRyN9yaGJ7uSOTf?si=814b7c50c73046d1"},
    { name: "Anybody", rating: "5/5", url: "https://open.spotify.com/track/7iCSfoLBuenTKZoWIgqY9Q?si=7d923f744f2d4cf8"}
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

      <h1>Naija Spark</h1>
      <p style={{ fontSize: "medium" }}>
        Checkout our music recommendations by different Nigerian artistes
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
              border: "2px solid #065F46",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.7rem",
              background: "#ecfdf5"
            }}
            >
              <a href={song.url} style={{ fontSize: "large", color: "#065F46" }}>{song.name}</a>
              <div style={{ fontSize: "large" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
