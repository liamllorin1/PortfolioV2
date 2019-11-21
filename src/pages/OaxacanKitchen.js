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
      howMightText: 'How might we create a more communal food truck experience for Noel?',
      conceptModels: [{image: fiveGuysBoard, caption: 'The Five Guys bulletin board'}, {image: foodTruckSeating, caption: 'Convenient seating on-site'}, {image: yikYak, caption: 'Yik Yak: anonymous, local messaging'}],
      initialThoughtProcessParagraphs: ['We wanted to provide Noel with a sense of community, to recreate - to the closest extent possible - the familial bonds that he associated with the food trucks of his childhood. I first thought of the Five Guys bulletin boards that adorn one wall of each establishment. Each board is an invitation for a customer to engage with others, or to at the very least share their message. This concept was transformed to the digital world with Yik Yak, a app that achieved virality thanks to its ability to share anonymous messages with those in your local area - in real time. We also, after visiting multiple food trucks during our field work, noticed spacious seating at some food trucks.'],
      users: [{image: ron, name: 'Ron', caption: 'Ron is a former chef and entrepreneur who currently runs his famer\'s-market-business-turned-food-truck around the Silicon Valley area. A chef for over 10 years, he transitioned from the restaurant business several years ago to teach cooking classes in authentic oaxacan cuisine, before bring his expertise to the farmers\'s market and then food truck space. How did he learn authentic oaxacan cuisine? By spending a whole summer in Oaxaca, Mexico, and cooking alongside the locals!', role: 'Food Truck Vendor'}, {image: noel, name: 'Noel', caption: 'My team and I met Noel dining at a food truck by himself during our initial design research phase. Ever since he went with his parents to food trucks in his hometown (his dad worked in construction and would take him to trucks on-site), he has made it a point to visit one food truck per month. "Why?", we asked. For Noel, it reminds him of the bonds he had with his family, and he connects with the individual stories of the vendors themselves.', role: 'Regular Customer'}],
      userAssessmentParagraphs: ['Our interviews, particularly our conversations with Noel and Ron, left us at an interesting crossroads. Here were two people with rich stories, with rich connections to the food truck establishment as a whole. We decided to hone in on Noel\'s POV because we saw a deeper craving nestled within his story. What was that deeper craving? For one, he needed community. In his own words, Noel visited food trucks every month because of the association that they have with his family outings there. He craved intimacy, or rather a personal connection to the food. During his interview, he admitted how he missed the relationships that he had built eating regularly at the food trucks at his father\'s construction sites. Because he was visiting different food trucks now, he no longer knew the vendors by name or their stories.']
  };

  let conceptualizationObj = {
    abstractBrainstorms: [{image: conceptSketch1, caption: '"What does community mean?" mind map'}, {image: conceptSketch2, caption: '"Creating community at a food truck" mind map"'}],
    brainstormReflectionParagraphs: ['Our initial brainstorm poked at the idea of "what does community mean". As you can see, we tossed around ideas from "family" to "organization" to the concept, "shared similarities". In doing so, we collectively realized that community is, in its simplest form, is manifested via interaction, and deepened through sharing stories (as you can see on the fringes of the mind map).', 'Afterwards, we wanted to talk about, well, how can we create this version of community at a food truck? We included, of course, our conceptual models, but we went deeper. My team and I thought about this sense of "shared stories" between the customers themselves, and then we asked, what about the food vendor themself? After all, Ron had such an interesting story to share to his customers, maybe there is something there. We recalled how Noel himself had gotten comfortable with the vendors at his father\'s construction sites! At the end of this mind map, we saw immense potential in the message board of Five Guys as well as the idea of sharing the vendor\'s story with the customers!'],
    conceptSketches: [{image: conceptSketch1, caption: 'Beginning sketches'}, {image: conceptSketch2, caption: 'Focus on inverted pendulum design!'}],
    conceptReflectionParagraphs: ['As you can see on the left image, I really wanted to focus on this concept of a "message board" shared between the customers. Would the board be an ipad screen? Would it instead be a physical bulletin board? To me, the latter was much more organic. If we were to create community at a food truck, why would we force customers to engage with a screen rather than eachother?', 'My team and I still wanted to mull over the possibility of opening up the conversation to the vendor. What would this look like? A special message on the bulletin board reserved to them? Then I thought about the "business card" idea. Why not hand this out, a "message" from the vendor to eat customer that ordered from his truck? It could, for Ron in particular, share his story about visiting Oaxaca, or his commitment to sustainability and how his business aligns with that mission.']
  };

  let iterationObj = {
    isSolutions: true,
    iterations: [
      {image: board, title: 'Communal Bulletin Board.', overline: 'Second Solution', description: 'Our bulletin board was simple, to be set up on an aisle near the seating area, or next to the truck itself. We chose to add a prompt to the board, prodding customers to share a personal (if not nostalgic) food-related story to the world - or, to others at the truck. We hoped that this would break the ice for many people to elaborate on their stories with fellow customers, or at the very least to sense this invisible family formed over food.'},
      {image: cardHandheld, title: 'Complementary "Business Card".', overline: 'First Solution', description: 'This was Ron\'s gift to his customers: with every order, he would hand the customer this card along with their food. His "message" on the message board. While Noel was of course our main POV, we thought that both could benefit from this product idea: Ron could share his rich story with his audience, and Noel could become more familiar with the person - and the business - behind his meal. While this obviously is a very low-fidelity rendering, we envisioned the message being printed on a pristinely designed card, or even printed on the cardboard trays that contained each of Ron\'s menu items.'}
    ]
  };

  let solutionObj = {
    glamourShotImage: oaxacanKitchenMobile,
    largeImages: [boardUse, cardUse],
    smallImages: [cardHandheld, board],
    title: 'Oaxacan Kitchen Package Solution.',
    caption: 'We tested our solutions at Ron\'s Oaxacan Food Truck as they catered an alumni event on Stanford University\'s campus.'
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
