import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogSingleSidebarContent from '../../components/blog/BlogSingleSidebarContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import BlogV1Data from '../../jsonData/BlogV1Data.json'
import HeaderV1 from '../../components/header/HeaderV1';

const BlogSingleSidebar = () => {

    const { id } = useParams()
    const data = BlogV1Data.filter(blog => blog.id === parseInt(id))[0]

    return (
        <>
            <HeaderV1 />
            <BreadCrumb breadCrumb="blog-single-sidebar" title1={data.title} bottomSpace="pb-0" />
            <BlogSingleSidebarContent blogInfo={data} />
            <FooterV1 />
        </>
    );
};

export default BlogSingleSidebar;