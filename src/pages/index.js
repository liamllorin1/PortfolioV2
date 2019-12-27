import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../styles/styleConstants.js"
import SEO from "../components/seo"
import IndexPageIntroSection from '../ComponentsV2/IndexPage/IndexPageIntroSection.js'
import IndexPageProjectsSectionHeader from '../ComponentsV2/IndexPage/IndexPageProjectsSectionHeader.js'
import ButtonBold from '../components/ButtonBold'
import profPic from '../images/ProfPic5.jpg'

let sections = [
  {
    title: "Liam Llorin.",
    caption: "Find me behind my Canon 6D, in the Product Realization Lab at Stanford, or on awwwards.com exploring what I love.",
    leftGradient: "linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45))",
    rightGradient: "linear-gradient(45deg, rgb(30, 30, 30), rgb(15, 15, 15))",
    sectionId: "topSection",
    image: profPic,
    textColor: 'light',
    button: <Link to = {'/About/'} style = {{textDecoration: 'none'}}><ButtonBold buttonColor = "rgb(240,240,240)" titleColor = "rgb(20,20,20)" title = {"Find out more"}/></Link>,
    resume: true
  }
]

//to add: <WIP/> as necessary
const IndexPage = () => {
  const styles = {
    indexPageContainer:css`
      background-color: ${styleConstants.darkBack1};
      height: 100%;
      width: 100%;
      min-height: 100vh;
      padding-left: ${styleConstants.desktopMargin}px;
      padding-right: ${styleConstants.desktopMargin}px;
      box-sizing: border-box;
    `
  }
  return (
  <>
    <div className = {styles.indexPageContainer}>
      <IndexPageIntroSection/>
    </div>
    <IndexPageProjectsSectionHeader/>
    <SEO title="Home" />
  </>
)};


export default IndexPage
