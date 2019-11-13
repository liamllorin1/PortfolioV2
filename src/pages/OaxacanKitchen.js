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
import noel from '../images/OaxacanKitchen/noel.png'
import conceptSketch1 from '../images/conceptSketch2.jpg'
import conceptSketch2 from '../images/conceptSketch1.jpg'
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
    paragraphs: [{title: 'Background.', text: 'Ahh, food trucks. They can be thrilling a source of creatively curated fusion food, locally-sourced meals, and refreshingly authentic cuisine. What makes food trucks food trucks - the mobility, food-chain-less, the fact that the cashier is often the owner, etc. -  is what makes them such interesting breeding grounds for problems, be it from the vendors\' or customers\' perspective.'}, {title: 'The Challenge.', text: 'This autumn 2019, for my class, "Human Values in Design", taught by no other than the David Kelley, threw me and my team into a quarter-long problem. The prompt: perform human-centered design research methods to develop a product or service that reimagines the food truck experience. To perform these research methods, we set off to interview various food truck vendors in the area, as well as food truck customers to delve into their daily on-site experiences and possible inconveniences/problems that beset them.'}],
    teammates: ['Caitlyn Klauer', 'Paulson Adebo', 'Chidi Agbo']
  };

  let designResearchObj = {
      howMightText: 'How might we create a more intimate food truck experience for Noel?',
      conceptModels: [{image: fiveGuysBoard, caption: 'The Five Guys bulletin board'}, {image: foodTruckSeating, caption: 'Convenient seating on-site'}, {image: yikYak, caption: 'Yik Yak: anonymous, local messaging'}],
      initialThoughtProcessParagraphs: ['I had a lot of ideas floating in my head. "How might I create this sense of motion and aspect of interactivity with two L\'s?", I asked myself. I drew inspiration from the Martin Luther King statue, wherein, despite its obviously static form, it reflected Dr. King almost emerging out into the open.','I also appreciated the simplicity found in other logos that tackled the repeating letter challenge. I myself needed to find a way to combine two letters, L\'s specifically, in a creative way. I knew I wanted a heavily weight font-size, and I appreciated the idea of the letters being slightly cut off while still being legible.'],
      users: [{image: ron, name: 'Ron', caption: 'Ron is a former chef and entrepreneur who currently runs his famer\'s-market-business-turned-food-truck around the Silicon Valley area. A chef for over 10 years, he transitioned from the restaurant business several years ago to teach cooking classes in authentic oaxacan cuisine, before bring his expertise to the farmers\'s market and then food truck space. How did he learn authentic oaxacan cuisine? By spending a whole summer in Oaxaca, Mexico, and cooking alongside the locals!', role: 'Food Truck Vendor'}, {image: noel, name: 'Noel', caption: 'My team and I met Noel dining at a food truck by himself during our initial design research phase. Ever since he went with his parents to food trucks in his hometown (his dad worked in construction and would take him to trucks on-site), he has made it a point to visit one food truck per month. "Why?", we asked. For Noel, it reminds him of the bonds he had with his family, and he connects with the individual stories of the vendors themselves.', role: 'Regular Customer'}],
      userAssessmentParagraphs: ['Our interviews, particularly our conversations with Noel and Ron, left us at an interesting crossroads. Here were two people with rich stories, with rich connections to the food truck establishment as a whole. We decided to hone in on Noel\'s POV because we saw a deeper craving nestled within his story.']
  };

  let conceptualizationObj = {
    abstractBrainstorms: [{image: conceptSketch1, caption: 'Ideas for community'}, {image: conceptSketch2, caption: 'Secondary mindmap'}],
    brainstormReflectionParagraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'],
    conceptSketches: [{image: conceptSketch1, caption: 'Beginning sketches'}, {image: conceptSketch2, caption: 'Focus on inverted pendulum design!'}],
    conceptReflectionParagraphs: ['After sketching out bland designs, I was frustrated with hitting roadblocks. My two dimensional logos did not have the life that I needed for my logo to be a physical, interactive "product". But as you can see by the sketches, I hit a breakthrough when I realized that an inverted pendulum would breathe life into otherwise stationary letters. At the same time, the L\'s were able to "emerge" from the inverted pendulum\'s tilted rectangular face, and my objective to create a sense of motion was fulfilled!']
  };

  let iterationObj = {
    isSolutions: true,
    iterations: [
      {image: cardHandheld, title: 'Complementary Business Card.', overline: 'First Solution', description: 'My main goal of this prototype was to validate the very idea that I could make an inverted pendulum design. After cutting out the half-crescent purple foam core shape, a nut and exacto knice was all I needed to enforce the inverted pendulum effect.'},
      {image: board, title: 'Communal Bulletin Board.', overline: 'Second Solution', description: 'The wooden prototype was my test to iterate towards the materials that I would be using for the final product. After finishing the wooden frame and letters, I realized that I would need a more elegant approach to offset the wooden material.'},
    ]
  };

  let solutionObj = {
    glamourShotImage: oaxacanKitchenMobile,
    largeImages: [boardUse, cardUse],
    smallImages: [cardHandheld, board],
    title: 'Oaxacan Kitchen Package Solution.',
    caption: 'We tested our solutions at Ron\'s Oaxacan Food Truck during as they catered an event on Stanford University\'s campus.'
  }

  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}, {href: '#designResearchSection', tabTitle: 'Design Research'}, {href: '#conceptualizationSection', tabTitle: 'Conceptualization'}, {href: '#iterationSection', tabTitle: 'Solutions'}, {href: '#solutionSection', tabTitle: 'Solutions in Action'}]}/>
      <FrameSection frameObj = {frameObj}/>
      <DesignResearchSection designResearchObj = {designResearchObj}/>
      <ConceptualizationSection conceptualizationObj = {conceptualizationObj}/>
      <IterationSection iterationObj = {iterationObj}/>
      <SolutionSection solutionObj = {solutionObj}/>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
