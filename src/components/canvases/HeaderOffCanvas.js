import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { logo2 } from '../Images';
import { latestNewsImg01 } from '../Images';
import { latestNewsImg02 } from '../Images';
import { latestNewsImg03 } from '../Images';
import { TextBtn } from '../elements/Buttons';
import { PostsItem } from '../elements/Items';
import {useTranslation} from "react-i18next";

const HeaderOffCanvasContext = ({ name, ...props }) => {

  const {t, i18n} = useTranslation('header');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className="toggler">
        <span className="toggler-line"></span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props} className="bg-black offcanvas-close-btn">

        <Offcanvas.Header closeButton className="mt-3 d-flex justify-content-end"></Offcanvas.Header>

        <Offcanvas.Body className="mt-4 px-5 d-flex flex-column">
          <img src={logo2} alt="Brand Image" className="brand-img"/>

          <TextBtn to="\" className="mt-5">
              {t('links.latestNews')}
          </TextBtn>

          <div className="header-offcanvas-posts-list mt-3">
            <PostsItem img={latestNewsImg01} date="20 Jun 2022" name="Perfect Photo Clicking Idea You Must Know." to="/"/>
            <PostsItem img={latestNewsImg02} className="mt-4" date="23 Jun 2022" name="Best tourism site all over the world." to="/"/>
            <PostsItem img={latestNewsImg03} className="mt-4" date="8 Apr 2022" name="Whats In Trend in Now  Woman Fashion." to="/"/>
          </div>

          <div className="header-offcanvas-contact-us mt-4">
            
            <h3 className="header-offcanvas-contact-us-title title-1">Contact Us</h3>

            <div className="header-offcanvas-contact-us-item mt-4 text-1 d-flex justify-content-start align-items-start">
              <i className="fa fa-map-marker me-3 bigger-font-2"></i>
              <div className="text-1 mx-0">
                68D, Belsion Town 2365 <br/> 
                Fna city, LH 3656, USA
              </div>
            </div>

            <div className="header-offcanvas-contact-us-item mt-4 text-1 d-flex justify-content-start align-items-center">
              <i className="fa fa-phone me-3 bigger-font-2"></i>
              <div className="text-1 mx-0">
                + (123) 123 456 789 
              </div>
            </div>

          </div>

        </Offcanvas.Body>

      </Offcanvas>

    </>
  );
}

export function HeaderOffCanvas(props) {
  return <HeaderOffCanvasContext key={props.key} placement={props.pos} />
}

