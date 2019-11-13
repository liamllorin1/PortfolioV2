import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import strongSuitTop from '../images/WebsiteScreenshots/strongSuitTopFramed.jpg'
import nahumTop from '../images/WebsiteScreenshots/nahumTopFramedLight.png'
import ryanTop from '../images/WebsiteScreenshots/ryanTopFramedLight.png'
import farmhouseTop from '../images/WebsiteScreenshots/farmhouseTopFramedLight.png'
import FrameSection from '../components/FrameSection'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'
import IterationSection from '../components/IterationSection'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import conceptSketch1 from '../images/conceptSketch2.jpg'
import conceptSketch2 from '../images/conceptSketch1.jpg'
import NavBar from '../components/NavBar'


export default function StrongsuitCaseStudy(props) {
  let frameObj = {
    categoryText: 'Interface Design',
    titleText: 'STRONGSUIT Web Design.',
    glamourShotImage: strongSuitTop,
    paragraphs: [{title: 'Background.', text: 'In my junior year of high school, I enrolled in freecodecamp.com\'s Front End Development curriculum. I was eager to learn more about computer science, a field that at the time I revered without quite knowing why, a world that I knew nothing about yet wanted to dive headfirst into. Over the course of several months, I struggled through basic HTML, Javascript, and CSS modules, coming to grips with the underpinnings beneath the digital world that I perused every day. Then, upon stumbling through the various CodePen applications and min-lessons, I arrived at the final project: building a personal website. Given free rein over the content, aesthetic, and code of my creation, I ran with it. Before I knew it, I had graduated from the freecodecamp curriculum entirely, scanning throw behance, awwwards.com, dribbdle, and onepagelove.com for inspiration. My freelance business was born.'}, {title: 'The Work.', text: 'It started with my classmates. Ambitious pre-professionals themselves, I knew that they would see value in creating themselves a digital brand, a public interface from which employers can reach them and the public can view their work. After developing their pages, I reached out to others in the area. Page after page, iteration after iteration, meeting after meeting with my clients, I honed my web design and development workflow and skills. At the end of my freelancing and right before I packed my bags for Stanford University, I designed and implemented the website for a local restaurant.'}]
  };
  let solutionObj = {
    glamourShotImage: strongSuitTop,
    largeImages: [nahumTop, ryanTop, farmhouseTop],
    smallImages: [],
    title: 'STRONGSUIT Portfolio Shots.',
    caption: 'Several screenshots from the landing pages that I developed.'
  };

  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}, {href: '#solutionSection', tabTitle: 'Final Screenshots'}]}/>
      <FrameSection frameObj = {frameObj}/>
      <SolutionSection solutionObj = {solutionObj}/>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
