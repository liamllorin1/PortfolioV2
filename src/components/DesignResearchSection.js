import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import ConceptModels from '../components/ConceptModels'
import CaseStudyTitle from '../components/CaseStudyTitle'
import User from '../components/User'

export default function DesignResearchSection(props) {
  let { users, interviewFindings, howMightText, conceptModels, currentUIPatterns, initialThoughtProcessParagraphs, userAssessmentParagraphs, UIPatterns, userPersonas } = props.designResearchObj;
  console.log(users);
  return(
    <section className = {styles.DesignResearchContainer} id = 'designResearchSection'>
      <CaseStudyTitle light = {false} title='Design Research.'/>
      {users && <div className = {cx('row', styles.usersSection)}>
        <div class = 'col-2 col-m-1'></div>
        <div className = {cx('col-8', 'col-m-10', styles.userContainer)}>
          <h2>{userPersonas ? 'User Personas.' : 'Users.' }</h2>
          {users.map(user => {
            return(
                <User user = {user}/>
            )
          })}
        </div>
        <div class = 'col-2 col-m-1'></div>
      </div>}
      {userAssessmentParagraphs && <div class = 'row'>
        <div class = 'col-4 col-m-3'></div>
        <div class = 'col-4 col-m-6' style = {{marginBottom: '50px'}}>
          <h4>{userPersonas ? 'User Personas Reflection.' : 'User Interview Insights.'}</h4>
          {userAssessmentParagraphs.map(paragraphText => {
            return <p>{paragraphText}</p>;
          })}
        </div>
        <div class = 'col-4 col-m-3'></div>
      </div>}
      {howMightText && <div class = {cx('row', styles.howMightSection)}>
        <div class = 'col-4 col-m-3'></div>
        <div class = 'col-4 col-m-6'>
          <h1 className = {cx(styles.howMightText)}>{howMightText}</h1>
        </div>
        <div class = 'col-4 col-m-3'></div>
      </div>}
      {conceptModels && <div className = {cx(styles.conceptModelsContainer, 'row')}>
        <div class = 'col-2 col-m-1'></div>
        <div class = 'col-8 col-m-10'>
          <h2>{UIPatterns ? 'UI Patterns.' : 'Conceptual Models.' }</h2>
          <ConceptModels conceptModels = {conceptModels}/>
        </div>
        <div class = 'col-2 col-m-1'></div>
      </div>}
      <div class = 'row'>
        <div class = 'col-4 col-m-3'></div>
        <div class = 'col-4 col-m-6' style = {{marginBottom: '50px'}}>
          <h4>Initial Thought Process.</h4>
          {initialThoughtProcessParagraphs.map(paragraphText => {
            return <p>{paragraphText}</p>;
          })}
        </div>
        <div class = 'col-4 col-m-3'></div>
      </div>
    </section>
  )
}

const styles = {
  DesignResearchContainer:css`
    padding-bottom: 150px;
  `,
  howMightText:css`
    font-weight: 700;
    text-align: center;
  `,
  conceptModelsContainer:css`
    padding-bottom: 50px;
  `,
  usersSection:css`
    margin: 100px 0;
    margin-bottom: 0px;
  `,
  howMightSection:css`
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
