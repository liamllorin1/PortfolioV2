import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import $ from 'jquery';
import Image from "../components/image"
import SEO from "../components/seo"

let lastId;
let cur = [];
const highlightTextStyle = {"color": "rgb(30,30,30)"};
const dormantTextStyle = {"color": "rgb(230,230,230)"};
const highlightTabStyle = {"background-color": "rgb(230,230,230)"};
const dormantTabStyle = {"background-color": "rgb(30,30,30)"};
//const initialStyles = [highlightStyle, 4 x dormantStyle]

const scrollFunction = function(e) {
  e.preventDefault();
  let section = e.currentTarget.getAttribute('href');
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
}

export default function NavBar() {//THIS ENTIRE BLOCK IS RE-RENDERED ON SETSTATE
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", event => {
      let mainNavLinks = document.querySelectorAll("nav a");
      let mainSections = document.querySelectorAll("section");
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

  return (
  <nav className = {styles.navBarContainer}>
    <a href="#topSection" className = {styles.navLink} onClick = {scrollFunction}>
      <div className = {styles.navTab}style = {activeIndex === 0 ? highlightTabStyle : dormantTabStyle}>
        <h6 className = {styles.navTabText}style = {activeIndex === 0 ? highlightTextStyle : dormantTextStyle}>Home</h6>
      </div>
    </a>
    <a href="#techSection"className = {styles.navLink} onClick = {scrollFunction}>
      <div className = {styles.navTab}style = {activeIndex === 1 ? highlightTabStyle : dormantTabStyle}>
        <h6 className = {styles.navTabText}style = {activeIndex === 1 ? highlightTextStyle : dormantTextStyle}>Interface Design</h6>
      </div>
    </a>
    <a href="#MESection"className = {styles.navLink} onClick = {scrollFunction}>
      <div className = {styles.navTab}style = {activeIndex === 2 ? highlightTabStyle : dormantTabStyle}>
        <h6 className = {styles.navTabText}style = {activeIndex === 2 ? highlightTextStyle : dormantTextStyle}>Industrial Design</h6>
      </div>
    </a>
    <a href="#designThinking" className = {styles.navLink} onClick = {scrollFunction}>
      <div className = {styles.navTab}style = {activeIndex === 3 ? highlightTabStyle : dormantTabStyle}>
        <h6 className = {styles.navTabText}style = {activeIndex === 3 ? highlightTextStyle : dormantTextStyle} >Design Thinking</h6>
      </div>
    </a>
    <a href="#photographyArt"className = {styles.navLink} onClick = {scrollFunction}>
      <div className = {styles.navTab}style = {activeIndex === 4 ? highlightTabStyle : dormantTabStyle}>
        <h6 className = {styles.navTabText}style = {activeIndex === 4 ? highlightTextStyle : dormantTextStyle}>Photography + Art</h6>
      </div>
    </a>
  </nav>)
}

const styles = {
  navBarContainer:css`
  position: fixed;
   top: 25px;
  right: 25px;
  background-color: rgb(30,30,30);
  z-index: 100;
  box-shadow: 0px 0px 5px rgb(0,0,0, .1);
  `,
  navTab:css`
    min-width: 150px;
    padding-left: 25px;
    height: 50px;
    margin: 0;
  `,
  navTabText:css`
  line-height: 50px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  `,
  navLink:css`
    text-decoration: none;
    :hover & {
      text-decoration: none;
    }
    :visited & {
      text-decoration: none;
    }
  `
}
