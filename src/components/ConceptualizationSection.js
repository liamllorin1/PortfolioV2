import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import WideCaptionedImages from '../components/WideCaptionedImages'
import CaseStudyTitle from '../components/CaseStudyTitle'


export default function ConceptualizationSection(props) {
  let { conceptSketches, conceptReflectionParagraphs, abstractBrainstorms, brainstormReflectionParagraphs } = props.conceptualizationObj;
  return(
    <section className = {styles.conceptualizationContainer} id = 'conceptualizationSection'>
      <CaseStudyTitle light = {true} title='Conceptualization.'/>
      {abstractBrainstorms && <div className = {styles.sketchesContainer}>
        <div class = 'spacer'></div>
          <div>
            <h2 class = 'light'>Abstract Brainstorms.</h2>
            <WideCaptionedImages captionedImages = {abstractBrainstorms}/>
          </div>
        <div class = 'spacer'></div>
      </div>}
      <div className = {styles.conceptDescriptionContainer}>
        <div class = 'spacer'></div>
        <div style = {{marginBottom: '150px'}}>
          <h4 class = 'light'>Brainstorming Reflection.</h4>
          {conceptReflectionParagraphs.map(paragraphText => {
            return <p class = 'light'>{paragraphText}</p>;
          })}
        </div>
        <div class = 'spacer'></div>
      </div>
      {conceptSketches && <div className = {styles.sketchesContainer}>
        <div class = 'spacer'></div>
          <div>
            <h2 class = 'light'>Concept Sketches.</h2>
            <WideCaptionedImages captionedImages = {conceptSketches}/>
          </div>
        <div class = 'spacer'></div>
      </div>}
      <div className = {styles.conceptDescriptionContainer}>
        <div class = 'spacer'></div>
        <div style = {{marginBottom: '50px'}}>
          <h4 class = 'light'>Concept Iteration Reflection.</h4>
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
