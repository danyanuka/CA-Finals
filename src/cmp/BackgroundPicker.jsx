import { useEffect, useState } from "react";
import React from "react";
import { unsplashService } from "../services/unsplash.service";

export function BackgroundPicker({ setNewBoard }) {
  const [photos, setPhotos] = useState([]);
  const colors = [
    "rgb(0, 121, 191)",
    "rgb(210, 144, 52) ",
    "rgb(81, 152, 57)",
    "rgb(176, 70, 50)",
    "rgb(137, 96, 158)",
    "rgb(205, 90, 145)",
    "rgb(75, 191, 107)",
    "rgb(0, 174, 204)",
    "rgb(131, 140, 145)",
  ];

  useEffect(() => {
    getUnsplash();
  }, []);

  async function getUnsplash() {
    const photos = await unsplashService.getUnsplashList30();
    setPhotos(photos);
    console.log(photos);
  }

  // if (!photos) return <>Loading...</>;
  return (
    <div className="background-picker-container">
      <label htmlFor="bg-list">Background</label>
      <div id="bg-list">
        <ul className="bg-list-photos">
          {photos.slice(0, 4).map((photo) => (
            <li>
              <button
                onClick={() =>
                  setNewBoard((prev) => ({
                    ...prev,
                    style: { backgroundImage: `url(${photo.urls.regular})` },
                  }))
                }
                key={photo.id}
                style={{ backgroundImage: `url(${photo.urls.thumb})` }}
              ></button>
            </li>
          ))}
        </ul>
        <ul className="bg-list-colors">
          {colors.slice(0, 5).map((color) => (
            <li>
              <button
                onClick={() =>
                  setNewBoard((prev) => ({
                    ...prev,
                    style: { backgroundColor: color },
                  }))
                }
                style={{ backgroundColor: color }}
              ></button>
            </li>
          ))}
          <li className="transparent-btn-black">
            <button className="bg-more-options  ">
              <i className="icon-more-options"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
