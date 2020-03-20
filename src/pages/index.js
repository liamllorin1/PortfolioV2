import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../styles/styleConstants.js"
import SEO from "../components/seo"
import IndexPageIntroSection from '../ComponentsV2/IndexPage/IndexPageIntroSection.js'
import IndexPageProjectsSection from '../ComponentsV2/IndexPage/IndexPageProjectsSection.js'
import IndexPageProjectsSectionHeader from '../ComponentsV2/IndexPage/IndexPageProjectsSectionHeader.js'
import IndexPagePhotographySection from 'ComponentsV2/IndexPage/IndexPagePhotographySection.js'
import ButtonBold from '../components/ButtonBold'
import profPic from '../images/ProfPic5.jpg'

//to add: <WIP/> as necessary
const IndexPage = () => {
  const styles = {
    indexPageIntroSectionContainer:css`
      background-color: ${styleConstants.darkBack1};
      padding-left: ${styleConstants.desktopMargin}px;
      padding-right: ${styleConstants.desktopMargin}px;
      box-sizing: border-box;
    `,
    indexPageProjectsSectionContainer:css`
      background-color: ${styleConstants.darkBack0};
      padding-left: ${styleConstants.desktopMargin}px;
      padding-right: ${styleConstants.desktopMargin}px;
      padding-bottom: 150px;
    `,
    indexPagePhotographySectionContainer:css`
      background-color: ${styleConstants.darkBack1};
      padding-left: ${styleConstants.desktopMargin}px;
      padding-right: ${styleConstants.desktopMargin}px;
    `
  }
  return (
  <>
    <div className = {styles.indexPageIntroSectionContainer}>
      <IndexPageIntroSection/>
    </div>
    <IndexPageProjectsSectionHeader/>
    <div className = {styles.indexPageProjectsSectionContainer}>
      <IndexPageProjectsSection/>
    </div>
    <div className = {styles.indexPagePhotographySectionContainer}>
      <IndexPagePhotographySection/>
    </div>
    <SEO title="Home" />
  </>
)};


export default IndexPage
