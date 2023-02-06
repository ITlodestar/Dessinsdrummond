import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Error from '../../components/404'
import Footer from '../../components/footer'


const ErrorPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'ERROR'} pagesub={'404 Notfound'}/> 
            <Error/>
            <Footer/>
        </Fragment>
    )
};
export default ErrorPage;

