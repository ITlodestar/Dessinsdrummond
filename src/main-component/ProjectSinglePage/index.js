import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProjectSingle from '../../components/ProjectSingle'
import Testimonial from '../../components/testimonial'
import Footer from '../../components/footer'



const ProjectPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PROJECT DETAILS'} pagesub={'Project Details'}/>
            <ProjectSingle/>
            <Testimonial/>
            <Footer/>
        </Fragment>
    )
};
export default ProjectPage;

