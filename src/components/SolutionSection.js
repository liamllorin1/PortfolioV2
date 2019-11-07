import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import CaseStudyTitle from '../components/CaseStudyTitle'
import Breakthrough from '../components/Breakthrough'
import ButtonBold from '../components/ButtonBold'

export default function SolutionSection(props) {
  let { glamourShotImage, largeImages, smallImages, title, caption, isPhotography } = props.solutionObj;
  return(
    <section className = {styles.solutionSection} id = "solutionSection" style = { {backgroundColor: 'rgb(250,250,250)'}}>
      <div className = {styles.firstRow}>
        <div class = 'spacer'></div>
        <div className = {styles.leftBack}>
          <h5>Glamour Shots</h5>
          <h1 style = {{marginTop: 0}}>{title}</h1>
          <p style = {{marginBottom: '25px', maxWidth: '50%'}}>{caption}</p>
          {isPhotography && <a href = 'https://www.instagram.com/liamllor/?hl=en' style = {{textDecoration: 'none'}}><ButtonBold title = 'Instagram' buttonColor = 'rgb(30,30,30)' titleColor = 'rgb(250,250,250)'/></a>}
        </div>
        <div className = {cx(styles.imageDiv, styles.glamourShot)} style = {{backgroundImage: 'url(' + glamourShotImage + ')'}}>
        </div>
        <div class = 'spacer'></div>
      </div>
      {largeImages && largeImages.map(image => {
        return (
          <div className = {styles.secondRow}>
            <div class = 'spacer'></div>
            <div className = {cx(styles.imageDiv, styles.secondShot)} style = {{backgroundImage: 'url(' + image + ')'}}>
            </div>
            <div class = 'spacer'></div>
          </div>
        )
      })}
      <div className = {styles.remainingImages}>
        <div class = 'spacer'></div>
        <div>
        <div className = {styles.auxiliaryImagesContainer}>
          {smallImages.map(image => {
            return <div className = {cx(styles.imageDiv, styles.auxiliaryImage)} style = {{backgroundImage: 'url(' + image + ')', height: '400px'}}></div>
          })}
        </div>
        </div>
        <div class = 'spacer'></div>
      </div>
    </section>
  )
}

const styles = {
  solutionSection:css`
    padding: 150px 0;
  `,
  firstRow:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} 1fr 1fr ${spacing.desktop.mediumMargin};
    margin-bottom: 25px;
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
    margin-left: 12.5px;
  `,
  secondRow:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
    margin-bottom: 25px;
  `,
  secondShot:css`
    height: 550px;
  `,
  remainingImages:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
  `,
  auxiliaryImage:css`

  `,
  auxiliaryImagesContainer:css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    row-gap: 25px;
  `
}
