import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import darkMediumDarkBack from '../images/Arcesium/darkMediumDarkBack.jpg'
import lightWide from '../images/Arcesium/lightWide.jpg'
import lightMedium from '../images/Arcesium/lightMedium.jpg'
import lightSmall from '../images/Arcesium/lightSmall.png'
import darkMedium from '../images/Arcesium/darkMedium.jpg'
import fusionChart from '../images/Arcesium/fusionChart.png'
import excelSheet from '../images/Arcesium/excelSheet.jpg'
import googleDrive from '../images/Arcesium/googleDrive.png'
import conceptSketch1 from '../images/conceptSketch2.jpg'
import jPMManager from '../images/Arcesium/JPMManager.jpg'
import FrameSection from '../components/FrameSection'
import DesignResearchSection from '../components/DesignResearchSection'
import ConceptualizationSection from '../components/ConceptualizationSection'
import IterationSection from '../components/IterationSection'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'



export default function Arcesium(props) {

  let frameObj = {
    categoryText: 'Interface Design',
    titleText: 'Arcesium Landing Page.',
    glamourShotImage: darkMediumDarkBack,
    paragraphs: [{title: 'Background.', text: 'Last Summer, I was assigned to the UI/UX team at Arcesium, the child company of D.E. Shaw. I was tasked with a challenge, re-developing Arcesium\'s landing page: their clients\' one-stop-shop where they could view their up-to-date financial analytics before navigating to any one of Arcesium\'s flagship products. The landing app had to be configurable to each client\'s settings, intuitive from a financial perspective, and responsive. After I had taken a React tutorial, I was ready to start designing!'}, {title: 'The Catch.', text: 'However, for this project I was subject to a variety of constraints. Namely, I had to operate within Arcesium\'s less-than-elegant design language. As a strictly financial company, Arcesium\'s solutions tailored themselves to the UI/UX patterns of the financial industry. "All people in this industry care about is simply that the information is there", summarized my mentor during one of our first meetings. In short, my job was to make things as easy as possible for clients to access information - even if that gave up visual aesthetic.'}]
  };

  let designResearchObj = {
      users: [{image: jPMManager, name: 'Tim Smith', caption: 'Tim needs to use Arcesium\'s landing page with daily frequency to gauge his current holdings and analytics within each of the Arcesium products that he has access to. For each Arcesium product that he can use, he needs to be able to navigate to that product with ease. Because he does not need 100% functionality of each product all the time, he often finds it more helpful if he could view a quick summary of his standings immediately. Even though he is very familiar with Arcesium\'s products, Tim occasionally finds it necessary to utilize one of Arcesium multi-purpose resources.', role: 'J.P. Morgan Alternative Asset Manager'}],
      userAssessmentParagraphs: ['Tim and other high-profile clients like him need, above all, ease. He doesn\'t need an extremely "sexy" layout - in fact, he would prefer a bland, un-inspiring interface if it meant that he could see only the relevant data and access only the necessary tools without thinking. After discussing with my supervisors and devising that this was the user persona I was designing for, I knew what my design goals were.'],
      userPersonas: true,
      howMightText: 'How might I design a one-stop landing page that prioritizes intuition over elegance?',
      UIPatterns: true,
      conceptModels: [{image: fusionChart, caption: 'FusionCharts data visualization'}, {image: excelSheet, caption: 'Excel - simple, consistent information display', position: 'left'}, {image: googleDrive, caption: 'Google Drive layout', position: 'left'}],
      initialThoughtProcessParagraphs: ['After doing some preliminary research and in having conversations with my mentor, I realized that there were several sources of inspiration. Firstly, FusionCharts gave me inspiration when it came to data visualization - their charting library provides intuitive and visually-pleasing solutions to summarize complicated data. On the other hand, Microsoft Excel sheets were, as my mentor phrased it sarcastically, the "holy grail" of financial UI. In other words, the data is there, not complicated by fancy stylings, for the user to see. Lastly, I called upon the Google Drive layout, utilizing both a vertical fixed navigation bar as well as a scrolling layout (folders on top, documents on the bottom) to organize a multitude of documents on one interface as seamlessly as possible.'],
  };

  let conceptualizationObj = {
    conceptSketches: [{image: conceptSketch1, caption: '"Card" concept'}, {image: conceptSketch1, caption: 'Horizontal clicking layout'}, {image: conceptSketch1, caption: 'Vertical scrolling w/ fixed bar'}, {image: conceptSketch1, caption: 'Status callout feature'}],
    conceptReflectionParagraphs: ['Within my initial sketches, I poked around, looking for different ways to make navigation and information access easiest for my user persona. Firstly, I had to account for the fact that for each client, there was a variable amount of Arcesium products that they had access to, and for each product, there was data to display. Thus, I consulted with my mentor, and we agreed that a "card" was the best way to display that up-to-date data, as well as provide a way for them to access the product itself.']
  };

  let iterationObj = {
    isWireframes: true,
    iterations: [
      {image: conceptSketch1, title: 'Wide Viewport.', overline: 'First Wireframe', description: 'Foo.'},
      {image: conceptSketch1, title: 'Small Viewport.', overline: 'Second Wireframe', description: 'Foo.'}
    ]
  };

  let solutionObj = {
    glamourShotImage: darkMediumDarkBack,
    largeImages: [lightWide, lightMedium, lightSmall],
    smallImages: [],
    title: 'Arcesium Landing Application.',
    caption: 'Here are screenshots of the final overall design as well as other features that I implemented within.'
  }




  return(
    <>
      <NavBar navLinks = {[{href: '#frameSection', tabTitle: 'Introduction'}, {href: '#designResearchSection', tabTitle: 'Design Research'}, {href: '#conceptualizationSection', tabTitle: 'Conceptualization'}, {href: '#iterationSection', tabTitle: 'Wireframes'}, {href: '#solutionSection', tabTitle: 'Solution'}]} />
      <FrameSection frameObj = {frameObj} hasHome/>
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
