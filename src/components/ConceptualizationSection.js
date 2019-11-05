import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import ConceptSketches from '../components/ConceptSketches'
import Breakthrough from '../components/Breakthrough'
import CaseStudyTitle from '../components/CaseStudyTitle'


export default function ConceptualizationSection(props) {
  let { conceptSketches, conceptReflectionParagraphs } = props.conceptualizationObj;
  return(
    <section className = {styles.conceptualizationContainer} id = 'conceptualizationSection'>
      <CaseStudyTitle light = {true} title='Conceptualization.'/>
      {conceptSketches && <div className = {styles.sketchesContainer}>
        <div class = 'spacer'></div>
          <div>
            <h3 class = 'light'>Concept Sketches</h3>
            <ConceptSketches conceptSketches = {conceptSketches}/>
          </div>
        <div class = 'spacer'></div>
      </div>}
      <Breakthrough margin={spacing.desktop.largeMargin}/>
      <div className = {styles.conceptDescriptionContainer}>
        <div class = 'spacer'></div>
        <div style = {{marginBottom: '50px'}}>
          <h3 class = 'light'>Concept Iteration Reflection.</h3>
          {conceptReflectionParagraphs.map(paragraphText => {
            return <p class = 'light'>{paragraphText}</p>;
          })}
        </div>
        <div class = 'spacer'></div>
      </div>
    </section>
  )
}

const styles = {
  conceptualizationContainer:css`
    padding: 150px 0;
    background-image: linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45));
  `,
  sketchesContainer:css`
    display: grid;
    padding-bottom: 50px;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
  `,
  conceptDescriptionContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
  `
}
