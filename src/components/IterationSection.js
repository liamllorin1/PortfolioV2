import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import CaseStudyTitle from '../components/CaseStudyTitle'
import Breakthrough from '../components/Breakthrough'

export default function IterationSection(props) {
  let { iterations, isSolutions, isWireframes } = props.iterationObj;
  return(
    <section className = {styles.iterationSection} id = 'iterationSection'>
        <CaseStudyTitle title={isSolutions ? 'Solutions.' : isWireframes ? 'Wireframes' : 'Iterations.'} light={false}/>
      {iterations.map((iteration, index) => {
        return (
          <>
          <div className = {cx('row',styles.iterationContainer)}>
            <div class = 'col-4 col-m-3'></div>
            <div className = {cx('col-4', 'col-m-6', styles.iterationBlock)}>
              <div className = {styles.titleContainer}>
                <h5 className = {styles.iterationOverlineText}>{iteration.overline}</h5>
                <h2 className = {styles.iterationTitleText}>{iteration.title}</h2>
              </div>
              <div className = {styles.descriptionContainer}>
                <div className = {styles.iterationImage} style = {{backgroundImage: 'url(' + iteration.image + ')'}}></div>
                <div className = {styles.paragraphContainer}>
                  <h4>{isSolutions ? 'Solution Description.': 'Iteration Results.'}</h4>
                  <p>{iteration.description}</p>
                </div>
              </div>
            </div>
            <div class = 'col-4 col-m-3'></div>
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
    padding-bottom: 50px;
    background-color: rgb(240,240,240);
  `,
  iterationContainer:css`
    margin: 150px 0;
  `,
  iterationOverlineText:css`
    margin-bottom: 0;
  `,
  iterationTitleText:css`
    margin-top: 25px;
  `,
  titleContainer:css`
    margin-bottom: 50px;
    text-align: center;
  `,
  descriptionContainer:css`
    width: 100%;
  `,
  iterationImage:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    width: 100%;
    height: 350px;
    margin-bottom: 50px;
  `,
  paragraphContainer:css`
    padding-right: 25px;
    padding-left: 25px;
  `
}
