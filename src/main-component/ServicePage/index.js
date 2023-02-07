import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ServiceList from '../../components/ServiceList'
import Footer from '../../components/footer'
import ServiceContent from "./ServiceContent";
import bg from "../../img/service_f.png";

const ServicePage = () => {
    return (
        <Fragment>
            <Header /> 
            {/* <PageTitle pageTitle={'Services'} pagesub={'Services'}/> */}
            <ServiceContent /> 
            <Footer />
        </Fragment>
    )
};
export default ServicePage;

