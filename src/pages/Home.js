import MainNews from '../components/MainNews';
import BreakingNewsSlider from '../components/BreakingNewsSlider';
import TodaysTopHighlights from '../components/TodaysTopHighlights';
import SponsoredNews from '../components/SponsoredNews';
import Subscribe from '../components/Subscribe';

function Home() {
    return (
      <>
        <MainNews/>
        <BreakingNewsSlider/>
        <TodaysTopHighlights/>
        <SponsoredNews/>
        <Subscribe/>
      </>  
    );
}
  
export default Home;