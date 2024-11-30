import React, { useEffect, useState } from "react";
import axios from "axios";

const SpotifyClone = () => {
  const [songs, setSongs] = useState([]); // Songs data store karne ke liye state

  useEffect(() => {
    const fetchSongs = async () => {
      const options = {
        method: "GET",
        url: "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks", // Replace with your API endpoint
        params: { id: "40008598", locale: "en-US" }, // Replace with your required params
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setSongs(response.data.tracks); // Adjust this based on API response structure
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Spotify Clone</h1>
      {songs.length > 0 ? (
        <ul className="space-y-3">
          {songs.map((song, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src={song.images.coverart}
                alt={song.title}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h2 className="font-semibold">{song.title}</h2>
                <p className="text-sm text-gray-600">{song.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading songs...</p>
      )}
    </div>
  );
};

export default SpotifyClone;
