import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import glamourShotImage from '../images/mainLogoDark.jpg'
import threeLogosImage from '../images/threeLogos.jpg'
import FrameSection from '../components/FrameSection'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'
import IterationSection from '../components/IterationSection'
import SolutionSection from '../components/SolutionSection'
import conceptModel1 from '../images/conceptModel1.jpeg'
import conceptModel2 from '../images/conceptModel2.jpeg'
import conceptModel3 from '../images/conceptModel3.jpeg'
import conceptModel4 from '../images/conceptModel4.jpeg'
import conceptSketch1 from '../images/conceptSketch2.jpg'
import conceptSketch2 from '../images/conceptSketch1.jpg'
import iteration1 from '../images/iteration1.jpg'
import iteration2 from '../images/iteration2.jpg'
import iteration3 from '../images/iteration3.jpg'
import mainLogoLight from '../images/mainLogoLight.jpg'
import NavBar from '../components/NavBar'


export default function InvertedPendulumCaseStudy(props) {
  let frameObj = {
    categoryText: 'Industrial Design',
    titleText: 'Inverted Pendulum Logo.',
    glamourShotImage: glamourShotImage,
    backgroundText: 'In Fall 2019, I took a class called ME 102, Foundations of Product Realization. The course gears my fellow Stanford undergraduate ME and Product Design students for creating physical, functional products in the real world.',
    challengeText: 'Students were tasked with a seemingly simple task for their ME102 course: build a personal logo. We needed to use materials available in the Stanford Product Realization Lab, housing purple foam core wire cutters, lazer cutters, band saws, sanders, metal-working, etc. I personally sought out a special challenge for myself. I wanted to create a logo that expressed my creativity, while breaking two barriers intrinsic to the project; in short, I sought to capture motion and interaction. I wanted people to be able to "use" (or, rather, to "play") with my logo, and I wanted it to evoke a sense of movement, rather than stagnation.'

  };
  let designResearchObj = {
      howMightText: 'How might I create a logo with interactivity and motion?',
      conceptModels: [{image: conceptModel1, caption: 'Brilliant lettering'}, {image: conceptModel2, caption: 'Detailed contours'}, {image: conceptModel3, caption: 'Exaggerated edges for "pop"'}, {image: conceptModel4, caption: 'Cut off partially!'}],
      initialThoughtProcessParagraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
  };
  let conceptualizationObj = {
    conceptSketches: [{image: conceptSketch1, caption: 'Beginning sketches'}, {image: conceptSketch2, caption: 'Focus on inverted pendulum design!'}],
    conceptReflectionParagraphs: ['']
  };
  let iterationObj = {
    iterations: [
      {image: iteration1, title: 'Purple Foam Core Prototype', overline: 'Concept Testing', description: 'My main goal of this prototype was to validate the very idea that I could make an inverted pendulum design. After cutting out the half-crescent purple foam core shape, a nut and exacto knice was all I needed to enforce the inverted pendulum effect.'},
      {image: iteration2, title: 'Wood Prototype', overline: 'Product Prototype', description: 'The wooden prototype was my test to iterate towards the materials that I would be using for the final product. After finishing the wooden frame and letters, I realized that I would need a more elegant approach to offset the wooden material.'},
      {image: iteration3, title: 'Weight Imbalance Prototype', overline: 'Feature Prototype', description: 'When I began to build out my final product, I knew that I needed to create negative space in the top-half of the crescent to exaggerate the weight imbalance. Drilling 3/4 through the material, I had both holes for metal inserts as well as negative space!', breakThrough: true}
    ]
  };
  let solutionObj = {
    glamourShotImage: glamourShotImage,
    secondImage: threeLogosImage,
    auxiliaryImages: [mainLogoLight],
  }

  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'},{href: '#designResearchSection', tabTitle: 'Design Research'}, {href: '#conceptualizationSection', tabTitle: 'Conceptualization'}, {href: '#iterationSection', tabTitle: 'Iterations'}, {href: '#solutionSection', tabTitle: 'Solution'}]}/>
      <FrameSection frameObj = {frameObj}/>
      <DesignResearchSection designResearchObj = {designResearchObj}/>
      <ConceptualizationSection conceptualizationObj = {conceptualizationObj}/>
      <IterationSection iterationObj = {iterationObj}/>
      <SolutionSection solutionObj = {solutionObj}/>
    </>
  )
}


const styles = {

}
