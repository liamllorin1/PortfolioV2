import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import glamourShotImage from '../images/InvertedPendulumLogo/mainLogoDark.jpg'
import threeLogosImage from '../images/InvertedPendulumLogo/threeLogos.jpg'
import FrameSection from '../components/FrameSection'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'
import IterationSection from '../components/IterationSection'
import SolutionSection from '../components/SolutionSection'
import orangeLogo from '../images/InvertedPendulumLogo/orangeLogo.jpg'
import martinLutherKingStatue from '../images/InvertedPendulumLogo/martinLutherKingStatue.png'
import conceptModel2 from '../images/conceptModel2.jpeg'
import conceptModel3 from '../images/conceptModel3.jpeg'
import conceptModel4 from '../images/conceptModel4.jpeg'
import comingSoon from '../images/comingSoon.png'
import iteration1 from '../images/InvertedPendulumLogo/iteration1.jpg'
import iteration2 from '../images/InvertedPendulumLogo/iteration2.jpg'
import iteration3 from '../images/InvertedPendulumLogo/iteration3.jpg'
import mainLogoLight from '../images/InvertedPendulumLogo/mainLogoLight.jpg'
import logoHandHeld from '../images/InvertedPendulumLogo/logoHandHeld.jpg'
import invertedPendulumIdea from '../images/InvertedPendulumLogo/Sketches/InvertedPendulumIdea.png'
import lSketches from '../images/InvertedPendulumLogo/Sketches/LIdeas.png'
import PageTitle from '../components/aPageTitle'
import LargeImage from '../components/aLargeImage'
import SectionTitle from '../components/aSectionTitle'
import SubSectionHeader from '../components/aSubSectionHeader'
import LeftContentRightImage from '../components/aLeftContentRightImage'
import TextOnlyRow from '../components/aTextOnlyRow'
import TwoImages from '../components/aTwoImages'
import ThreeImages from '../components/aThreeImages'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'



export default function InvertedPendulumCaseStudy(props) {
  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}, {href: '#conceptualizationSection', tabTitle: 'Conceptualization'}, {href: '#iterationSection', tabTitle: 'Iterations'}, {href: '#solutionSection', tabTitle: 'Solution'}]}/>
      <section id = 'frameSection'>
        <PageTitle title = {"Inverted Pendulum Logo"} category = {"INTERFACE DESIGN"}/>
        <LargeImage imageUrl = {glamourShotImage}/>
        <TextOnlyRow header = {'Background'} paragraphs = {['In Fall 2019, I took a class called ME 102, Foundations of Product Realization. The course gears my fellow Stanford undergraduate ME and Product Design students for creating physical, functional products in the real world. Students were tasked with a seemingly simple task for their ME102 course: build a personal logo. We needed to use materials available in the Stanford Product Realization Lab, housing purple foam core wire cutters, lazer cutters, band saws, sanders, metal-working, etc. I personally sought out a special challenge for myself. I wanted to create a logo that expressed my creativity, while breaking two barriers intrinsic to the project; in short, I sought to capture motion and interaction. I wanted people to be able to "use" (or, rather, to "play") with my logo, and I wanted it to evoke a sense of movement, rather than stagnation.']}/>
      </section>
      <section id = "conceptualizationSection">
        <SectionTitle title = {"Conceptualization"} titleCaption = {"Referencing conceptual models as well as sketching designs based on my HMW statement."}/>
        <TextOnlyRow header = {"How might I create a logo with interactivity and motion?"} paragraphs = {[]}/>
        <SubSectionHeader header = {"Conceptual Models"}/>
        <ThreeImages imageUrls = {[martinLutherKingStatue, orangeLogo, conceptModel4]} captions = {['"Emerging" from the rock face!', 'Simplicity with repeated letters', 'Letters cut off partially']}/>
        <TextOnlyRow header = {"Initial Thought Process"} paragraphs = {['I had a lot of ideas floating in my head. "How might I create this sense of motion and aspect of interactivity with two L\'s?", I asked myself. I drew inspiration from the Martin Luther King statue, wherein, despite its obviously static form, it reflected Dr. King almost emerging out into the open.','I also appreciated the simplicity found in other logos that tackled the repeating letter challenge. I myself needed to find a way to combine two letters, L\'s specifically, in a creative way. I knew I wanted a heavily weight font-size, and I appreciated the idea of the letters being slightly cut off while still being legible.']}/>
        <SubSectionHeader header = {"Concept Sketches"}/>
        <TwoImages imageUrls = {[lSketches, invertedPendulumIdea]} captions = {['Beginning sketches', 'Focus on inverted pendulum design!']}/>
        <TextOnlyRow header = {"Sketches Reflection"} paragraphs = {['After sketching out bland designs, I was frustrated with hitting roadblocks. My two dimensional logos did not have the life that I needed for my logo to be a physical, interactive "product". But as you can see by the sketches, I hit a breakthrough when I realized that an inverted pendulum would breathe life into otherwise stationary letters. At the same time, the L\'s were able to "emerge" from the inverted pendulum\'s tilted rectangular face, and my objective to create a sense of motion was fulfilled!']}/>
      </section>
      <section id = "iterationSection">
        <SectionTitle title = {"Iterations"} titleCaption= {"Testing out the concept, refining with more robust materials and methods."}/>
        <LeftContentRightImage header = {"Purple Foamcore Prototype"} paragraphs = {["My main goal of this prototype was to validate the very idea that I could make an inverted pendulum design. After cutting out the half-crescent purple foam core shape, a nut and exacto knice was all I needed to enforce the inverted pendulum effect."]} imageUrl = {iteration1}/>
        <LeftContentRightImage header = {"Wood Prototype"} paragraphs = {["The wooden prototype was my test to iterate towards the materials that I would be using for the final product. After finishing the wooden frame and letters, I realized that I would need a more elegant approach to offset the wooden material."]} imageUrl = {iteration2}/>
        <LeftContentRightImage header = {"Weight Imbalance Prototype"} paragraphs = {["When I began to build out my final product, I knew that I needed to create negative space in the top-half of the crescent to exaggerate the weight imbalance. Drilling 3/4 through the material, I had both holes for metal inserts as well as negative space!"]} imageUrl = {iteration3}/>
      </section>
      <section id = "solutionSection" style = {{paddingBottom: 150 + 'px'}}>
        <SectionTitle title = "Final Product"/>
        <LargeImage imageUrl = {logoHandHeld}/>
        <LargeImage imageUrl = {threeLogosImage}/>
        <TwoImages imageUrls = {[mainLogoLight, glamourShotImage]} captions = {[]}/>
      </section>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
