import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import spacing from '../styles/spacingConstants.js'
import WideCaptionedImages from '../components/WideCaptionedImages'
import CaseStudyTitle from '../components/CaseStudyTitle'


export default function ConceptualizationSection(props) {
  let { conceptSketches, conceptReflectionParagraphs, abstractBrainstorms, brainstormReflectionParagraphs } = props.conceptualizationObj;
  return(
    <section className = {styles.conceptualizationContainer} id = 'conceptualizationSection'>
      <CaseStudyTitle light = {true} title='Conceptualization.'/>
      {abstractBrainstorms && <div className = {cx('row', styles.sketchesContainer)}>
        <div class = 'col-2 col-m-1'></div>
        <div class = 'col-8 col-m-10'>
          <h2 class = 'light'>Abstract Brainstorms.</h2>
          <WideCaptionedImages captionedImages = {abstractBrainstorms}/>
        </div>
        <div class = 'col-2 col-m-1'></div>
      </div>}
      {abstractBrainstorms && <div class = 'row'>
        <div class = 'col-4 col-m-3'></div>
        <div class = 'col-4 col-m-6' style = {{marginBottom: '150px'}}>
          <h4 class = 'light'>Brainstorming Reflection.</h4>
          {brainstormReflectionParagraphs.map(paragraphText => {
            return <p class = 'light'>{paragraphText}</p>;
          })}
        </div>
        <div class = 'col-4 col-m-3'></div>
      </div>}
      {conceptSketches && <div className = {cx('row', styles.sketchesContainer)}>
        <div class = 'col-2 col-m-1'></div>
          <div class = 'col-8 col-m-10'>
            <h2 class = 'light'>Concept Sketches.</h2>
            <WideCaptionedImages captionedImages = {conceptSketches}/>
          </div>
        <div class = 'col-2 col-m-1'></div>
      </div>}
      <div class = 'row'>
        <div class = 'col-4 col-m-3'></div>
        <div class = 'col-4 col-m-6' style = {{marginBottom: '50px'}}>
          <h4 class = 'light'>Concept Iteration Reflection.</h4>
          {conceptReflectionParagraphs.map(paragraphText => {
            return <p class = 'light'>{paragraphText}</p>;
          })}
        </div>
        <div class = 'col-4 col-m-3'></div>
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
    padding-bottom: 50px;
  `,
}
