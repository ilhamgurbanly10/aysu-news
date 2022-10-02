import SimpleSlider from './sliders/SimpleSlider';
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import {SmallPost} from './elements/Posts';
import i18next from "i18next";


const BreakingNewsSlider = (props) => {

    const {t, i18n} = useTranslation('body');

    const lan = i18next.language;

    const {breakingNews} = props;

    return (
        <section className="breaking-news container-2 mt-5 pt-5">

            <h3 className="breaking-news-main-title d-inline-block text-1 px-3 py-2 rounded-top-1 bg-darkblue">
                {t('titles.title1')}
            </h3>

            <SimpleSlider>

                { breakingNews.map((post , i)=>(

                    <SmallPost 
                        key={i} 
                        img={post.img}
                        name={post[`title_${lan}`]}
                        date={post.date}
                        to={post.to}
                    />

                ))}

            </SimpleSlider>
            
        </section>
    )

}

const mapStateToProps = ({breakingNews}) => {
    return {
        breakingNews
    }
}

  
export default connect(mapStateToProps , null)(BreakingNewsSlider)