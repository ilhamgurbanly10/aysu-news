import { Link } from "react-router-dom";
import { Title2 } from './elements/Titles';
import { Text1 } from './elements/Texts';
import { about2 } from './Images';

function AboutUsSection() {

    return (
        <section className='about-us w-100 position-relative'>

            <div className="bg-green w-100 start-0 top-0 py-4 position-absolute"></div>

            <div className="about-us-container container-1 position-relative layer-3">
            
                <div className="about-us-img-container img-container">
                    <img src={about2} alt="About Us Image" className="about-us-img w-100 h-auto d-block"/>
                </div>

                <div className="about-us-text-container border-1 p-4">

                    <Title2>About us</Title2>

                    <Text1 className="about-us-text mt-4">
                        What is Lorem Ipsum ? <br/>
                        The lorem ipsum is a placeholder text used in publishing a
                        nd graphic design. This filler text is a short paragraph 
                        that contains all the letters of the alphabet. The characters are 
                        spread out evenly so that the reader's 
                        attention is focused on the layout of the text instead of its content.
                    </Text1>

                    <Text1 className="about-us-text mt-4">
                        Why do we use it ? <br/>
                        The lorem ipsum is a placeholder text used in publishing a
                        nd graphic design. This filler text is a short paragraph 
                        that contains all the letters of the alphabet. The characters are 
                        spread out evenly so that the reader's 
                        attention is focused on the layout of the text instead of its content.
                    </Text1>

                </div>

            </div>

        </section>
    );
}
  
export default AboutUsSection;