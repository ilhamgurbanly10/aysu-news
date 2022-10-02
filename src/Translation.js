import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

function Translation()
{
    const {t, i18n} = useTranslation('header');

    const changeLan = (lan) => {
        i18n.changeLanguage(lan);
        localStorage.setItem('locale', lan);
    }

    return ( 
        <div className="mt-5 w-50 mx-auto text-center">
            {/* <h1>{t('welcome.title', {framework:'React'}) }</h1> */}
            <button onClick={() => { changeLan('de') }} className="btn btn-success mt-5 me-5">de</button>
            <button onClick={() => { changeLan('en') }} className="btn btn-success mt-5">en</button>
            <button onClick={() => { changeLan('az') }} className="btn btn-success mt-5">az</button>
        </div>
    )
}

export default Translation;