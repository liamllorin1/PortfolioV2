import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import glamourShotImage from '../images/FacebookFrontEnd/facebookLogo.jpg'
import FrameSection from '../components/FrameSection'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'
import IterationSection from '../components/IterationSection'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'


export default function FacebookFrontEndCaseStudy(props) {
  let frameObj = {
    categoryText: 'UI/UX',
    titleText: 'Facebook Front End Engineering.',
    glamourShotImage: glamourShotImage,
    backgroundText: 'At Facebook, I seek to apply everything that I\'ve learned developing React applications and designing web platforms. I plan to help build out user-facing products at the heart of Facebook\'s upcoming update overhaul: FB5, “the biggest change to the Facebook app and website we’ve made in five years,” according to Zuckerberg.',
    challengeText: 'Come back in early January to see what I\'m working on!'

  };

  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}]}/>
      <FrameSection frameObj = {frameObj}/>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
