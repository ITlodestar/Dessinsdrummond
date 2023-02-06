import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogSingle'
import Footer from '../../components/footer'


const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'BLOG DETAILS'} pagesub={'Blog Details'}/> 
            <BlogSingle/>
            <Footer/>
        </Fragment>
    )
};
export default ContactPage;

