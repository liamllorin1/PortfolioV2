import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import songkickCover from "images/BackgroundSongkick.jpg"
import fooBack from "images/fooBack.png"
import $ from 'jquery';

export default function UpArrow(props) {
  let {  } = props;
  let arrowWasPressed = false;
  const [eventListenersAdded, setEventListenersAdded] = useState(false);
  const [isInProcessSections, setIsInProcessSections] = useState(false);
  useEffect(() => {
    const arrowBoxElem = document.getElementById('arrowBox');
    if (!eventListenersAdded) {
      arrowBoxElem.addEventListener("mousedown", event => {
        arrowWasPressed = true;
        $('#arrowBox').animate({'bottom' : "-=5px"}, 50).animate({'bottom' : "+=5px"}, 50, () => {
          $("html, body").animate({
              scrollTop: 0
          });
        }).fadeIn(300, () => arrowWasPressed = false);
      });
      window.addEventListener("scroll", event => {
        if (!arrowWasPressed) {
          const fromTop = window.pageYOffset;
          const topMostSection = document.querySelectorAll("section")[0];
          if (topMostSection && fromTop > topMostSection.offsetTop) {
            //we are below the first section
            $('#arrowBox').fadeIn(300);
            setIsInProcessSections(true);
          } else {
            $('#arrowBox').fadeOut(300);
            setIsInProcessSections(false);
          }
        }
      });
      setEventListenersAdded(true);
    }
  }, [isInProcessSections]);

  return(
    <div className = {cx(styles.container)} id = 'arrowBox'>
      <h4 className = {cx('darkSecondary', styles.arrow)}>
        <i className="fas fa-arrow-up"></i>
      </h4>
    </div>
  )
}

const styles = {
  container:css`
    background-color: ${styleConstants.lightBack1};
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 25px;
    right: 25px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
    border-radius: 15px;
    display: none;
    cursor: pointer;
  `,
  arrow:css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-weight: 100;
  `
}
