import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import CaseStudyTitle from '../components/CaseStudyTitle'

export default function FrameSection(props) {
  let { categoryText, titleText, backgroundText, challengeText, glamourShotImage } = props.frameObj;
  return(
    <section className = {styles.frameSection}>
      <CaseStudyTitle title = {titleText} overlineText = {categoryText}/>
      <div className = {styles.glamourShotContainer}>
        <div class = 'spacer'></div>
        <div className = {styles.glamourShotImage} style = {{backgroundImage: 'url(' + glamourShotImage + ')'}}>
        </div>
        <div class = 'spacer'></div>
      </div>
      <div className = {styles.backgroundSection}>
        <div class = 'spacer'></div>
        <div className = {styles.backgroundContainer}>
          <div className = {styles.paragraphContainer}>
            <h3>Background.</h3>
            <p className = {styles.paragraphText}>{backgroundText}</p>
          </div>
          <div className = {styles.paragraphContainer}>
            <h3>The challenge.</h3>
            <p className = {styles.paragraphText}>{challengeText}</p>
          </div>
        </div>
        <div class = 'spacer'></div>
      </div>
    </section>
  )
}

const styles = {
  frameSection:css`
    width: 100%;
    padding-top: 100px;
    background-color: rgb(250,250,250);
  `,
  glamourShotContainer:css`
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
  `,
  glamourShotImage:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    width: 100%;
    height: 600px;
  `,
  backgroundSection:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
    padding: 50px 0;
  `,
  paragraphText:css`
    color: rgb(60,60,60);
  `,
  paragraphContainer:css`
    margin-bottom: 50px;
  `
}
