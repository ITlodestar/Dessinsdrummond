import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Portfolio from '../../components/portfolio'
import Footer from '../../components/footer'



const PortfolioPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PORTFOLIO'} pagesub={'Portfolio'}/>
            <Portfolio/>
            <Footer/>
        </Fragment>
    )
};
export default PortfolioPage;

