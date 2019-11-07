import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import oaxacanKitchenMobile from '../images/OaxacanKitchen/oaxacanKitchenMobile.jpg'
import boardTruck from '../images/OaxacanKitchen/boardTruck.jpg'
import cardUse from '../images/OaxacanKitchen/cardUse.jpg'
import boardUse from '../images/OaxacanKitchen/boardUse.jpg'
import board from '../images/OaxacanKitchen/board.jpg'
import cardHandheld from '../images/OaxacanKitchen/cardHandheld.jpg'
import fiveGuysBoard from '../images/OaxacanKitchen/fiveGuysBoard.jpg'
import foodTruckSeating from '../images/OaxacanKitchen/foodTruckSeating.jpg'
import yikYak from '../images/OaxacanKitchen/yikYak.jpeg'
import ron from '../images/OaxacanKitchen/ron.png'
import FrameSection from '../components/FrameSection'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'
import IterationSection from '../components/IterationSection'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'

export default function OaxacanKitchen(props) {
  let frameObj = {
    categoryText: 'Design Research',
    titleText: 'Oaxacan Kitchen Need-Finding.',
    glamourShotImage: oaxacanKitchenMobile,
    paragraphs: [{title: 'Background.', text: 'Ahh, food trucks. They can be thrilling a source of creatively curated fusion food, locally-sourced meals, and refreshingly authentic cuisine. What makes food trucks food trucks - the mobility, food-chain-less, the fact that the cashier is often the owner, etc. -  is what makes them such interesting breeding grounds for problems, be it from the vendors\' or customers\' perspective.'}, {title: 'The Challenge.', text: 'This autumn 2019, for my class, "Human Values in Design", taught by no other than the David Kelley, threw me and my team into a quarter-long problem. The prompt: perform human-centered design research methods to develop a product or service that reimagines the food truck experience. To perform these research methods, we set off to interview various food truck vendors in the area, as well as food truck customers to delve into their daily on-site experiences and possible inconveniences/problems that beset them.'}]
  };

  let designResearchObj = {
      howMightText: 'How might we create a more intimate food truck experience for Noel?',
      conceptModels: [{image: fiveGuysBoard, caption: 'The Five Guys bulletin board'}, {image: foodTruckSeating, caption: 'Convenient seating on-site'}, {image: yikYak, caption: 'Yik Yak: anonymous, local messaging'}],
      initialThoughtProcessParagraphs: ['I had a lot of ideas floating in my head. "How might I create this sense of motion and aspect of interactivity with two L\'s?", I asked myself. I drew inspiration from the Martin Luther King statue, wherein, despite its obviously static form, it reflected Dr. King almost emerging out into the open.','I also appreciated the simplicity found in other logos that tackled the repeating letter challenge. I myself needed to find a way to combine two letters, L\'s specifically, in a creative way. I knew I wanted a heavily weight font-size, and I appreciated the idea of the letters being slightly cut off while still being legible.'],
      users: [{image: ron, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', role: 'Food Truck Vendor'}],
      userAssessmentParagraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.']
  };

  let solutionObj = {
    glamourShotImage: oaxacanKitchenMobile,
    largeImages: [boardUse, cardUse],
    smallImages: [cardHandheld, board],
    title: 'Inverted Pendulum Logo.',
    caption: 'The final solutions.'
  }

  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}, {href: '#designResearchSection', tabTitle: 'Design Research'}, {href: '#solutionSection', tabTitle: 'Solutions'}]}/>
      <FrameSection frameObj = {frameObj}/>
      <DesignResearchSection designResearchObj = {designResearchObj}/>
      <SolutionSection solutionObj = {solutionObj}/>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
