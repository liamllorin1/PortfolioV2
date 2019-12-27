import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import comingSoon from '../images/comingSoon.png'
import agyleCover from '../images/Agyle/AgyleCover.png'
import logan from '../images/Agyle/Logan.jpg'
import loganAndEli from '../images/Agyle/loganAndEliFake.jpg'
import eli from '../images/Agyle/EliFake.jpg'
import userJourneyVictor from '../images/Agyle/UserJourneyVictor.png'
import userJourneyGary from '../images/Agyle/UserJourneyGary.png'
import userFlowAgyle from '../images/Agyle/userFlowAgyle.png'
import navigationAgyle from '../images/Agyle/navigationAgyle.png'
import designCard from '../images/Agyle/DesignCard.png'
import onboardingSketches from '../images/Agyle/OnboardingSketches.png'
import exploreSketches from '../images/Agyle/exploreSketches.png'
import networkMessagesSketches from '../images/Agyle/networkMessagesSketches.png'
import exploreUserFlow from '../images/Agyle/ExploreUserFlow.png'
import onboardingProfileUserFlow from '../images/Agyle/OnboardingProfileUserFlow.png'
import PageTitle from '../components/aPageTitle'
import SubSectionHeader from '../components/aSubSectionHeader'
import LargeImage from '../components/aLargeImage'
import SectionTitle from '../components/aSectionTitle'
import LeftContentRightImage from '../components/aLeftContentRightImage'
import TextOnlyRow from '../components/aTextOnlyRow'
import TwoImages from '../components/aTwoImages'
import ThreeImages from '../components/aThreeImages'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'


export default function AgyleCaseStudy(props) {

  return(
    <>
      <NavBar navLinks = {[{tabTitle: "Introduction", href: '#frameSection'}, {tabTitle: "Design Research", href: '#designResearchSection'}, {tabTitle: "Concept UX", href: "#conceptualizationSection"}, {tabTitle: "User Flows", href: "#userFlows"}]}/>
      <section id = 'frameSection'>
        <PageTitle category = {'Interface Design'} title = {'Agyle Mobile Design'}/>
        <LargeImage imageUrl = {agyleCover}/>
        <TextOnlyRow header = {"Background"} paragraphs = {['For this project, I wanted to construct an app that would help soccer players playing at a high level: be it in college or at a professional level, or the intersection of the two. I wanted to both hone my skills designing for mobile while simultaneously constructing a product to solve a real problem. Despite having played soccer for my whole life at nearly the highest level, no problem space jumped out to me. I knew I would have to do the field work necessary to discover a reliable pain-point.']}/>
      </section>
      <section id = 'designResearchSection'>
        <SectionTitle title = {'Design Research'} titleCaption = {'Interviewing users, constructing user journeys, deciding on a "How Might We" statement, and researching UI patterns.'}/>
        <SubSectionHeader header = {'User Interviews + Domain Research'}/>
        <TwoImages imageUrls = {[logan, eli]} captions = {['Logan (captain of Stanford Men\'s Varsity Soccer)', 'Eli (professional goalkeeper for Dusseldorf Reserves)']}/>
        <TextOnlyRow header = {"Logan + Eli"} paragraphs = {['Logan (pictured left) is currently a captain of the Stanford men\'s team. After we discussed the logistical pains that come with his captaincy, we touched upon an interesting topic relevant to his his career goals. His number one goal? To play professionally in England. When asked, he explained that there are many ways to reach that point, to land that first tryout. In most cases, a player has to rely on agent who will make that tryout happen. How could he hope to find said agent? Connections. "The soccer world is smaller than you think", he expressed.', 'Eli (pictured right) is currently making a huge transition from D1 ball to playing overseas. It all started with a chance introduction from a friend who was interning abroad: before Eli knew it, he had met an agent who was pulling strings and connecting him to teams in Germany. What struck me  was how Eli had made the most of his sparse connections in Europe. He admitted that he was indeed very lucky, but sometimes those chance introductions can open doors to amazing career opportunities.']}/>
        <TextOnlyRow header = {"Domain Research Takeaways."} paragraphs = {["I decided to dive into the world of soccer agents/soccer player relations following these interviews, and discovered the following insights:",  "It was clear that there was no universal resource to find agents as a player.", "References play a key part in the process, with agents often not allowing potential clients to contact them without first either hearing from a reference or scouting the player themselves", "There are certain enumerable characteristics (i.e., pay cut, primary market of business, reputation) of an agent that a player had to take into account when choosing the best agent for their needs.", "Many players are afraid that agents may be out to exploit them, and thus reputation and trust are huge facets of this industry."]}/>
        <SubSectionHeader header = {'User Journeys'}/>
        <TextOnlyRow header = {'"Grumpy Veteran" Victor'} paragraphs = {['Victor is a seasoned player playing in Spain\’s top league, La Liga, for one of the league\’s best teams. However, he isn\’t satisfied because he has been the second string goalie for the last three years. Desperate to make the most of his final years as a professional, he’s eager to move to a more exotic league in South America where his playing time will be guaranteed. The problem: he has no idea how to find agents who can help him with that particular transfer, with his current agent only being able to pull strings in the local Spanish leagues.']}/>
        <LargeImage imageUrl = {userJourneyVictor}/>
        <TextOnlyRow header = {'"Young Gun" Gary'} paragraphs = {['Gary is an ambitious player playing for a competitive D1 college. After a solid first year as an All-Conference player and regular starter, he has realized that college isn\'t for him. Gary seeks to leverage his relationships that he has made in his past academy teams to land a gig in Europe.']}/>
        <LargeImage imageUrl = {userJourneyGary}/>
        <TextOnlyRow header = {""} paragraphs = {['After having consolidated my research and devising these two user personas and user journeys relevant to the problem space, I was able to settle upon one problem statement.']}/>
        <TextOnlyRow header = {"How might I design an effective way for soccer players to find an agent to help them meet their career goals?"} paragraphs = {[]}/>
        <SubSectionHeader header = {'UI Patterns'}/>
        <TwoImages imageUrls = {[comingSoon, comingSoon]} captions = {['Airbnb: "reservation" user flow', 'Hinge: onboarding and user preferences setup']} bottomPadding = {25}/>
        <TwoImages imageUrls = {[comingSoon, comingSoon]} captions = {['Linkedin: harnessing connections', 'Uber: juggling the needs of two parties - drivers and riders']} topPadding = {0}/>
        <TextOnlyRow header = {'UI Patterns Relevant to Agyle'} paragraphs = {['A frequent user of the Airbnb app, I appreciated their reservation user flow for it\'s succintness and clarity. Like choosing an agent, renting a house is an important decision wherein one places a lot of faith in their final choice, so trust and confirmation are important principles to be designing for.', 'The Hinge app\'s onboarding process allows users to enumerate characteristics relevant to potential dates as well as characteristics of potential dates that they prefer. The onboarding user flow breaks this down into bite-sized chunks, allowing the user to skip the onboarding\'s completion even though they will need to finish it before they take advantage of the app\'s functionality.', 'Linkedin allows for users to connect with eachother and recommends other professionals based on similar networks. The app prevents messaging between users who are not connected as well!', 'Because, in my problem space, there are two parties (agents and players), I thought about how Uber juggles the needs of both the drivers and riders: specifically, how they dedicate a separate application for the drivers, and keep the riders on their "main" app.']}/>
      </section>
      <section id = "conceptualizationSection">
        <SectionTitle title = {'Concept UX'} titleCaption = {'Crafting a generic user flow, app navigation, a visual design framework, and app screen sketches.'}/>
        <SubSectionHeader header = {'Generic User Flow'}/>
        <LargeImage imageUrl = {userFlowAgyle}/>
        <SubSectionHeader header = {'App Navigation'}/>
        <LargeImage imageUrl = {navigationAgyle}/>
        <TextOnlyRow header = {"Summary of User Flow + Navigation"} paragraphs = {['When I envisioned the most generic user flow for my users, there were a handleful of tasks that I wanted to account for. The user needed to be able to "explore", to browse through agents and players alike to see who they can reach out to and figure out who knows who. They needed to be able to set-up their own profile from which others could find them. When the time came, they required a way to get into contact with other users, after applying (for agents) or connecting (for both agents and players) with them.', 'I decided to streamline this user flow into a flat, tabbed navigation format, envisioning a navigation hierarchy similar to that of the Airbnb app. This would allow necessary prioritization of a particular tab (my "Explore" tab), while allowing for easy lateral movement to other features of the app. While I wanted to funnel my user towards the content-centered "Explore" tab, I wanted to allow them to back-out easily to make the auxiliary micro-interactions necessary to move their conversations and their network forward.']}/>
        <SubSectionHeader header = {'Design Framework'}/>
        <LargeImage imageUrl = {designCard}/>
        <SubSectionHeader header = {'Screen Sketches'}/>
        <TwoImages imageUrls = {[onboardingSketches, exploreSketches]} captions = {['Onboarding + profile screens sketches', '"Explore" primary user flow sketches']} bottomPadding = {25}/>
        <TwoImages imageUrls = {[networkMessagesSketches]} captions = {['"Network" and "Messages" screens sketches']} topPadding = {0}/>
      </section>
      <section id = "userFlows">
        <SectionTitle title = {'User Flows'} titleCaption = {'Walk-throughs through the primary and secondary user flows.'}/>
        <SubSectionHeader header = {"Primary User Flow"}/>
        <TextOnlyRow header = {"Finding an Agent and Applying"} paragraphs = {[]}/>
        <LargeImage imageUrl = {exploreUserFlow}/>
        <SubSectionHeader header = {"Secondary User Flow"}/>
        <TextOnlyRow header = {"Getting through Onboarding and Finishing Profile Set-Up"} paragraphs = {[]}/>
        <LargeImage imageUrl = {onboardingProfileUserFlow}/>
      </section>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
