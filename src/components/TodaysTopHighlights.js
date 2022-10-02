import {useTranslation} from "react-i18next";
import {connect} from 'react-redux';
import i18next from "i18next";
import {Post} from './elements/Posts';
import {SiderBtnList} from './elements/Lists';
import {SiderPostList} from './elements/Lists';
import {product01} from './Images';
import { Link } from "react-router-dom";


const TodaysTopHighlights = (props) => {

    const {t, i18n} = useTranslation('body');

    const lan = i18next.language;

    const {todaysTopHighlights, siderLinks, popularNews} = props;

    return (
        <section className="todays-top-highlights container-1 mt-5 pt-2">
            
            <h2 className="todays-top-highlights-main-title d-inline-block title-2 title-underline">
                {t('titles.title3')}
            </h2>

            <div className="todays-top-highlights-container row gx-0 mx-auto w-100">

                <div className="todays-top-highlights-list list-2 p-6 bor-2 mt-4 col-12 col-lg-8">

                    { todaysTopHighlights.map((post , i)=>(

                        <Post 
                            className="todays-top-highlights-post"
                            imgClassName="img-container-2"
                            key={i} 
                            img={post.img}
                            name={post[`title_${lan}`]}
                            type={post[`type_${lan}`]}
                            adminName={post.adminName}
                            adminImg={post.adminImg}
                            to={`/news?id=${post.id}`}
                            adminTo={post.adminTo}
                            date={post.date}
                            text={post[`text_${lan}`]}
                        />

                    ))}

                </div>

                <div className="todays-top-highlights-sider-container mt-5 mt-lg-0 col-12 col-lg ms-lg-5">
                    
                    <SiderBtnList siderLinks={siderLinks} title={t('titles.title4')} />

                    <SiderPostList siderPosts={popularNews} className="popular-post" title={t('titles.title5')}/>

                    <Link className="product-link" to="/">
                        <img src={product01} alt="Product Image" className="w-100 h-auto d-block mt-5"/>
                    </Link>    
                </div>

            </div>    

        </section>
    )

}

const mapStateToProps = ({todaysTopHighlights, siderLinks, popularNews}) => {
    return {
        todaysTopHighlights, siderLinks, popularNews
    }
}

  
export default connect(mapStateToProps , null)(TodaysTopHighlights)