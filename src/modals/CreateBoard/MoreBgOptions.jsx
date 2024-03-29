import { RootModalHeader } from "../RootModalHeader";
import { constService } from "../../services/const.service";
import { unsplashService } from "../../services/unsplash.service";
import { useState, useEffect } from "react";

export function MoreBgOptions({ handleCloseModal, photos, setNewBoard }) {
  return (
    <div className="all-bg-container">
      <header className="root-modal-header">
        <h2 className="modal-title">Board background</h2>
        <button
          className="close-modal transparent-btn-black"
          onClick={handleCloseModal}
        >
          <i className="icon-close-regular"></i>
        </button>
      </header>
      <section className="bg-display-container">
        <header className="photoNcolor-bg-header">
          <h2>Photos</h2>
          {/* <button className="see-more-photos transparent-btn-black ">
            See More
          </button> */}
        </header>
        <ul className="bg-photos-list-more">
          {photos.slice(0, 9).map((photo) => (
            <li key={photo.id}>
              <button
                className="bg-photo-thumb"
                style={{ backgroundImage: `url(${photo.urls.thumb})` }}
                onClick={() =>
                  setNewBoard((prev) => ({
                    ...prev,
                    style: { backgroundImage: `url(${photo.urls.full})` },
                  }))
                }
              ></button>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-display-container">
        <header className="photoNcolor-bg-header">
          <h2>Colors</h2>
          {/* <button className="see-more-colors>See More</button> */}
        </header>
        <ul className="bg-colors-list-more">
          {constService.gradColorPics.map((color) => (
            <li key={color.id}>
              <button
                className="bg-photo-thumb"
                onClick={() =>
                  setNewBoard((prev) => ({
                    ...prev,
                    style: { backgroundImage: `url(${color.color})` },
                  }))
                }
                style={{ backgroundImage: `url(${color.color})` }}
              ></button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
