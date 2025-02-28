import React from "react";
import GalleryWidgetData from "../../jsonData/GalleryWidgetData.json";
import { HashLink as Link } from "react-router-hash-link";

const GalleryWidget = () => {
  return (
    <>
      <div className="sidebar-item gallery">
        <h4 className="title">Gallery</h4>
        <div className="sidebar-info">
          <ul>
            {GalleryWidgetData.map((gallery) => (
              <li key={gallery.id}>
                <Link to="#">
                  <img
                    loading="lazy"
                    src={`/img/gallery/${gallery.thumb}`}
                    alt="thumb"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GalleryWidget;
