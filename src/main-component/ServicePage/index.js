import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ServiceList from '../../components/ServiceList'
import Footer from '../../components/footer'



const ServicePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Why choose turnkey construction?'} />
            <ServiceList/>
            <Footer/>
        </Fragment>
    )
};
export default ServicePage;

