import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import CaseStudyTitle from '../components/CaseStudyTitle'
import Breakthrough from '../components/Breakthrough'

export default function SolutionSection(props) {
  let { glamourShotImage, secondImage, auxiliaryImages } = props.solutionObj;
  return(
    <section className = {styles.solutionSection} id = "solutionSection">
      <div className = {styles.firstRow}>
        <div class = 'spacer'></div>
        <div className = {styles.leftBack}>
          <h5>Glamour Shots</h5>
          <h1 style = {{marginTop: 0}}>Inverted Pendulum Logo</h1>
          <p>Thank you for taking the time to read this far! </p>
        </div>
        <div className = {cx(styles.imageDiv, styles.glamourShot)} style = {{backgroundImage: 'url(' + glamourShotImage + ')'}}>
        </div>
        <div class = 'spacer'></div>
      </div>
      <div className = {styles.secondRow}>
        <div class = 'spacer'></div>
        <div className = {cx(styles.imageDiv, styles.secondShot)} style = {{backgroundImage: 'url(' + secondImage + ')'}}>
        </div>
        <div class = 'spacer'></div>
      </div>
      <div className = {styles.remainingImages}>
        <div class = 'spacer'></div>
        <div>
        {auxiliaryImages.map(image => {
          return <div className = {cx(styles.imageDiv, styles.auxiliaryImage)} style = {{backgroundImage: 'url(' + image + ')', height: '400px'}}></div>
        })}
        </div>
        <div class = 'spacer'></div>
      </div>
    </section>
  )
}

const styles = {
  solutionSection:css`
    background-color: rgb(240,240,240);
    padding: 150px 0;
  `,
  firstRow:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} 1fr 1fr ${spacing.desktop.mediumMargin};
    margin-bottom: 50px;
  `,
  leftBack:css`
    padding-right: 100px;
  `,
  imageDiv:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  `,
  glamourShot:css`
    height: 400px;
  `,
  secondRow:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
    margin-bottom: 50px;
  `,
  secondShot:css`
    height: 550px;
  `,
  remainingImages:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
  `,
  auxiliaryImage:css`
    width: 50%;
  `
}
