import { useEffect, useState } from "react";
import React from "react";
import { unsplashService } from "../services/unsplash.service";
import { constService } from "../services/const-service";

export function BackgroundPicker({ setNewBoard }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getUnsplash();
  }, []);

  async function getUnsplash() {
    const photos = await unsplashService.getUnsplashList30();
    setPhotos(photos);
    console.log(photos);
  }

  return (
    <div className="background-picker-container">
      <label htmlFor="bg-list">Background</label>
      <div id="bg-list">
        <ul className="bg-list-photos">
          {photos.slice(0, 4).map((photo) => (
            <li key={photo.id}>
              <button
                className="bg-photo-thumb"
                onClick={() =>
                  setNewBoard((prev) => ({
                    ...prev,
                    style: { backgroundImage: `url(${photo.urls.regular})` },
                  }))
                }
                style={{ backgroundImage: `url(${photo.urls.thumb})` }}
              ></button>
            </li>
          ))}
        </ul>
        <ul className="bg-list-colors">
          {constService.gradColors.slice(0, 5).map((color) => (
            <li key={color.id}>
              <button
                className="bg-color-thumb"
                onClick={() =>
                  setNewBoard((prev) => ({
                    ...prev,
                    style: { background: color.color },
                  }))
                }
                style={{ background: color.color }}
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
