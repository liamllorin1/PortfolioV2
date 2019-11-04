import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import ConceptModels from '../components/ConceptModels'
import CaseStudyTitle from '../components/CaseStudyTitle'

export default function DesignResearchSection(props) {
  let { users, interviewFindings, howMightText, conceptModels, currentUIPatterns, initialThoughtProcessParagraphs } = props.designResearchObj;
  return(
    <div className = {styles.DesignResearchContainer}>
      <CaseStudyTitle light = {false} title='Design Research.'/>
      {howMightText && <h4 className = {styles.howMightText}>{howMightText}</h4>}
      {conceptModels && <div className = {styles.conceptModelsContainer}>
        <div class = 'spacer'></div>
        <div>
          <h3>Conceptual Models</h3>
          <ConceptModels conceptModels = {conceptModels}/>
        </div>
        <div class = 'spacer'></div>
      </div>}
      <div className = {styles.modelsDescriptionContainer}>
        <div class = 'spacer'></div>
        <div>
          <h3>Initial Thought Process.</h3>
          {initialThoughtProcessParagraphs.map(paragraphText => {
            return <p>{paragraphText}</p>;
          })}
        </div>
        <div class = 'spacer'></div>
      </div>
    </div>
  )
}

const styles = {
  DesignResearchContainer:css`
    padding-top: 100px;
    padding-bottom: 150px;
  `,
  howMightText:css`
    color: rgb(150,150,150);
    font-weight: 700;
    margin: 100px 0;
    text-align: center;
  `,
  conceptModelsContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
    padding-bottom: 50px;
  `,
  modelsDescriptionContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
  `
}
