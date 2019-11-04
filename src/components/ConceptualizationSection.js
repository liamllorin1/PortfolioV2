import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import ConceptSketches from '../components/ConceptSketches'
import Breakthrough from '../components/Breakthrough'
import CaseStudyTitle from '../components/CaseStudyTitle'


export default function ConceptualizationSection(props) {
  let { conceptSketches } = props.conceptualizationObj;
  return(
    <div className = {styles.conceptualizationContainer}>
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
        <div>
          <h3 class = 'light'>Concept Iteration Reflection.</h3>
          <p class = 'light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p  class = 'light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class = 'spacer'></div>
      </div>
    </div>
  )
}

const styles = {
  conceptualizationContainer:css`
    padding-top: 100px;
    padding-bottom: 150px;
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
