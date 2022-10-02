import {useTranslation} from "react-i18next";
import {bgImage01} from "./Images";
import {SubscribeForm} from "./elements/Forms";

const Subscribe = () => {

    const {t, i18n} = useTranslation('body');

    return (
        <section className="subscribe container-3 mt-7 d-flex rounded-7 bg-img-1 flex-column justify-content-center align-items-center px-3 py-5" style={{backgroundImage:`url(${bgImage01})`}}>
            
            <h2 className="subscribe-title title-2 text-center mt-lg-4 txt-white responsive-bigger-font">
                {t('titles.title6') }
            </h2>

            <h4 className="subscribe-text text-1 mt-3 text-center responsive-bigger-font-2 mb-5">
                {t('texts.text1') }
            </h4>

            <SubscribeForm/>

        </section>
    )

}

export default Subscribe;