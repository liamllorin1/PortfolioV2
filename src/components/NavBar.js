import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import $ from 'jquery';
import Image from "../components/image"
import ButtonBold from '../components/ButtonBold'
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
      scrollTop: $(section).offset().top + 1
  });
}

export default function NavBar(props) {//THIS ENTIRE BLOCK IS RE-RENDERED ON SETSTATE
  let { navLinks, hideHome } = props;
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
    <div className = {styles.navBarContainer}>
      {!hideHome && navLinks.length !== 0 && (
        <Link to = {'/'} style = {{textDecoration: 'none'}}>
          <div className = {cx(styles.navTab, styles.homeTab)}>
            <h6 className = {cx(styles.navTabText, styles.homeText)}>Home Page</h6>
          </div>
        </Link>
      )}
      {!hideHome && navLinks.length === 0 && (
        <Link to = {'/'} style = {{textDecoration: 'none '}}>
          <ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Home"}/>
        </Link>
      )}
    <nav>
      {navLinks.map((navLink, index) => {
        return (
          <a href = {navLink.href} className = {styles.navLink} onClick = {scrollFunction}>
            <div className = {styles.navTab} style = {activeIndex === index ? highlightTabStyle : dormantTabStyle}>
              <h6 className = {styles.navTabText}style = {activeIndex === index ? highlightTextStyle : dormantTextStyle}>{navLink.tabTitle}</h6>
            </div>
          </a>
        )
    })}
    </nav>
  </div>
  )
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
  homeTab:css`
    background-color: rgb(60,60,60);
  `,
  homeText:css`
    color: rgb(250,250,250);
  `,
  navTabText:css`
  line-height: 50px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin: 0;
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
