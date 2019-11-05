import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import CaseStudyTitle from '../components/CaseStudyTitle'
import Breakthrough from '../components/Breakthrough'

export default function IterationSection(props) {
  let { iterations } = props.iterationObj;
  return(
    <section className = {styles.iterationSection} id = 'iterationSection'>
        <CaseStudyTitle title='Iterations.' light={false}/>
      {iterations.map((iteration, index) => {
        return (
          <>
          <div className = {styles.iterationContainer}>
            <div class = 'spacer'></div>
            <div class = {styles.iterationBlock}>
              <div className = {styles.titleContainer}>
                <h5 className = {styles.iterationOverlineText}>{iteration.overline}</h5>
                <h3 className = {styles.iterationTitleText}>{iteration.title}</h3>
              </div>
              <div className = {styles.descriptionContainer}>
                <div className = {styles.iterationImage} style = {{backgroundImage: 'url(' + iteration.image + ')'}}></div>
                <div className = {styles.paragraphContainer}>
                  <h4>Iteration Results.</h4>
                  <p>{iteration.description}</p>
                </div>
              </div>
            </div>
            <div class = 'spacer'></div>
          </div>
          {iteration.breakThrough && <Breakthrough/>}
          </>
        )
      })}
    </section>
  )
}

const styles = {
  iterationSection:css`
    width: 100%;
    padding: 150px 0;
    background-color: rgb(250,250,250);
  `,
  iterationContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
    margin-bottom: 150px;
  `,
  iterationOverlineText:css`
    text-align: center;
    margin-bottom: 0;
  `,
  iterationTitleText:css`
    text-align: center;
  `,
  titleContainer:css`
    margin-bottom: 50px;
  `,
  descriptionContainer:css`
    display: grid;
    grid-template-columns: 55% 45%;
    width: 100%;
  `,
  iterationImage:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    width: 100%;
    height: 300px;
  `,
  paragraphContainer:css`
    padding-left: 50px;
  `
}
