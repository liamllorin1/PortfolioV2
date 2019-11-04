import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import glamourShotImage from '../images/mainLogoDark.jpg'
import FrameSection from '../components/FrameSection'
import ProcessSection from '../components/ProcessSection'
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


export default function InvertedPendulumCaseStudy(props) {
  let frameObj = {
    categoryText: 'Industrial Design',
    titleText: 'Inverted Pendulum Logo.',
    glamourShotImage: glamourShotImage,
    backgroundText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    challengeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  };
  let designResearchObj = {
      howMightText: 'How might I create a logo with interactivity and motion?',
      conceptModels: [{image: conceptModel1, caption: 'Brilliant lettering'}, {image: conceptModel2, caption: 'Detailed contours'}, {image: conceptModel3, caption: 'Exaggerated edges for "pop"'}, {image: conceptModel4, caption: 'Cut off partially!'}],
      initialThoughtProcessParagraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
  };
  let conceptualizationObj = {
    conceptSketches: [{image: conceptSketch1, caption: 'Beginning sketches'}, {image: conceptSketch2, caption: 'Focus on inverted pendulum design!'}]
  };
  let iterationObj = {
    iterations: [
      {image: iteration1, title: 'Purple Foam Core Prototype', overline: 'Concept Testing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {image: iteration2, title: 'Wood Prototype', overline: 'Product Prototype', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {image: iteration3, title: 'Weight Imbalance Prototype', overline: 'Feature Prototype', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', breakThrough: true}
    ]
  };

  return(
    <>
      <FrameSection frameObj = {frameObj}/>
      <ProcessSection designResearchObj = {designResearchObj} conceptualizationObj = {conceptualizationObj} iterationObjc = {iterationObj}/>
      <IterationSection iterationObj = {iterationObj}/>
      <SolutionSection/>
    </>
  )
}


const styles = {

}
