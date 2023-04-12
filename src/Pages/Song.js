import "./Song.css";
import React from "react";
import { useState } from "react";

var musicDB = {
  All: [
    { name: "Joha - Asake", rating: "5/5", url: "https://open.spotify.com/track/5UwxpuGHkwiojKDaPC5ZNu?si=9020933d060e4a80"},
    { name: "Dull - Asake", rating: "", url: "https://open.spotify.com/track/46gfN72BxmLvACx6Pve4XU?si=8a400d89f8a54cfe"},
    { name: "Yoga - Asake", rating: "5/5", url: "https://open.spotify.com/track/79xHOEYZKZEj6fPkmhQboa?si=9473fa1494f24b42"},
    { name: "Sungba - Asake", rating: "4/5", url: "https://open.spotify.com/track/4k4pdUWX8632g7yByxC3rS?si=76d4429d19784cce"},
    { name: "Nzaza - Asake", rating: "4/5", url: "https://open.spotify.com/track/0VjzaXw81JQJM61pzWwP8b?si=c55f29fed519484a"},
    { name: "Unavailable - Davido", rating: "5/5", url: "https://open.spotify.com/track/2kaH2Z8ezDUKf6fNw250rZ?si=1555f77c9d2b4ea6"},
    { name: "Over Dem - Davido", rating: "5/5", url: "https://open.spotify.com/track/1KCCxeit3q5wJXxDmRgbl3?si=efebcd8e69344e42"},
    { name: "Feel - Davido", rating: "4/5", url: "https://open.spotify.com/track/1mk8ZC9OeTZMr8Wy31LqRj?si=0dc7a7ae5fe549f8"},
    { name: "Away - Davido", rating: "4/5", url: "https://open.spotify.com/track/14gQ7SmMZeeEC3YAPB5vFw?si=158127ddd3024b41"},
    { name: "Godfather - Davido", rating: "4/5", url: "https://open.spotify.com/track/6Tf5WfhWbg8wRkox9bXHPd?si=eea0a15d749e4950"},
    { name: "Kante - Davido", rating: "4/5", url: "https://open.spotify.com/track/7vKXc90NT5WBm3UTT4iTVG?si=97cba170c5ab422b"},
    { name: "Bloody Samaritan - Ayra Starr", rating: "5/5", url: "https://open.spotify.com/track/3Keas2doqXf1veo2DOOIdz?si=c97db4922e8c4bcc"},
    { name: "Rush - Ayra Starr", rating: "4/5", url: "https://open.spotify.com/track/1rrqJ9QkOBYJlsZgqqwxgB?si=236cb1c13f8246e3"},
    { name: "Sabilty - Ayra Starr", rating: "4/5", url: "https://open.spotify.com/track/5V9XFfvCG4WP5ZdISOLvaF?si=eebc926b241f42ca"},
    { name: "Common Person - Burna Boy", rating: "5/5", url: "https://open.spotify.com/track/52oDXfdKV4faAFLnNyf0bl?si=a8b779b90b88445f"},
    { name: "For my Hand - Burna Boy", rating: "4/5", url: "https://open.spotify.com/track/4N7AXHRMQYh9GHQd5hE6NP?si=d716432745f84d9d"},
    { name: "Last Last - Burna Boy", rating: "4/5", url: "https://open.spotify.com/track/4LPNkxES0zCGn6S2Y1vmJN?si=768c4d1793bd4479"},
    { name: "Way Too Big - Burna Boy", rating: "5/5", url: "https://open.spotify.com/track/3bOBWIdkRyN9yaGJ7uSOTf?si=48bd2f1199964470"},
    { name: "Anybody - Burna Boy", rating: "5/5", url: "https://open.spotify.com/track/7iCSfoLBuenTKZoWIgqY9Q?si=35bf6fcc5fe24f89"}
  ],
  Asake: [
    { name: "Joha", rating: "5/5", url: "https://open.spotify.com/track/5UwxpuGHkwiojKDaPC5ZNu?si=9020933d060e4a80"},
    { name: "Dull", rating: "", url: "https://open.spotify.com/track/46gfN72BxmLvACx6Pve4XU?si=8a400d89f8a54cfe"},
    { name: "Yoga", rating: "5/5", url: "https://open.spotify.com/track/79xHOEYZKZEj6fPkmhQboa?si=9473fa1494f24b42"},
    { name: "Sungba", rating: "4/5", url: "https://open.spotify.com/track/4k4pdUWX8632g7yByxC3rS?si=76d4429d19784cce"},
    { name: "Nzaza", rating: "4/5", url: "https://open.spotify.com/track/0VjzaXw81JQJM61pzWwP8b?si=c55f29fed519484a"}
  ],
  Davido: [
    { name: "Unavailable", rating: "5/5", url: "https://open.spotify.com/track/2kaH2Z8ezDUKf6fNw250rZ?si=1555f77c9d2b4ea6"},
    { name: "Over Dem", rating: "5/5", url: "https://open.spotify.com/track/1KCCxeit3q5wJXxDmRgbl3?si=efebcd8e69344e42"},
    { name: "Feel", rating: "4/5", url: "https://open.spotify.com/track/1mk8ZC9OeTZMr8Wy31LqRj?si=0dc7a7ae5fe549f8"},
    { name: "Away", rating: "4/5", url: "https://open.spotify.com/track/14gQ7SmMZeeEC3YAPB5vFw?si=158127ddd3024b41"},
    { name: "Godfather", rating: "4/5", url: "https://open.spotify.com/track/6Tf5WfhWbg8wRkox9bXHPd?si=eea0a15d749e4950"},
    { name: "Kante", rating: "4/5", url: "https://open.spotify.com/track/7vKXc90NT5WBm3UTT4iTVG?si=97cba170c5ab422b"}
  ],
  AyraStarr: [
    { name: "Bloody Samaritan", rating: "5/5", url: "https://open.spotify.com/track/3Keas2doqXf1veo2DOOIdz?si=c97db4922e8c4bcc"},
    { name: "Rush", rating: "4/5", url: "https://open.spotify.com/track/1rrqJ9QkOBYJlsZgqqwxgB?si=236cb1c13f8246e3"},
    { name: "Sabilty", rating: "4/5", url: "https://open.spotify.com/track/5V9XFfvCG4WP5ZdISOLvaF?si=eebc926b241f42ca"}
  ],
  BurnaBoy: [
    { name: "Common Person", rating: "5/5", url: "https://open.spotify.com/track/52oDXfdKV4faAFLnNyf0bl?si=a8b779b90b88445f"},
    { name: "For my Hand", rating: "4/5", url: "https://open.spotify.com/track/4N7AXHRMQYh9GHQd5hE6NP?si=d716432745f84d9d"},
    { name: "Last Last", rating: "4/5", url: "https://open.spotify.com/track/4LPNkxES0zCGn6S2Y1vmJN?si=768c4d1793bd4479"},
    { name: "Way Too Big", rating: "5/5", url: "https://open.spotify.com/track/3bOBWIdkRyN9yaGJ7uSOTf?si=48bd2f1199964470"},
    { name: "Anybody", rating: "5/5", url: "https://open.spotify.com/track/7iCSfoLBuenTKZoWIgqY9Q?si=35bf6fcc5fe24f89"}
  ],
};

export default function Song() {
  const [selectedArtist, setSelectedArtist] = useState("All");

  function artistClickHandler(artistName) {
    setSelectedArtist(artistName);
  }
  return (
    <div className="Song">
      <div className="Song-header">

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
