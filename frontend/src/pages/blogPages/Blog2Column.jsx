import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Blog2ColumnContent from '../../components/blog/Blog2ColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Blog2Column = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-2-column" title1="Blog Grid" bottomSpace="pb-0" />
            <Blog2ColumnContent />
            <FooterV1 />
        </>
    );
};

export default Blog2Column;