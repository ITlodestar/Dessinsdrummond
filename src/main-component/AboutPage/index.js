import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Feature from '../../components/feature'
import Partners from '../../components/partners'
import Expertise from '../../components/expertise'
import Team from '../../components/team'
import Footer from '../../components/footer'



const AboutPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/>
            <Feature/>
            <Partners/>
            <Expertise/>
            <Team/>
            <Footer/>
        </Fragment>
    )
};
export default AboutPage;

