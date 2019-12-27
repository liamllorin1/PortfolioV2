import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import comingSoon from '../images/comingSoon.png'
import spacing from '../styles/spacingConstants.js'
import darkMediumDarkBack from '../images/Arcesium/darkMediumDarkBack.jpg'
import lightWide from '../images/Arcesium/lightWide.jpg'
import lightMedium from '../images/Arcesium/lightMedium.jpg'
import lightSmall from '../images/Arcesium/lightSmall.png'
import darkMedium from '../images/Arcesium/darkMedium.jpg'
import lightCallout from '../images/Arcesium/lightCallout.png'
import darkCallout from '../images/Arcesium/darkCallout.png'
import fusionChart from '../images/Arcesium/fusionChart.png'
import excelSheet from '../images/Arcesium/excelSheet.jpg'
import googleDrive from '../images/Arcesium/googleDrive.png'
import jPMManager from '../images/Arcesium/JPMManager.jpg'
import reconLight from '../images/Arcesium/reconLight.jpg'
import reconDark from '../images/Arcesium/reconDark.jpg'
import layout2 from '../images/Arcesium/Sketches/layout2.png'
import layout1 from '../images/Arcesium/Sketches/layout1.png'
import cardsSketches from '../images/Arcesium/Sketches/cardsSketch.png'
import statusCalloutSketches from '../images/Arcesium/Sketches/statusCallout.png'
import narrowViewport from '../images/Arcesium/narrowViewPortScreelyPS.jpg'
import wideViewport from '../images/Arcesium/wideViewPortScreelyPS.jpg'
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



export default function Arcesium(props) {





  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}, {href: '#designResearchSection', tabTitle: 'Design Research'}, {href: '#conceptualizationSection', tabTitle: 'Conceptualization'}, {href: '#iterationSection', tabTitle: 'Wireframes'}, {href: '#solutionSection', tabTitle: 'Solution'}]} />
      <section id = 'frameSection'>
        <PageTitle category = {"INTERFACE DESIGN"} title = "Arcesium Landing Page Design."/>
        <LargeImage imageUrl = {darkMediumDarkBack}/>
        <TextOnlyRow header = {'Background'} paragraphs = {['Last Summer, I was assigned to the UI/UX team at Arcesium, the child company of D.E. Shaw. I was tasked with a challenge, re-developing Arcesium\'s landing page: their clients\' one-stop-shop where they could view their up-to-date financial analytics before navigating to any one of Arcesium\'s flagship products. The landing app had to be configurable to each client\'s settings, intuitive from a financial perspective, and responsive. After I had taken a React tutorial, I was ready to start designing!']}/>
        <TextOnlyRow header = {'The Catch'} paragraphs = {['However, for this project I was subject to a variety of constraints. Namely, I had to operate within Arcesium\'s less-than-elegant design language. As a strictly financial company, Arcesium\'s solutions tailored themselves to the UI/UX patterns of the financial industry. "All people in this industry care about is simply that the information is there", summarized my mentor during one of our first meetings. In short, my job was to make things as easy as possible for clients to access information - even if that gave up visual aesthetic.']}/>
      </section>
      <section id = "designResearchSection">
        <SectionTitle title = {"Design Research"} titleCaption = {"Laying out my user persona, honing in on a need, researching UI patterns to meet that need."}/>
        <SubSectionHeader header = {"USER PERSONAS"}/>
        <LeftContentRightImage header = {"Tim Smith"} paragraphs = {['Tim needs to use Arcesium\'s landing page with daily frequency to gauge his current holdings and analytics within each of the Arcesium products that he has access to. For each Arcesium product that he can use, he needs to be able to navigate to that product with ease. Because he does not need 100% functionality of each product all the time, he often finds it more helpful if he could view a quick summary of his standings immediately. Even though he is very familiar with Arcesium\'s products, Tim occasionally finds it necessary to utilize one of Arcesium multi-purpose resources.']} imageUrl = {jPMManager}/>
        <TextOnlyRow header = {"User Personas Reflection"} paragraphs = {['Tim and other high-profile clients like him need, above all, ease. He doesn\'t need an extremely "sexy" layout - in fact, he would prefer a bland, un-inspiring interface if it meant that he could see only the relevant data and access only the necessary tools without thinking. After discussing with my supervisors and devising that this was the user persona I was designing for, I knew what my design goals were.']}/>
        <TextOnlyRow subSectionHeader = {"How Might We"} header = {"How might I design a one-stop landing page that prioritizes intuition over elegance?"} paragraphs = {[]}/>
        <SubSectionHeader header = {"UI Patterns"}/>
        <ThreeImages imageUrls = {[fusionChart, excelSheet, googleDrive]} captions = {['FusionCharts data visualization', 'Excel - simple, consistent information display', 'Google Drive layout']}/>
        <TextOnlyRow header = {"Initial Thought Process"} paragraphs = {["After doing some preliminary research and in having conversations with my mentor, I realized that there were several sources of inspiration. Firstly, FusionCharts gave me inspiration when it came to data visualization - their charting library provides intuitive and visually-pleasing solutions to summarize complicated data.", "On the other hand, Microsoft Excel sheets were, as my mentor phrased it sarcastically, the \"holy grail\" of financial UI. In other words, the data is there, not complicated by fancy stylings, for the user to see. Lastly, I called upon the Google Drive layout, utilizing both a vertical fixed navigation bar as well as a scrolling layout (folders on top, documents on the bottom) to organize a multitude of documents on one interface as seamlessly as possible."]}/>
      </section>
      <section id = "conceptualizationSection">
        <SectionTitle title = "Conceptualization" titleCaption = "Designing the general layout and individual components."/>
        <SubSectionHeader header = {"Concept Sketches"}/>
        <TwoImages imageUrls = {[cardsSketches, layout1]} captions = {['"Card" concept', 'Horizontal clicking layout']}/>
        <TwoImages imageUrls = {[layout2, statusCalloutSketches]} captions = {['Vertical scrolling w/ fixed bar', 'Status callout feature']}/>
        <TextOnlyRow header = "Concept Sketches Reflection" paragraphs = {["After doing some preliminary research and in having conversations with my mentor, I realized that there were several sources of inspiration. Firstly, FusionCharts gave me inspiration when it came to data visualization - their charting library provides intuitive and visually-pleasing solutions to summarize complicated data.", "On the other hand, Microsoft Excel sheets were, as my mentor phrased it sarcastically, the \"holy grail\" of financial UI. In other words, the data is there, not complicated by fancy stylings, for the user to see. Lastly, I called upon the Google Drive layout, utilizing both a vertical fixed navigation bar as well as a scrolling layout (folders on top, documents on the bottom) to organize a multitude of documents on one interface as seamlessly as possible."]}/>
      </section>
      <section id = "iterationSection">
        <SectionTitle title = "Wireframes" titleCaption = "Piecing together the dashboard layout on variable viewports."/>
        <SubSectionHeader header = {"Adobe Xd Wirerames"}/>
        <LeftContentRightImage header = {"Wide Viewport"} paragraphs = {['After deciding upon the vertical scrolling layout, I had to decide how the layout would evolve responsively with respect to the viewport. Consulting with my mentor and other stake-holders of the landing application, we decided that the number of columns should increase and decrease with the viewport, with the largest monitors holding four columns']} imageUrl = {wideViewport}/>
        <LeftContentRightImage header = {"Narrow Viewport"} paragraphs = {['With the smallest monitors and browser widths, we settled on two columns, wherein the overall landing app dashboard had a minimum fixed-width.']} imageUrl = {narrowViewport}/>
      </section>
      <section id = "solutionSection" style = {{paddingBottom: 150 + 'px'}}>
        <SectionTitle title = {"Final Screenshots"} titleCaption = {"Final langing page in variable viewports, along with the individual cards - in both dark and light themes."}/>
        <LargeImage imageUrl = {lightWide}/>
        <LargeImage imageUrl = {lightMedium}/>
        <LargeImage imageUrl = {lightSmall}/>
        <TwoImages imageUrls = {[reconDark, reconLight]} captions = {[]}/>
        <TwoImages imageUrls = {[lightCallout, darkCallout]} captions = {[]}/>
      </section>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
