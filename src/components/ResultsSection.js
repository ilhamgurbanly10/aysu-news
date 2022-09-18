import { Link } from "react-router-dom";
import { Title2 } from './elements/Titles';
import { Text1 } from './elements/Texts';
import SideForm from './forms/SideForm';
import { Result } from './elements/Items';

function ResultsSection() {

    return (
        <section className='results mt-5 pt-5 container-1'>

            <div className="results-list row gx-0 mx-auto w-100">

                <div className="results-item col-12 col-lg-3">

                    <Title2 className="color-darkgrey">FILTERS</Title2>
                    <SideForm className="mt-4" id="companySectors" inputClass="input-3" checkboxClass="checkbox-container checkbox-container-3" togglerClass="text-btn-4" togglerContent="Company Sectors" values={["Administrative","Arts & Design","Business", "Consulting", "Customer Services & Support"]}></SideForm>
                    <SideForm className="mt-4" id="Country" inputClass="input-3" checkboxClass="checkbox-container checkbox-container-3" togglerClass="text-btn-4" togglerContent="Country" values={["Worldwide","United States","Azerbaijan", "Russia", "Turkey"]}></SideForm>
                    <SideForm className="mt-4" id="Metatags" inputClass="input-3" checkboxClass="checkbox-container checkbox-container-3" togglerClass="text-btn-4" togglerContent="Metatags" values={["Metatag 1","Metatag 2","Metatag 3", "Metatag 4", "Metatag 5"]}></SideForm>
                    <SideForm className="mt-4" id="AlexaPoints" inputClass="input-3" checkboxClass="checkbox-container checkbox-container-3" togglerClass="text-btn-4" togglerContent="Alexa points" values={["5 star","4 star","3 star", "2 star", "1 star"]}></SideForm>
                    <SideForm className="mt-4" id="Colors" inputClass="input-3" checkboxClass="checkbox-container checkbox-container-3" togglerClass="text-btn-4" togglerContent="Colors" values={["Green","Red","Yellow", "Blue", "White"]}></SideForm>
                    
                </div>

                <div className="results-item col-12 col-lg ms-lg-5 mt-5 mt-lg-0">

                    <Title2 className="color-darkgrey">
                        Showing: 599 filtered domains
                    </Title2>

                    <Result 
                        className="mt-4" 
                        name="Adobe"
                        bottomName="Adobe: Creative, marketing and document managment..." 
                        bottomText="The lorem ipsum is a placeholder text used in publishing a
                        nd graphic design. This filler text is a short paragraph 
                        that contains all the letters of the alphabet."
                        linkClass="btn-3 grow-on-hover"
                        contents={["adobe", "design", "creative", "designer", "photoshop", "illsustrator"]}
                        localRating="3.5"
                        globalRating="5.0"
                    />

                    <Result 
                        className="mt-4" 
                        name="Adobe"
                        bottomName="Adobe: Creative, marketing and document managment..." 
                        bottomText="The lorem ipsum is a placeholder text used in publishing a
                        nd graphic design. This filler text is a short paragraph 
                        that contains all the letters of the alphabet."
                        linkClass="btn-3 grow-on-hover"
                        contents={["adobe", "design", "creative", "designer", "photoshop", "illsustrator"]}
                        localRating="3.5"
                        globalRating="5.0"
                    />

                    <Result 
                        className="mt-4" 
                        name="Adobe"
                        bottomName="Adobe: Creative, marketing and document managment..." 
                        bottomText="The lorem ipsum is a placeholder text used in publishing a
                        nd graphic design. This filler text is a short paragraph 
                        that contains all the letters of the alphabet."
                        linkClass="btn-3 grow-on-hover"
                        contents={["adobe", "design", "creative", "designer", "photoshop", "illsustrator"]}
                        localRating="3.5"
                        globalRating="5.0"
                    />

                    <Result 
                        className="mt-4" 
                        name="Adobe"
                        bottomName="Adobe: Creative, marketing and document managment..." 
                        bottomText="The lorem ipsum is a placeholder text used in publishing a
                        nd graphic design. This filler text is a short paragraph 
                        that contains all the letters of the alphabet."
                        linkClass="btn-3 grow-on-hover"
                        contents={["adobe", "design", "creative", "designer", "photoshop", "illsustrator"]}
                        localRating="3.5"
                        globalRating="5.0"
                    />

                </div>

            </div>

        </section>
    );
}
  
export default ResultsSection;