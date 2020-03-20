import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import CaseStudyTopSection from "ComponentsV2/CaseStudyPage/CaseStudyTopSection.js"
import CaseStudyProcessSection from "ComponentsV2/CaseStudyPage/CaseStudyProcessSection.js"
import IndividualProcessSection from "ComponentsV2/CaseStudyPage/IndividualProcessSection.js"
import SectionTitle from "ComponentsV2/AtomicComponents/SectionTitle.js"
import PrimaryHeading from "ComponentsV2/AtomicComponents/PrimaryHeading.js"
import SecondaryHeading from "ComponentsV2/AtomicComponents/SecondaryHeading.js"
import Paragraph from "ComponentsV2/AtomicComponents/Paragraph.js"
import Quote from "ComponentsV2/AtomicComponents/Quote.js"
import StatRow from "ComponentsV2/AtomicComponents/StatRow.js"
import ListItem from "ComponentsV2/AtomicComponents/ListItem.js"
import Insight from "ComponentsV2/AtomicComponents/Insight.js"
import BulletItem from "ComponentsV2/AtomicComponents/BulletItem.js"
import UpArrow from "ComponentsV2/AtomicComponents/UpArrow.js"
import NavBarV2 from "ComponentsV2/AtomicComponents/NavBarV2.js"
import agyleCover from "images/BackgroundAgyle.jpg"


export default function AgyleV2(props) {
  let {} = props;
  return (
    <>
    <CaseStudyTopSection overline = {'MOBILE APP'} title = {'Agyle App Design.'} image = {agyleCover} description = {'Agyle is every professional soccer player\'s one-stop-shop for finding agents to help them through their next career move, designed every step of the way with the players\' needs at the top of mind.'}/>
    <CaseStudyProcessSection>
      <IndividualProcessSection id = 'Background'>
        <PrimaryHeading marginTopClass = 'marginTop0' heading = {'Background'}/>
        <Paragraph text = {'Playing soccer (or, more appropriately, football) has been an serious part of my life until I began school at Stanford in 2017. In December 2019, I decided to take a deep-dive into the daily lives of players who\'ve prolonged their careers much longer that I have, into the professional scene or just before it. I sought to design for them a solution to a novel painpoint, whatever that may be.'}/>
        <SecondaryHeading heading = 'Design goals'/>
        <ListItem underlayText = {'1'} boldText = {'Hone in on a need'} text = {'Know the company and their product'} marginTopClass = {'marginTop5'}/>
        <ListItem underlayText = {'2'} boldText = {'Understand the domain space'} text = {'Analyze the user context and overall user experience'}/>
        <ListItem underlayText = {'3'} boldText = {'Conceptualize towards a solution'} text = {'Consolidate insights, iterate towards a solution via prototyping'}/>
      </IndividualProcessSection>
      <IndividualProcessSection id = 'Initial_Research'>
        <SectionTitle title = {'Section Title'} underlayText = {'01'}/>
        <PrimaryHeading overline = {'USER INTERVIEWS'} heading = {'Primary Heading'}/>
        <SecondaryHeading heading = {'Secondary Heading'}/>

      </IndividualProcessSection>
      <IndividualProcessSection id = 'fooSection2'>
        <SectionTitle title = {'Section Title'} underlayText = {'01'}/>
        <PrimaryHeading overline = {'THIS IS AN OVERLINE'} heading = {'Primary Heading'}/>
        <SecondaryHeading heading = {'Secondary Heading'}/>
        <Paragraph text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        <Quote quote = {'This is a quote from someone random. I said blah blah high up in the sky.'} speaker = {'Participant 4'}/>
        <StatRow stats = {[{stat: '70', description: 'The amount of guzzoline in Mad Max Fury Road that was consumed, in gallons, not liters.'}, {stat: 2, description: 'Ounces of Aqua Cola that was dispersed between every villager in the city of Gas Town.'}]}/>
        <ListItem underlayText = {'1'} text = {'This is my first hypothesis'}/>
        <Insight insight = {'This is a key insight that drove the rest of my design!'}/>
        <BulletItem text = {'This is a bullet in a list.'}/>
      </IndividualProcessSection>
    </CaseStudyProcessSection>
    <UpArrow/>
    <NavBarV2/>
    </>
  )
}


const styles = {
}
