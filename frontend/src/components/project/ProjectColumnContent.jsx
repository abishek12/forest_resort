import React from 'react';
import ProjectGalleryData from '../../jsonData/ProjectGalleryData.json'
import SingleProjectV2 from './SingleProjectV2';

const ProjectColumnContent = ({ columns }) => {
    return (
        <>
            <div className="project-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 gallery-content">
                                    <div className="magnific-mix-gallery masonary">
                                        <div id="gallery-masonary" className={`gallery-items  ${columns ? columns : "colums-2"}`}>
                                            {ProjectGalleryData.map(gallery =>
                                                <SingleProjectV2 gallery={gallery} key={gallery.id} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectColumnContent;