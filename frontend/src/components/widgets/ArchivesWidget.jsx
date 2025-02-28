import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ArchiveData from "../../jsonData/ArchiveData.json";

const ArchivesWidget = () => {
  return (
    <>
      <div className="sidebar-item archives">
        <h4 className="title">Archives</h4>
        <div className="sidebar-info">
          <ul>
            {ArchiveData.map((archive) => (
              <li key={archive.id}>
                <Link to="/blogs#">{archive.month}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArchivesWidget;
