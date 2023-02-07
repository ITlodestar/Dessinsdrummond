import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProjectSingle from '../../components/ProjectSingle'
import Testimonial from '../../components/testimonial'
import Footer from '../../components/footer'
import { useParams } from 'react-router'



const ProjectPage =() => {
    const { id } = useParams();
    return(
        <Fragment>
            <Header/>
            <PageTitle projectId={ id } pageTitle={'PROJECT DETAILS'} pagesub={'Project Details'}  />
            <ProjectSingle projectId={ id }/>
            <Testimonial/>
            <Footer/>
        </Fragment>
    )
};
export default ProjectPage;

