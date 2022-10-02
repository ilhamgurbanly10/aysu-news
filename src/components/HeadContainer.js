import React from "react";
import {IconicBtn} from "./elements/Buttons";
import {useTranslation} from "react-i18next";

const HeadContainer = () => {

    const {t, i18n} = useTranslation('header');

    return (
        <div className="head-container container-1 bg-white">

            <div className="head-container-list border-bottom-1 pt-2 pb-3 d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center">
                
                <div className="head-container-item d-flex align-items-center">

                    <div className="head-container-text-box text-white px-2 py-1 bg-darkgrey me-3">
                        {t('HeadContainer.allNews') }
                    </div>

                    <p className="head-container-text txt-darkgrey m-0 normal-font">
                        {t('HeadContainer.allNewsText') }
                    </p>

                </div>

                <div className="head-container-divider w-100 d-lg-none pt-4"></div>

                <div className="head-container-item d-flex align-items-center">

                    <IconicBtn className="head-container-btn me-3" to="/" icon="facebook"/>
                    <IconicBtn className="head-container-btn me-3" to="/" icon="twitter"/>
                    <IconicBtn className="head-container-btn me-3" to="/" icon="instagram"/>
                    <IconicBtn className="head-container-btn" to="/" icon="google"/>

                </div>

            </div>
            
        </div>
    )
}

export default HeadContainer;