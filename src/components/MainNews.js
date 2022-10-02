import {MainPostsItem} from './elements/Items'
import { mainNewsImg01 } from './Images';
import { mainNewsImg02 } from './Images';
import { mainNewsImg03 } from './Images';
import { mainNewsImg04 } from './Images';
import { admin01 } from './Images';
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const MainNews = (props) => {

    const {mainNews} = props;

    const [firstMainNews, secondMainNews, thirdMainNews, fourthMainNews] = mainNews;

    const {t, i18n} = useTranslation('body');

    const lan = i18next.language;

    return (
        <section className="main-news container-1 mt-6">

            <div className="main-news-list row w-100 gx-0 mx-auto">

                <div className="main-news-item col-12 col-lg me-lg-2">

                    <MainPostsItem 
                        to={`/news?id=${firstMainNews.id}`} 
                        img={firstMainNews.img} 
                        adminImg={firstMainNews.adminImg}
                        adminName={firstMainNews.adminName}
                        adminTo={firstMainNews.adminTo}
                        date={firstMainNews.date}
                        title={firstMainNews[`type_${lan}`]} 
                        className="height-1"
                        linkClassName="responsive-bigger-font"
                        name={firstMainNews[`title_${lan}`]}
                        text={firstMainNews[`text_${lan}`]}
                    />

                </div>

                <div className="main-news-item col-12 col-lg ms-lg-2 mt-3 mt-lg-0 row mx-auto gx-0 flex-wrap">
                    
                    <MainPostsItem 
                        to={`/news?id=${secondMainNews.id}`}  
                        img={secondMainNews.img} 
                        adminName={secondMainNews.adminName} 
                        adminTo={secondMainNews.adminTo}
                        date={secondMainNews.date} 
                        title={secondMainNews[`type_${lan}`]} 
                        className="col-12 height-3"
                        name={secondMainNews[`title_${lan}`]}
                    />

                    <MainPostsItem 
                        to={`/news?id=${thirdMainNews.id}`}  
                        img={thirdMainNews.img} 
                        adminName={thirdMainNews.adminName} 
                        adminTo={thirdMainNews.adminTo}
                        date={thirdMainNews.date} 
                        title={thirdMainNews[`type_${lan}`]} 
                        className="col-12 col-lg me-lg-2 mt-3 height-2"
                        name={thirdMainNews[`title_${lan}`]}
                    />

                    <MainPostsItem 
                        to={`/news?id=${fourthMainNews.id}`}  
                        img={fourthMainNews.img} 
                        adminName={fourthMainNews.adminName} 
                        adminTo={fourthMainNews.adminTo}
                        date={fourthMainNews.date} 
                        title={fourthMainNews[`type_${lan}`]} 
                        className="col-12 col-lg ms-lg-2 mt-3 height-2"
                        name={fourthMainNews[`title_${lan}`]}
                    />

                </div>

            </div>

        </section>
    )

}

const mapStateToProps = ({mainNews}) => {
    return {
        mainNews
    }
}

  
export default connect(mapStateToProps , null)(MainNews)