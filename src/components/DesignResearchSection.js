import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import ConceptModels from '../components/ConceptModels'
import CaseStudyTitle from '../components/CaseStudyTitle'
import User from '../components/User'

export default function DesignResearchSection(props) {
  let { users, interviewFindings, howMightText, conceptModels, currentUIPatterns, initialThoughtProcessParagraphs, userAssessmentParagraphs } = props.designResearchObj;
  return(
    <section className = {styles.DesignResearchContainer} id = 'designResearchSection'>
      <CaseStudyTitle light = {false} title='Design Research.'/>
      {users && <div className = {styles.usersSection}>
        <div class = 'spacer'></div>
        <div className = {styles.userContainer}>
          <h3>Users.</h3>
          {users.map(user => {
            return(
                <User user = {user}/>
            )
          })}
        </div>
        <div class = 'spacer'></div>
      </div>}
      {users && <div className = {styles.descriptionContainer}>
        <div class = 'spacer'></div>
        <div>
          <h4>User Interview Assessment.</h4>
          {userAssessmentParagraphs.map(paragraphText => {
            return <p>{paragraphText}</p>;
          })}
        </div>
        <div class = 'spacer'></div>
      </div>}
      {howMightText && <div class = {styles.howMightSection}>
        <div class = 'spacer'>
        </div>
        <div className = {styles.howMightTextParent}>
          <h1 className = {cx(styles.howMightText)}>{howMightText}</h1>
        </div>
        <div class = 'spacer'>
        </div>
      </div>}
      {conceptModels && <div className = {styles.conceptModelsContainer}>
        <div class = 'spacer'></div>
        <div>
          <h3>Conceptual Models.</h3>
          <ConceptModels conceptModels = {conceptModels}/>
        </div>
        <div class = 'spacer'></div>
      </div>}
      <div className = {styles.descriptionContainer}>
        <div class = 'spacer'></div>
        <div>
          <h4>Initial Thought Process.</h4>
          {initialThoughtProcessParagraphs.map(paragraphText => {
            return <p>{paragraphText}</p>;
          })}
        </div>
        <div class = 'spacer'></div>
      </div>
    </section>
  )
}

const styles = {
  DesignResearchContainer:css`
    padding: 150px 0;
  `,
  howMightText:css`
    font-weight: 700;
    text-align: center;
  `,
  howMightTextParent:css`
  `,
  conceptModelsContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
    padding-bottom: 50px;
  `,
  descriptionContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
  `,
  usersSection:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
    margin: 150px 0;
  `,
  howMightSection:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.largeMargin} auto ${spacing.desktop.largeMargin};
    margin: 150px 0;
  `,
  userImage:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    width: 300px;
    height: 300px;
    border-radius: 50px;
  `
}
