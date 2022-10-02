import {useTranslation} from "react-i18next";
import {connect} from 'react-redux';
import i18next from "i18next";
import {Post} from './elements/Posts';


const SponsoredNews = (props) => {

    const {t, i18n} = useTranslation('body');

    const lan = i18next.language;

    const {sponsoredNews} = props;

    return (
        <section className="sponsored-news container-1 mt-5 pt-2">
            
            <h2 className="sponsored-news-main-title d-inline-block title-2 title-underline">
                {t('titles.title2')}
            </h2>

            <div className="sponsored-news-list list-1 mt-4 pt-1">

                { sponsoredNews.map((post , i)=>(

                    <Post 
                        className="sponsored-news-post"
                        imgClassName="img-container-1"
                        key={i} 
                        img={post.img}
                        name={post[`title_${lan}`]}
                        type={post[`type_${lan}`]}
                        adminName={post.adminName}
                        adminImg={post.adminImg}
                        to={`/news?id=${post.id}`}
                        adminTo={post.adminTo}
                        date={post.date}
                    />

                ))}

            </div>

        </section>
    )

}

const mapStateToProps = ({sponsoredNews}) => {
    return {
        sponsoredNews
    }
}

  
export default connect(mapStateToProps , null)(SponsoredNews)