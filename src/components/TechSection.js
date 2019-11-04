import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import ryanTop from '../images/WebsiteScreenshots/RyanTop.png'
import nahumTop from '../images/WebsiteScreenshots/NahumTop.png'
import strongSuitTop from '../images/WebsiteScreenshots/StrongSuitTop.png'
import ProjectCard from '../components/ProjectCard'


const screenshots = [
  {
    caption: 'STRONGSUIT WEB DEVELOPMENT LANDING PAGE.',
    image: strongSuitTop,
  },
  {
    caption: 'RYAN MARCUS PROFESSIONAL PAGE.',
    image: ryanTop,
  },
  {
    caption: 'NAHUM GETACHEW PERSONAL WEBSITE.',
    image: nahumTop,
  }
]

export default function TechSection() {
  return (
    <section className = {styles.techContainer} id="techSection">
        <div className = {styles.techIntroContainer}>
          <div class = 'spacer'></div>
          <div className = {styles.introContainer}>
          </div>
          <div class = 'spacer'></div>
        </div>
    {screenshots.map(screenshotObj => {
      return (
        <ProjectCard projectTitle = {screenshotObj.caption} projectDescription = {screenshotObj.caption} projectImage = {screenshotObj.image}/>
      )
    })}
    </section>
  )
}

const styles = {
  techContainer:css`
  padding: 100px 0;
  background-image: linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45));
  `,
  screenshotImage:css`
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  height: 400px;
  margin: 50px 0;
  box-shadow: 0px 0px 10px rgb(0,0,0, .4);
  `,
  screenShotsGrid:css`
  display: grid;
  grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
  `
}
