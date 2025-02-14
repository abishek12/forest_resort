import React from 'react';
import ProjectGalleryData from '../../jsonData/ProjectGalleryData.json'
import SingleProjectV2 from './SingleProjectV2';

const ProjectV2 = () => {
    return (
        <>
            <div className="project-style-two-area default-padding">
                <div className="shape-top-dark"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-light text-center">
                                <h5 className="sub-title">Recent Case Studies</h5>
                                <h2 className="title">Take a look some of <br /> our recent case studies</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 gallery-content">
                                    <div className="magnific-mix-gallery masonary">
                                        <div id="gallery-masonary" className="gallery-items colums-3">
                                            {ProjectGalleryData.slice(0, 3).map(gallery =>
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

export default ProjectV2;