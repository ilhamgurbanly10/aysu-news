import { Link } from "react-router-dom";
import { Title1 } from './elements/Titles';
import { Text1 } from './elements/Texts';
import { Item } from './elements/Items';
import { about } from './Images';

function About() {

    return (
        <section className='about container-1 mt-6'>
           
           <div className="about-list row w-100 gx-0 mx-auto">
                
                <div className="about-item col-12 col-lg-7">

                    <Title1>
                    Use Domain Finder to find <br/> unique domains!
                    </Title1>

                    <Text1 className="mt-3">
                    Millions of people are searching for companies, domains, meta tags, 
                    company  <br/> names and etc., on Domain Finder.Try today! <strong>1 000 000</strong> data
                    for your search.
                    </Text1>

                    <div className="about-inner-list d-flex flex-column flex-lg-row justify-content-start mt-5 pt-4 align-items-lg-center">

                        <Item num="1" className="me-lg-3">
                            Type to search
                        </Item>

                        <Item num="2" className="me-lg-3 mt-3 mt-lg-0">
                            Find domains
                        </Item>

                        <Item num="3" className="mt-3 mt-lg-0" arrow="false">
                            Filter them
                        </Item>

                    </div>

                </div>

                <div className="about-item col-12 col-lg mt-5 mt-lg-0">
                    <img src={about} alt="About Image" className="img-fluid"/>
                </div>

           </div>
            
        </section>
    );
}
  
export default About;