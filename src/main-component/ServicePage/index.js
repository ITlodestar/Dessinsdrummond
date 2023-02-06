import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ServiceList from '../../components/ServiceList'
import Footer from '../../components/footer'



const ServicePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'SERVICE'} pagesub={'Service'}/>
            <ServiceList/>
            <Footer/>
        </Fragment>
    )
};
export default ServicePage;

