import { BackToTopBtn } from '../components/elements/Buttons';
import Header from '../components/Header';
import GreenHeader from '../components/GreenHeader';
import GreenHeader2 from '../components/GreenHeader2';
import Footer from '../components/Footer';
import Head from '../components/Head';
import FlashProgress from '../components/flash/Progress';
import { useEffect, useState } from 'react';
import { endProgress } from '../components/flash/Progress';
import {FlashGetPageName} from '../components/flash/Functions';

const Layout = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
  }, []);

  useEffect(() => {
      if (isLoaded) { endProgress(); }
  }, [isLoaded]);

  const getHeader = () => {
    const page = FlashGetPageName();
    if (page == "Home") return <Header/>;
    else if (page == "Results") return <GreenHeader2/>;
    else return <GreenHeader/>;
  } 

  return (
    <>  
      <Head/>
      <FlashProgress/>
      {getHeader()}
      {props.children}
      <BackToTopBtn/>
      <Footer/>
    </>
  )
};

export default Layout;