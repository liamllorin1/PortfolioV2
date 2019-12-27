import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import glamourShotImage from '../images/FacebookFrontEnd/facebookLogo.jpg'
import PageTitle from '../components/aPageTitle'
import LargeImage from '../components/aLargeImage'
import SectionTitle from '../components/aSectionTitle'
import LeftContentRightImage from '../components/aLeftContentRightImage'
import TextOnlyRow from '../components/aTextOnlyRow'
import TwoImages from '../components/aTwoImages'
import ThreeImages from '../components/aThreeImages'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'


export default function FacebookFrontEndCaseStudy(props) {

  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}]}/>
      <section id = 'frameSection' style = {{paddingBottom: 150 + 'px'}}>
        <PageTitle category = {"INTERFACE DESIGN"} title = {"Facebook Front End Engineering."}/>
        <LargeImage imageUrl = {glamourShotImage}/>
        <TextOnlyRow header = {"Background"} paragraphs = {['At Facebook, I seek to apply everything that I\'ve learned developing React applications and designing web platforms. I plan to help build out user-facing products at the heart of Facebook\'s upcoming update overhaul: FB5, “the biggest change to the Facebook app and website we’ve made in five years,” according to Zuckerberg.', 'Come back in early January to see what I\'m working on!']}/>
      </section>
      <CaseStudyFooter gradient = {"linear-gradient(45deg, rgb(0, 191, 255), rgb(0, 191, 255))"}/>
    </>
  )
}


const styles = {

}
