import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import conceptModel1 from '../images/conceptModel1.jpeg'
import conceptModel2 from '../images/conceptModel2.jpeg'
import conceptModel3 from '../images/conceptModel3.jpeg'
import conceptModel4 from '../images/conceptModel4.jpeg'
import ConceptModels from '../components/ConceptModels'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'

export default function ProcessSection(props) {
  let { designResearchObj, conceptualizationObj } = props;

  return(
    <div className = {styles.processSection}>
      <DesignResearchSection designResearchObj = {designResearchObj}/>
      <ConceptualizationSection conceptualizationObj = {conceptualizationObj}/>
    </div>
  )
}

const styles = {
  processSection:css`
    width: 100%;
    background-color: rgb(245,245,245);
    position: relative;
  `,
}
