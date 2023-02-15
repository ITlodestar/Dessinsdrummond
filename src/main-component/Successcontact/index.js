import React, { Fragment } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Success from "../../img/success.png"
import { withTranslation } from 'react-i18next';

const Successcontact = ({ t }) => {
    return (
        <Fragment>
            <Header />
            <section>
                <div className="container pt-5 text-center">
                    <img src={Success} alt="image" className='p-4'/>
                    <h1>{t("SuccessFull")}</h1>
                </div>
            </section>

            <Footer />
        </Fragment>
    )
};
export default withTranslation()(Successcontact);