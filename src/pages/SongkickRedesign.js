import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import songkickCover from '../images/Songkick/songkickCover.png'
import songkickOGWalkthrough from '../SongkickOGWalkthrough.mp4'
import songkickWalkthrough from '../SongkickWalkthrough.mp4'
import songkickBrand1 from '../images/Songkick/songkickBrand1.png'
import songkickBrand2 from '../images/Songkick/songkickBrand2.png'
import userInterviewsInsights from '../images/Songkick/userInterviewsInsights.png'
import cardSortCards from '../images/Songkick/cardSortCards.jpg'
import comingSoon from '../images/comingSoon.png'
import compositeIAs from '../images/Songkick/compositeIAs.png'
import userAppFeedback from '../images/Songkick/userAppFeedback.png'
import appStoreFeedback from '../images/Songkick/appStoreFeedback.png'
import songkickInterestedGoing from '../images/Songkick/songkickInterestedGoing.png'
import songkickYourPlans from '../images/Songkick/songkickYourPlans.png'
import songkickFriendsConcerts from '../images/Songkick/songkickFriendsConcerts.png'
import survey2Methods from '../images/Songkick/survey2Methods.png'
import surveyFriendsDiscovery from '../images/Songkick/surveyFriendsDiscovery.png'
import userPersonas from '../images/Songkick/userPersonas.png'
import brainstormConcertsSearch from '../images/Songkick/brainstormConcertsSearch.jpg'
import brainstormRefineScan from '../images/Songkick/brainstormRefineScan.png'
import brainstormSocial from '../images/Songkick/brainstormSocial.png'
import notecardsConcertsSearch from '../images/Songkick/notecardsConcertsSearch.jpg'
import notecardsProfile from '../images/Songkick/notecardsProfile.jpg'
import notecardsScan from '../images/Songkick/notecardsScan.jpg'
import songkickOnboardingScanningFlow from '../images/Songkick/SongkickOnboardingScanningFlow.png'
import songkickSocialFlow from '../images/Songkick/SongkickSocialFlow.png'
import songkickConcertBrowseFlow from '../images/Songkick/SongkickConcertBrowseFlow.png'
import designSystem from '../images/Songkick/DesignSystem.png'
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
import ButtonBold from '../components/ButtonBold'
import VideoPhone from '../components/VideoPhone'

export default function SongkickRedesign(props) {
  return(
    <>
      <NavBar navLinks = {[{tabTitle: "Introduction", href: '#frameSection'}, {tabTitle: "Design Research", href: '#designResearchSection'}, {tabTitle: "Iteration", href: '#iterationSection'}, {tabTitle: 'User Flows', href: '#solutionSection'}]} />
      <section id = 'frameSection'>
        <PageTitle title = {"Songkick Redesign"} category = {"Interface Design"}/>
        <LargeImage imageUrl={songkickCover}/>
        <TextOnlyRow header = {"Background + Overview"} paragraphs = {['Following my passion for concerts and festivals, I set out on a design journey to better the user experience of an app central to that domain – Songkick. I set off on this project on a hunch – having used the Songkick website previously, I knew the UI was extremely inconcistent, and that there were features that seemed poorly thought out at first glance. Moreover, because Songkick is a much smaller company than may of the music industry tech giants, I wondered if there were underlying UX problems resulting from this lack of infrastructure and investment in design best practices.', 'I knew that to uncover whether or not this hunch was valid, the beginning portion of this project would be very research-heavy, as I had to 1. understand the company, 2. understand the product, 3. understand the user context, 4. understand the user experience (and the key shortcomings within!), and iterate towards a solution!']}/>
      </section>
      <section id = 'designResearchSection'>
        <SectionTitle title = {'Foundational Research'} titleCaption = {'Performing organization research, constructing initial individual assumptions based on app usage, conducting qualitative user interviews.'}/>
        <TwoImages imageUrls = {[songkickBrand1, songkickBrand2]} captions = {['Core product offerings', 'Expressing their users-first mission']}/>
        <TextOnlyRow header = {"Organization Research – Songkick the Company"} paragraphs = {['I knew that, because this was a redesign of a company\'s flagship product, the goal of this project would be to advance the mission of the company through the new design.', 'What is that mission? After reading up on Songkick\'s About page among other resources, it became clear that their number one priority was putting the fan first, to provide optimized access/awareness of the live music in their area that they would want to see.']}/>
        <VideoPhone source = {songkickOGWalkthrough}/>
        <TextOnlyRow header = {"Initial Testing + Building Assumptions"} paragraphs = {['As you can see in the above video, there we some perceptible UI shortcomings of the design, and as I walked through the app (I\'m fairly familiar with the Songkick website), I began to piece together micro and macro problems, namely:','Marking a concert as "Interested" or "Going" provides the user with no obvious value. This should either be fleshed out or done away with', 'There are way too many tracked artists ("tracked" means I\'ll be updated if they\'re performing near me) generated from my Spotify account – did you see how long I had to scroll??', 'The concerts page is confusing – I can filter, but I can only sort by genres, and not my tracked artists? The horizontal carousels also create a very overwhelming UI of seemingly randomly-generated content.']}/>
        <LargeImage imageUrl={userInterviewsInsights} caption='Consolidating persisting insights from user interviews'/>
        <TextOnlyRow header = {"User Interviews – Understanding the User + their Journey"} paragraphs = {['My user interviews allowed me to build a mental model on where Songkick fits in to the current user journey. To avoiding restating the above, my  interviews took me on a deep dive into the current ways that people discover – and choose – concerts to go to in their area. Throughout the interviews, I asked myself, "What is the underlying message to their answer? How does this insight relate to Songkick – does it reveal a potential strength or weakness?".']}/>
        <SectionTitle title = {'In-Depth User Research'} titleCaption = {'Information Architecture testing, user testing with various flows, user feedback + app store feedback, consolidating insights, building hypotheses, collecting quantitative survey data.'}/>
        <TwoImages imageUrls = {[cardSortCards, compositeIAs]} captions={['The categories that I had users sort', 'Composite view of all IA\'s produced']}/>
        <TextOnlyRow header = {"Card Sorting Results"} paragraphs = {['After explaining Songkick\'s mission and the base functionality of each category (each category being a feature/tab from the Songkick app) to users, I tasked users to, in short redesign Songkick. However, I explictly told users to pair what categories went together with core caveats: 1. they can change the functionality of a category if necessary, 2. they can explicitly leave out a category, and 3. they can bring in a new category/feature to suit their needs. My main goal was to understand users\'s mental model of how they expect the app to be organized!', 'After performing the testing and consolidating the created IA\'s, I realized that Songkick does a great job at aligning their navigation structure with users\'s expectations. Some key insights were that users\'s viewed Profile as "they place where [they] would mess with preferences", and Concerts being "that initial feed that you see, the results based on your preferences.". Another insight, simultaneous to those, was that Notifications was a very essential feature, but moreso in push notifications format!']}/>
        <TextOnlyRow header = {"In-App User Testing"} paragraphs = {['For in-app user testing, I ran my users (who had never seen the app before) through 3 primary flows and observed their thought process at every step of the flow. The tasks were as follows:', 'Scan your artists from Spotify.', 'Knowing what city you will intern in this summer, find a concert that you will want to go to.', 'Start tracking a new location.', 'I then recorded their reactions during and after the tasks\'s completions.']}/>
        <LargeImage imageUrl={userAppFeedback} caption='The good, the bad, and the ugly'/>
        <TextOnlyRow header = {"App Store User Feedback"} paragraphs = {['To bolster the robustness of my in-app feedback, I read through Songkick reviews on the Apple app store and Google Play store.']}/>
        <LargeImage imageUrl={appStoreFeedback} caption='The bad, and the ugly'/>
        <TextOnlyRow header = {"Consolidating Insights and Building Hypotheses"} paragraphs = {['After consolidating insights, I realized that 2 of my initial assumptions were very accurate. Users explicitly confirmed that 1.  the scanning process is extremely sub-optimal (note the quote that I bolded and put in red!), and 2. the content strategy and overall design of the main view, Concerts, is incredibly flawed and confusing for users.', 'These key painpoints are huge! As I realized in my user interviewing, the value users see in Songkick is the magical ability to track exclusively artists they like and to be able to easily find those concerts relevant to them. As the feedback shows, Songkick falls tragically short of these user goals.', 'However, I still needed further research to answer my final point of inquiry – to do away with the interested/going feature, or to build it out?']}/>
        <ThreeImages imageUrls={[songkickInterestedGoing, songkickYourPlans, songkickFriendsConcerts]} captions = {["Marking a concert as interested/going", "Seeing that list in your plans", "on the website, viewing friends' plans"]}/>
        <TextOnlyRow header = {"The Current Interested/Going Implementation (or lack thereof)"} paragraphs = {['Currently, the app allows users to mark concerts as interested or going, yet there is no apparent benefit, save for viewing you\'re upcoming plans, to doing so in-app. On the website, the value attained is being able to view friends\' upcoming plans, which lacks discoverability altogether. My users confirmed that they only saw marking a concert as Interested or Going as beneficial if it mean that their friends could be notified of these micro-interactions.', 'As I looked through the websites implementation, and thought about the insights that I had learned about friends being a huge influence on concert discovery and attendance, I saw this as a potential area to learn more about. Queue the quantitative research!']}/>
        <TwoImages imageUrls={[survey2Methods, surveyFriendsDiscovery]} captions = {['"Friends" was the most influential decision criteria for going to a concert!', 'Over half of the users had heard about most of their concerts from friends.']}/>
        <TextOnlyRow header = {"Survey Reflection"} paragraphs = {['Overall, my survey responses confirmed that for most users, the concert discovery and decision journey is social. I decided, with this data in hand, to move forward in fleshing out functionality to facilitate further concert discovery and conversion via the social relations already ingrained in the process.', 'Because of the contextual insights I had gained in my interviews (i.e., users would see themselves using this app every week or month), I did not want to replicate social network or messaging functionality established in widely and frequently-used social media. Instead, I wanted to focus on leveraging the pre-existing relations to streamline the concert discovery and decision-making touchpoints in the user journey.']}/>
      </section>
      <section id = 'iterationSection' style  = {{paddingBottom: 150 + 'px'}}>
        <SectionTitle title = {'From Insights to Screens (but not quite)'} titleCaption = {'Creating dedicated user personas, 3 core design goals, brainstorming solutions/features, sketching screens.'}/>
        <LargeImage imageUrl={userPersonas} caption='3 user personas to illustrate app shortcomings and areas of improvement'/>
        <TextOnlyRow header = {"3 User Personas = 3 Macro Design Goals"} paragraphs = {['While there are an incredible amount of UI tweaks to be made to Songkick based on the in-app feedback that I had gathered, creating the above user personas based on my UX research allowed me to focus on a subset of persisting problems that, if solved well, would contribute to 80% of usability improvement (look up the Pareto principle, or the 80/20 rule). From here I could launch my designing, my 3 core design goals being: ', 'Refine Scan/building up tracked artists in a flexible, effective manner to align with users\’ true live music preferences.', 'Leverage social networks and Interested/Going feature to facilitate more discovery and engagement without attempting to replace current established lines of communication.', 'Streamline and align Concerts and Search view/functionality with expectations and needs of users.']}/>
        <TextOnlyRow header = {"3 Design Principles"} paragraphs = {['Coincidentally continuing the theme of 3, I chose three higher level design principles to guide my wireframing and functionality, each thoroughly informed and backed from my UX research. In sum, I chose to:', 'Design for Ease/Automation. Make on-boarding/set-up easy, setting up the user to provide the information to best serve them in the most painless manner', 'Design for Discovery. Optimizing push-notifications, recommendation, Search feature, tracking user location, etc.', 'Design for Delightfulness. Eradicating clutter, adopting user-friendly micro interactions, making suggestions align with users’ true interests as much as possible from a product standpoint (i.e., disregarding the back end).']}/>
        <SubSectionHeader header = {'Brainstorming Solutions'}/>
        <TwoImages imageUrls={[brainstormSocial, brainstormRefineScan]} captions = {['How might we leverage social networks for concert discovery?', 'How might we refine the scanning process?']}/>
        <TwoImages topPadding = {0} imageUrls={[brainstormConcertsSearch]} captions = {['How might we improve the Concerts and Search views?']}/>
        <SectionTitle title = {'Prototyping + Feedback + Iterating'} titleCaption = {'Testing screen prototypes, consolidating feedback, iterating core solutions.'}/>
        <TextOnlyRow header = {"Feedback"} paragraphs = {["My users rated this approach as much more effective than blindly tracking all of the artists on their libraries. However, their was one persistent complaint that was very insightful from a product mechanic perspective: 'what if I start listening to new artists: I doubt that they would bubble up to my top 25 artists! That list wouldn't help me then."]}/>
        <LeftContentRightImage imageUrl={notecardsConcertsSearch} header = 'Concerts and Search' paragraphs = {["For concerts, I decided to dedicate the primary tab to the main feed (based on users' preferences) and the secondary tab to the recommended feed. I tested 3 card layouts for the concerts feed, which I decided to render in a vertical scroll because horizontal carousels lack the efficiency/discoverability necessary for the main feed main use case.", "I decided to  allow Search to additionally account for locations and genres based on my user interviews and testing. I tested 2 approaches to showing search results."]}/>
        <TextOnlyRow header = {"Feedback"} paragraphs = {["Users unanimously preferred the overall Concerts view structure compared to the original horizontal carousel UI. Half of my users preferred the square (2 column) card layout, while the other half preferred the wide rectangular card layout.", "Users appreciated the Recent Searches feature of the Search view, and preferred the tabbed search results UI. As one user pointed out, 'I hate how Spotify doesn't separate albums from songs from artists when I search things'."]}/>
        <LeftContentRightImage imageUrl={notecardsScan} header = 'Scanning Onboarding' paragraphs = {["For scanning, I decided to revamp the product mechanics: instead of automatically tracking hundreds of artists that users have liked on Spotify, I decided to have Songkick automatically track just the top 25 artists from their library (this was the average number of artists that users wanted to see live in my user interviews). Then, during the onboarding (and persisting as part of their Profile view), users could further curate their profile easily. This was most inspired by my Raver Ryan user persona."]}/>
        <TextOnlyRow header = {"Feedback"} paragraphs = {["My users rated this approach as much more effective than blindly tracking all of the artists on their libraries. However, their was one persistent complaint that was very insightful from a product mechanic perspective: 'what if I start listening to new artists: I doubt that they would bubble up to my top 25 artists! That list wouldn't help me then."]}/>
        <LeftContentRightImage imageUrl={notecardsProfile} header = 'Profile – Interested and Going' paragraphs = {["Inspired by user journeys, I firstly decided to create a Groups feature, where friends can create/join groups and receive shared notifications based on their preferences, among other incentives. ", "Aligning with my Social Sally user persona, I also decided to allow for users to add friends and recieve notifications about them based on their Interested/Going in-app interactions."]}/>
        <TextOnlyRow header = {"Feedback"} paragraphs = {["Users were weary of making this a fully fleshed out friends feature, wherein users make accounts and explicitly add/request friends. They also voiced concern about receiving notifications about \"friends\" that they didn't care about."]}/>
      </section>
      <section id = 'solutionSection' style = {{paddingBottom: 150 + 'px', backgroundColor: 'rgb(30,30,30)'}}>
        <SectionTitle light = {true} title = {'High Fidelity Mockups'} titleCaption = {'Re-visiting Songkick\'s Brand Design, building pseudo-design system, finishing in Adobe Xd!'}/>
        <LeftContentRightImage light = {true} header = 'Design System' paragraphs = {["I kept a dark-themed layout because it met the users' mental model of concerts and live music. Also, I decided to use the Songkick red as a signifier for 'tracked' UI, from close friends (whom a user 'tracks', or receieves notifications from) to tracked artists. To compensate for this use of red, I decided to render error/destructive state in orange. I used a secondary version of Songkick's red (pink) to represent for onboarding pop-ups."]} imageUrl={designSystem}/>
        <LargeImage imageUrl={songkickOnboardingScanningFlow}/>
        <LargeImage imageUrl={songkickConcertBrowseFlow}/>
        <LargeImage imageUrl={songkickSocialFlow}/>
        <VideoPhone source = {songkickWalkthrough}/>
        <TextOnlyRow light = {true} header = {"User Final Feedback and Testing"} paragraphs = {["To test how successful my redesign was, I knew I had to get my final prototypes back in the hands of users. How did I define 'success'? As I stated earlier, a successful redesign would be to substantially advance the mission of Songkick ('to povide optimized access to and awareness of relevant live music for fans') through the new design.", "Since improvement was a relative measurement, I brought my designs back to the users who had originally completed the user testing on the original Songkick app. I walked them through those same core tasks that I had originally assigned them, as well as introducing them to the new features/UI (i.e., groups). I then detailed their in-app reactions as well as their thoughts post-testing.", "As I am still testing users, I am still waiting to post the final redesign feedback here!"]}/>
        <TextOnlyRow light = {true} header = {"Improvements and Next Steps"} paragraphs = {["Where will I take this project further? As I'm still consolidating final user feedback, this list is incomplete, but I've listed as much as I can below:", "Running this by Songkick themself. As of now, Songkick has no idea that I redesign their app. But I intend to change that (via many cold emails) and at the very least, to hear their initial thoughts!", "Test the Groups feature intensely. The social side of Songkick is the most volatile, for me, as many users claimed they would only see themselves using Songkick around once a month. Would only a few users add their friends? ", "Optimizing push notifications. Throughout this whole redesign, I was weary to focus on push notifications because I worried it took away from the app design itself. But, as I learned with user interviews, push notifications could make or break their UX. Songkick could be improved via intense quantitative research on which push notifications are effective (enhance concert discovery and conversion) versus disruptive."]}/>
      </section>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
