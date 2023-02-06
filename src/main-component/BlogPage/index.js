import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'


const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'BLOG'} pagesub={'Blog Byasi'}/> 
            <BlogList/>
            <Footer/>
        </Fragment>
    )
};
export default ContactPage;

