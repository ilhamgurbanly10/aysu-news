import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import {useTranslation} from "react-i18next";



export const Languages = (props) => {
    
    const {t, i18n} = useTranslation('footer');

    const {placement} = props;

    const changeLan = (lan) => {
        i18n.changeLanguage(lan);
        localStorage.setItem('locale', lan);
    }

    const locale = localStorage.getItem('locale').toUpperCase();
    
    const langueageButtons = (
      <Menu
        items={[
          {
            key: '1',
            label: (
                <button onClick={() => { changeLan('az') }} className="btn btn-primary">AZ</button>
            ),
          },
          {
            key: '2',
            label: (
                <button onClick={() => { changeLan('de') }} className="btn btn-primary">DE</button>
            ),
          },
          {
            key: '3',
            label: (
                <button onClick={() => { changeLan('en') }} className="btn btn-primary">EN</button>
            ),
          },
        ]}
      />
    );


    return (
        <>   
            <Dropdown
                overlay={langueageButtons}
                placement={placement}
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <Button className="btn-4">{locale}</Button>
            </Dropdown>   
        </>
    ) 

}


            

        /* // <div className={`languages ${className}`}>

        //     <div className="btn-group dropup-center dropup">

        //         <button type="button" className={`dropdown-toggle btn-4 ${btnClass}`} data-bs-toggle="dropdown" aria-expanded="false">
        //             EN
        //         </button>

        //         <ul className="dropdown-menu dropdown-2">
        //             <Link to="/" className="btn-5 d-block">RU</Link>
        //             <Link to="/" className="btn-5 d-block">AZ</Link>
        //         </ul>

        //     </div>

        // </div>  */


