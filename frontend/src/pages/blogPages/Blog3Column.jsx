import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Blog3ColumnContent from '../../components/blog/Blog3ColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Blog3Column = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-3-column" title1="Blog Grid" bottomSpace="pb-0" />
            <Blog3ColumnContent />
            <FooterV1 />
        </>
    );
};

export default Blog3Column;