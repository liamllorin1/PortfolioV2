import React, { useState, useEffect } from "react"
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

const scrollFunction = function(e) {
  e.preventDefault();
  let section = e.currentTarget.getAttribute('href');
  $("html, body").animate({
      scrollTop: $(section).offset().top + 1
  });
}


export default function NavBarV2(props) {//THIS ENTIRE BLOCK IS RE-RENDERED ON SETSTATE
  let { } = props;

  //Find sections and highlight them accordingly
  const [activeIndex, setActiveIndex] = useState(0);
  const [sections, setSections] = useState([]);
  useEffect(() => {
    const foundSections = Array.from(document.getElementsByTagName('section'));
    setSections(foundSections);
    window.addEventListener("scroll", event => {
      let mainNavLinks = document.querySelectorAll("nav a");
      let fromTop = window.pageYOffset;
      mainNavLinks.forEach((link, index) => {
        if (!link.hash) return;
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          //we are in that section => it should be highlighted
          if (activeIndex !== index) {//if it's not already highlighted
            setActiveIndex(index);
          }
        }
      });
    });
  }, [activeIndex]);

  const [isInProcessSections, setIsInProcessSections] = useState(false);
  //Render nav if we are below the first section
  useEffect(() => {
    window.addEventListener("scroll", event => {
      const fromTop = window.pageYOffset;
      const topMostSection = document.querySelectorAll("section")[0];
      if (topMostSection && fromTop > topMostSection.offsetTop - 1) {
        //we are below the first section
        $('#navContainer').fadeIn(300);
        setIsInProcessSections(true);
      } else {
        $('#navContainer').fadeOut(300);
        setIsInProcessSections(false);
      }
    });
  }, [isInProcessSections]);

  return (
    <div className = {styles.navContainer} id = 'navContainer'>
      <nav>
        {sections.map((section, index) => {
          return (
            <a href = {'#' + section.id} className = {cx(styles.navLink, activeIndex === index ? 'darkPrimary ': 'darkDisabled')} onClick = {scrollFunction} key = {index}>
              <div className = {styles.navListItem}>
                <h6 className = {cx('navText')} style = {activeIndex === index ? {fontWeight: 'bold'} : {}}>
                    {section.id.replace(/_/g, " ")}
                </h6>
              </div>
            </a>
          )
      })}
      </nav>
  </div>
  )
}

const styles = {
  navContainer:css`
    position: fixed;
    top: 0;
    right: 0;
    padding: 25px;
    border-bottom-left-radius: 15px;
    z-index: 100;
    display: none;
    background-color: rgba(252, 252, 253, .5);
  `,
  navLink:css`
    text-decoration: none;
    cursor: pointer;
  `,
  navListItem:css`
    margin-bottom: 15px;
  `,
}
