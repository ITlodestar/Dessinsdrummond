import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/service_f.png";
import { withTranslation } from 'react-i18next';

import "./style.css";

const ServiceContent = ({ t }) => {
    return (
        <div className="row service">
            <div className="col-xl-6 content">
                <h1 className="q_text">{t('Services.question_1')}</h1>
                <h5>{t('Services.content_1')}</h5>
                <h2>{t('Services.question_2')}</h2>
                <p>{t('Services.content_2')}</p>
                <h2>{t('Services.content_3.p')}</h2>
                <p>-{t('Services.content_3.tree_1')}</p>
                <p>-{t('Services.content_3.tree_2')}</p>
                <p>-{t('Services.content_3.tree_3')}</p>
                <p>-{t('Services.content_3.tree_4')}</p>
                <p>-{t('Services.content_3.tree_5')}</p>
                <h2>{t('Services.content_4')}</h2>
                <p>{t('Services.content_5')}</p>
                <p>{t('Services.content_6')}</p>
            </div>
            <div className="col-xl-6 img"> 
            </div>
        </div>
    )
}

export default withTranslation()(ServiceContent);