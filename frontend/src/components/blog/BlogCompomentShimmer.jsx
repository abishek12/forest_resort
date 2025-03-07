import React from "react";

const BlogComponentShimmer = () => {
  return (
    <div className="tw-rounded-lg tw-bg-white tw-shadow-md tw-overflow-hidden animate-pulse">
      <div className="tw-p-4">
        {/* Image Shimmer */}
        <div className="tw-w-full tw-h-48 sm:tw-h-56 lg:tw-h-64 tw-bg-gray-300 tw-rounded-md"></div>

        {/* Title Shimmer */}
        <div className="tw-mt-4 tw-h-6 tw-bg-gray-300 tw-rounded-md tw-w-3/4"></div>

        {/* Date Line Shimmer */}
        <div className="tw-relative tw-mb-4 tw-mt-2">
          <div className="tw-h-4 tw-bg-gray-300 tw-rounded-md tw-w-1/3"></div>
          <svg
            width="100%"
            height="2"
            className="tw-absolute tw-bottom-0 tw-left-0"
          >
            <line x2="100%" y2="100%" stroke="#1A7218F2" strokeWidth="2" />
          </svg>
        </div>

        {/* Content Shimmer */}
        <div className="tw-space-y-2">
          <div className="tw-h-4 tw-bg-gray-300 tw-rounded-md tw-w-full"></div>
          <div className="tw-h-4 tw-bg-gray-300 tw-rounded-md tw-w-5/6"></div>
          <div className="tw-h-4 tw-bg-gray-300 tw-rounded-md tw-w-4/6"></div>
        </div>

        {/* Read More Button Shimmer */}
        <div className="tw-flex tw-items-center tw-mt-4">
          <div className="tw-h-4 tw-bg-gray-300 tw-rounded-md tw-w-20"></div>
          <div className="tw-ml-1 tw-h-4 tw-w-4 tw-bg-gray-300 tw-rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponentShimmer;
