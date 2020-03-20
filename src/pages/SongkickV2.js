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
import ImageForHorizontalScroll from "ComponentsV2/AtomicComponents/ImageForHorizontalScroll.js"
import userJourneyInsights from "images/UserJourneyInsights.png"
import uXResearchForm from "images/UXResearchForm.png"
import uXResearchResults from "images/UXResearchResults.png"
import inAppTestingFeedback from "images/inAppTestingFeedback.png"
import songkickInterestedGoingOriginal from "images/SongkickInterestedGoingOriginal.png"
import interestedGoingWebsite from "images/InterestedGoingWebsite.png"
import appStoreFeedback from "images/appStoreFeedback.png"
import songkickCover from "images/BackgroundSongkick.jpg"
import compositeIAs from '../images/Songkick/compositeIAs.png'
import roddy from 'Images/SKroddy.jpg'
import sally from 'Images/SKportrait5.jpeg'
import matt from 'Images/SKportrait10.jpeg'
import UpArrow from "ComponentsV2/AtomicComponents/UpArrow.js"
import NavBarV2 from "ComponentsV2/AtomicComponents/NavBarV2.js"
import VideoV2 from "ComponentsV2/AtomicComponents/VideoV2.js"
import UserPersona from 'ComponentsV2/AtomicComponents/UserPersona.js'
import HorizontalScrollContainer from 'ComponentsV2/AtomicComponents/HorizontalScrollContainer.js'
import browseFlow from "Images/BrowseFlow.png"
import socialFlow from "Images/SocialFlow.png"
import scanningFlow from "Images/ScanningFlow.png"
import songkickOGWalkthrough from '../SongkickOGWalkthrough.mp4'
import songkickWalkthrough from '../SongkickWalkthrough.mp4'
import ImageV2 from "ComponentsV2/AtomicComponents/ImageV2.js"
import Todo from 'ComponentsV2/AtomicComponents/Todo.js'
import CardSortCard from 'ComponentsV2/AtomicComponents/CardSortCard.js'
import brainstormRefineScan from '../images/Songkick/brainstormRefineScan.png'
import brainstormSocial from '../images/Songkick/brainstormSocial.png'
import brainstormConcertsSearch from '../images/Songkick/brainstormConcertsSearch.jpg'
import tracking1 from 'images/NotecardsTracking/tracking1.png'
import tracking2 from 'images/NotecardsTracking/tracking2.png'
import tracking3 from 'images/NotecardsTracking/tracking3.png'
import tracking4 from 'images/NotecardsTracking/tracking4.png'
import concerts1 from 'images/NotecardsConcertsSearch/concerts1.png'
import concerts2 from 'images/NotecardsConcertsSearch/concerts2.png'
import concerts3 from 'images/NotecardsConcertsSearch/concerts3.png'
import concerts4 from 'images/NotecardsConcertsSearch/concerts4.png'
import search1 from 'images/NotecardsConcertsSearch/search1.png'
import search2 from 'images/NotecardsConcertsSearch/search2.png'
import search3 from 'images/NotecardsConcertsSearch/search3.png'
import profile1 from 'images/NotecardsSocial/profile1.png'
import profile2 from 'images/NotecardsSocial/profile2.png'
import profile3 from 'images/NotecardsSocial/profile3.png'
import profile4 from 'images/NotecardsSocial/profile4.png'
import profile5 from 'images/NotecardsSocial/profile5.png'
import friends1 from 'images/NotecardsSocial/friends1.png'
import groups1 from 'images/NotecardsSocial/groups1.png'
import sKDesignSystem from 'images/SKDesignSystem.png'

export default function SongkickV2(props) {
  let {} = props;
  return(
      <>
        <CaseStudyTopSection overline = {'MOBILE APP'} title = {'Songkick Redesign.'} image = {songkickCover} description = {'Much more than a sleek facelift, my redesign of the live music platorm, Songkick, drives home a user-centric experience backed by data, interviews, and user testing.'}/>
        <CaseStudyProcessSection>
          <IndividualProcessSection id = 'Background'>
            <PrimaryHeading marginTopClass = 'marginTop0' heading = {'Background'}/>
            <Paragraph text = {'Following my passion for live music, I set out to better the user experience of an app central to that domain – Songkick. I began this project on a hunch – having used the Songkick website previously, I knew the UI was extremely inconsistent, and that there were features that seemed poorly thought out. Moreover, because Songkick is a much smaller company than many of the music industry tech giants, I wondered if there were underlying UX problems resulting from this lack of infrastructure and investment in design best practices.'}/>
            <Paragraph text = {'I knew that to uncover whether or not this hunch was valid, the beginning portion of this project would be very research-heavy.'}/>
            <SecondaryHeading heading = 'Redesign goals'/>
            <ListItem underlayText = {'1'} boldText = {'Understand the product'} text = {'Know the company and their product'} marginTopClass = {'marginTop5'}/>
            <ListItem underlayText = {'2'} boldText = {'Understand the user'} text = {'Analyze the user context and overall user experience'}/>
            <ListItem underlayText = {'3'} boldText = {'Iterate towards a solution'} text = {'Consolidate insights, iterate towards a solution via prototyping'}/>
            <Insight insight = {"At a higher level, a successful redesign would advance/promote Songkick\'s mission through an enhanced UX."}/>
          </IndividualProcessSection>
          <IndividualProcessSection id = 'Foundational_Research'>
            <SectionTitle title = {'Foundational Research'} underlayText = {'01'} description = {'Performing organization research, constructing initial assumptions based on app usage, conducting qualitative user interviews to understand user context.'}/>
            <PrimaryHeading overline = {'ORGANIZATION RESEARCH'} heading = {'What is Songkick?'}/>
            <SecondaryHeading heading = {'The product'}/>
            <Paragraph text = {'Songkick provides it\'s users with "personalized concert alerts". Users rely on Songkick to stay in the know about when and where their favorite artists are performing live near them.'}/>
            <BulletItem bullet = {<i className="fas fa-bookmark"></i>} boldText = {'Tracking'} text = {'Users must track both artists and locations, allowing Songkick\'s UI to display primarily concerts from the user\'s tracked artists within their tracked locations.'}/>
            <BulletItem bullet = {<i className="fas fa-barcode"></i>} boldText = {'Scanning'} text = {'One popular way that users can track their favorite artists: by scanning their music library, like Spotify. Each time they scan, Songkick automatically tracks each artist in that user\'s library.'}/>
            <BulletItem bullet = {<i className="fas fa-bell"></i>} boldText = {'Notifications'} text = {'Push notifications are a big part of the experience, where users mostly recieve alerts about newly announced concerts that they are tracking.'}/>
            <BulletItem bullet = {<i className="fas fa-ticket-alt"></i>} boldText = {'Ticket Purchases'} text = {'Songkick provides quick access to popular ticket-purchasing platforms and occasionally allows users to purchase concert tickets from them directly.'}/>
            <SecondaryHeading heading = {'The company'}/>
            <Paragraph text = {'I knew that, because this was a redesign of a company\'s flagship product, the goal of this project would be to advance the mission of the company through the new design.'}/>
            <Paragraph text = {'What is that mission? After reading up on Songkick\'s About page among other resources, it became clear that their number one priority was putting the fan first.'}/>
            <Quote quote = {'[Getting to a concert] is hard work. We want to make live music effortless, so that anyone can experience it.'} speaker = {'Songkick'}/>
            <PrimaryHeading overline = {'INITIAL TESTING'} heading = {'Building hypotheses'}/>
            <SecondaryHeading heading = {'Initial Testing'}/>
            <Paragraph text = {'Here\'s what the current version of Songkick looks like.'}/>
            <VideoV2 source = {songkickOGWalkthrough} caption = {'A walkthrough through the current Songkick app'}/>
            <Paragraph marginTopClass = {'marginTop4'} text = {'As you can see in the above video, there we some perceptible UI shortcomings of the design, and as I walked through the app (I\'m fairly familiar with the Songkick website), I began to piece together micro and macro problems.'}/>
            <SecondaryHeading heading = {'Initial Hypotheses'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>}
            boldText = {'Tracking artists'} text = {'There are way too many tracked artists ("tracked" means I\'ll be updated if they\'re performing near me) generated from my Spotify account – did you see how long I had to scroll??'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>}
            boldText = {'Concerts view'} text = {'The Concerts view is confusing – I can filter, but I can only sort by genres, and not my tracked artists? The horizontal carousels also create a very overwhelming UI of seemingly randomly-generated content.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>}
            boldText = {'Interested/Going feature'} text = {'Marking a concert as "Interested" or "Going" provides the user with no obvious value. This should either be fleshed out or done away with.'}/>
            <PrimaryHeading overline = {'INITIAL USER INTERVIEWS'} heading = {'Understanding the user & their journey'}/>
            <SecondaryHeading heading = 'Initial insights'/>
            <Paragraph text = {'My user interviews allowed me to build a mental model of which touchpoints Songkick fits in to the current user journey.'}/>
            <ImageV2 id = {'userJourneyInsightImage'} image = {userJourneyInsights} caption = {'A high-level summary of the main takeaways from users about how they find concerts'}/>
            <SecondaryHeading heading = 'Reading between the lines'/>
            <BulletItem bullet = {<i className="fas fa-square"></i>}
            boldText = {'The importance of friend groups'} text = {'Often times, interviewees described finding out about concerts when one person in their friend group posted something in a group chat or shared the news about a concert in person. There was also surprising overlap between friend groups and live music tastes!'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>}
            boldText = {'"Accidental" discovery'} text = {'I thought it interesting how no one really "goes out to find a concert", they kind of happen across them via word-of-mouth or during social media sessions.'}/>
            <Quote quote = {'When it comes to concerts, I don’t actively seek them… if they stumble upon me I’ll check them out…'} speaker = {'Interviewee 5'}/>
            <BulletItem marginTopClass = {'marginTop4'} bullet = {<i className="fas fa-square"></i>}
            boldText = {'Red flag: scanning artists'} text = {'While most users confirmed the Spotify was an accurate representation of their live music tastes, it raised eyebrows with regards to how "scanning your Spotify library" actually manifests in the app.'}/>
            <Insight insight = {['What artists get tracked  when Songkick "Scans your Spotify library"?', 'The short answer – all of them. For example, if you like just 1 song featuring artist X, artist X will be automatically tracked by Songkick when you scan your Spotify playlist.', 'My personal tracked artists count: 467!']}/>
            <StatRow stats = {[{stat: '25', description: 'The average number of artists that users say they would consider seeing live.'}, {stat: '300+', description: 'A rough estimate of average number of artists that would be automatically tracked from scanning a user\'s Spotify library. Yikes!'}]}/>
          </IndividualProcessSection>
          <IndividualProcessSection id = 'In-Depth_User_Research'>
            <SectionTitle title = {'In-Depth UX Research'} underlayText = {'02'} description = {'Information Architecture testing, user testing with various flows, user feedback + app store feedback, consolidating insights, revisiting hypotheses, collecting quantitative survey data.'}/>
            <PrimaryHeading overline = {'INFORMATION ARCHITECTURE TESTING'} heading = {'What do the users expect?'}/>
            <SecondaryHeading id = {'cardHeaderSK'} heading = {'Categories (cards) for card sorting'}/>
            <Paragraph text = {'First, I explained Songkick\'s mission and the base functionality of each category (each category being a feature/tab from the Songkick app) to users.'}/>
            <HorizontalScrollContainer id = 'cardSortCardsSK' leftAlignmentWithId = {'cardHeaderSK'} rightAlignmentToId = {"lastCardSortCardSK"} >
              <CardSortCard title = {'Search'}/>
              <CardSortCard title = {'Interested'}/>
              <CardSortCard title = {'Going'}/>
              <CardSortCard title = {'Concerts'}/>
              <CardSortCard title = {'Tracked Locations'}/>
              <CardSortCard title = {'Recommended Artists'}/>
              <CardSortCard title = {'Recommended Concerts'}/>
              <CardSortCard title = {'Notifications'}/>
              <CardSortCard title = {'Friends'}/>
              <CardSortCard title = {'Filter Concerts'}/>
              <CardSortCard title = {'Profile'} id = {'lastCardSortCardSK'}/>
            </HorizontalScrollContainer>
            <SecondaryHeading  heading = {'Card sorting results'}/>
            <Paragraph text = {'Then, I tasked users to, in short, redesign Songkick. This is what they came up with, and I made sure that they explained their thinking every step of the way.'}/>
            <ImageV2 desktopColumns = {6} id = {"compositeIASK"} image = {compositeIAs} caption = {'Here\'s how my users expected Songkick to be organized'}/>
            <Insight insight = {['Most users correctly reproduced the higher level architecture, and there wasn\'t any overlap across the discrepancies that users had between what they expected and the app\'s true organization.', 'While I gained many insights, I didn\'t see any core shortcomings of the current IA.']}/>
            <SecondaryHeading heading = {'Card sorting insights'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>}text = {'Users viewed Profile as "the place where [they] would mess with preferences"'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} text = {'Concerts being "that initial feed that you see, the results based on your preferences."'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} text = {'Notifications is a very essential feature, but users weren\'t sure if it deserved its own tab or not. Many claimed that push notifications was its most effective implementation.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} text = {'To users, Search = used when looking for something that’s not permanent, not a persisting preference/setting.'}/>
            <PrimaryHeading overline = {'IN-APP TESTING'} heading = {'Observing Songkick in the wild'}/>
            <Paragraph text = {'For in-app user testing, I ran my users (who had never seen the app before) through 3 primary flows and observed their thought process at every step of the flow.'}/>
            <SecondaryHeading heading = {'User tasks'}/>
            <ListItem underlayText = {'1'} text = {'Scan your artists from Spotify.'}/>
            <ListItem marginTopClass = {'marginTop4'} underlayText = {'2'} text = {'Find a concert that you\'ll want to see this summer.'}/>
            <ListItem marginTopClass = {'marginTop4'} underlayText = {'3'} text = {'Start tracking a new location.'}/>
            <SecondaryHeading heading = {'Reactions, during and after'}/>
            <Paragraph text = {'Users walked me through what they were thinking during each task, what they liked, what they didn\'t, and what confused them.'}/>
            <ImageV2 id = {'inAppFeedbackSK'} image = {inAppTestingFeedback} caption = {'Key quotes from satistifed, confused, and frustrated users'}/>
            <Quote marginTopClass = {'marginTop4'} quote = {'those artists on the Concerts view aren’t any I’d go to so I don’t know why they\'re giving me all of that… like I don’t want to #$%&ing filter all of this @#$%... if I I’m switching the location and the dates… I expect that @#$% to be there – I want these to be the artists that I’m into.'} speaker = {'one particularly frustrated user'}/>
            <Insight insight = {['The value that users saw in Songkick is the magical ability to track exclusively artists they like and to be able to easily find those concerts relevant to them.', 'Unfortunately, once they actually began to use the app, many felt let down.']}/>
            <PrimaryHeading overline = {'APP STORE FEEDBACK'} heading = {'Listening to the general user base'}/>
            <Paragraph text = {'To bolster the robustness of my in-app feedback, I read through Songkick reviews on the Apple app store and Google Play store.'}/>
            <ImageV2 image = {appStoreFeedback} id = {'appStoreFeedbackSK'} caption = {'The good, the bad, and the ugly... well, maybe not the good'}/>
            <Insight insight = {['Highly voted reviews mainly focused on the Concerts view, with users being dissatisfied with its clutter and lack of chronologically-ordered concerts.', 'A lack of relevant recommendations and tracked artists was also frequently cited as an area of frustration.']}/>
            <PrimaryHeading overline = {'CONSOLIDATING INSIGHTS'} heading = {'Reflecting on my 3 hypotheses '}/>
            <SecondaryHeading heading = {'Users explicitly confirmed...'}/>
            <BulletItem bullet = {<i className="fas fa-check"></i>}
            boldText = {'Tracking artists'} text = {'The scanning process is extremely sub-optimal (note the quote that I bolded). After scanning, users get inundated with concert UI about artists that they wouldn\'t care to see live.'}/>
            <BulletItem bullet = {<i className="fas fa-check"></i>} boldText = {'Concerts view'} text = {'The content strategy and overall design of the main view, Concerts, is incredibly flawed and confusing for users.'}/>
            <SecondaryHeading heading = {'Which leaves us with one hypothesis'}/>
            <BulletItem bullet = {<i className="fas fa-question"></i>} boldText = {'Interested/Going feature'} text = {'To do away with the Interested/Going feature, or to build it out?'}/>
            <Insight insight = {['As voiced in my interviews, users only saw the Interested/Going feature as beneficial if it mean that their friends could be notified of these micro-interactions, if it was SOCIAL.', 'I still wasn\'t satisfied – I needed to know definitively if users would gain value from "socializing" this part of the concert discovery process.']}/>
            <PrimaryHeading overline = {'FURTHER RESEARCH'} heading = {'Investigating the Interested/Going feature'}/>
            <SecondaryHeading heading = {'The current implementation, or lack thereof'}/>
            <Paragraph text = {'Currently, the app allows users to mark concerts as Interested or Going, yet there is no apparent benefit, save for viewing your upcoming plans, to doing so in-app.'}/>
            <ImageV2 image = {songkickInterestedGoingOriginal} id = {'songkickInterestedGoingOriginal'} caption = {'The current Interested/Going feature on the app'}/>
            <Paragraph marginTopClass = {"marginTop4"} text = {'While on the website, the value attained is being able to view friends\' upcoming plans, which lacks discoverability altogether (it\'s at the very bottom of the long-scrolling main page).'}/>
            <ImageV2 image = {interestedGoingWebsite} id = {'intGoingWebsite'} caption = {'The only UI on the Songkick website where you can view your friends\' concerts marked as either Interested and Going'}/>
            <SecondaryHeading heading = {'Queue the quantitative research'}/>
            <Paragraph text = {'To further dive into this hypothesis, I reached out to my Stanford classmates to learn about how important word-of-mouth transmission and peer influence are in concert conversion, or one\'s likelihood to go to a concert.'}/>
            <ImageV2 image = {uXResearchForm} id = {'uxResearchFormSK'} caption = {'The form that I sent my Stanford class of 2021 classmates'}/>
            <ImageV2 image = {uXResearchResults} id = {'uxResearchResultsSK'} caption = {'The responses that I eventually accrued'}/>
            <StatRow stats = {[{stat: '93%', description: 'claimed that "Friends" was one of the top 2 most important factors when deciding to go to a concert or not.'}, {stat: '64%', description: 'discovered a majority of their attended concerts via word-of-mouth.'}]}/>
            <Insight insight = {['Overall, my survey responses confirmed that for most users, the concert discovery and decision journey is social.', 'I decided to move forward in fleshing out functionality to facilitate further concert discovery/conversion via the social relations ingrained in the process.']}/>
            <SecondaryHeading heading = {'A word of caution (to myself)'}/>
            <Paragraph text = {'Because of the contextual insights I had gained in my interviews (i.e., users would see themselves using this app every week or month), I did not want to replicate social network or messaging functionality established in widely and frequently-used social media.'}/>
          </IndividualProcessSection>
          <IndividualProcessSection id = {'Prototyping_and_Iteration'}>
            <SectionTitle title = {'Insights to Screens'} underlayText = {'03'} description = {'Creating dedicated user personas, 3 core design goals, brainstorming solutions/features, testing screen prototypes, consolidating feedback, iterating core solutions.'}/>
            <PrimaryHeading id = 'abovePersonasSK' overline = {'USER PERSONAS'} heading = {'From many, 3 personas'}/>
            <HorizontalScrollContainer rightAlignmentToId = {'lastPersonaSK'} leftAlignmentWithId = {'abovePersonasSK'} id = {'userPersonasSKHorizontalScroll'}>
              <UserPersona isFirst = {true} name = {'Raver Roddy'} image = {roddy} description = {'Roddy loves to go to EDM raves during free weekends, but he generally listens to hip-hop when he\'s not catching live music, regardless of if he is studying or working out.'} userJourney = {[{step: 'Decides he wants to go to more raves with his friends.', emoji: '😆'}, {step: 'Downloads Songkick hoping it can help.', emoji: '😇'}, {step: 'Scans his Spotify playlist and gets 300+ hip-hop artists.', emoji: '😵'}, {step: 'Creates new account, manually searches every EDM artist.', emoji: '😓'}, {step: 'Realizes this is way too tedious and time consuming.', emoji: '🤬'}]}/>
              <UserPersona name = {'Moving Matt'} image = {matt} description = {'Matt is a busy college student always making plans to see concerts. This coming summer, he\'ll be moving to New York City to pursue a banking internship.'} userJourney = {[{step: 'Excited to make plans to see concerts in NYC.', emoji: '😆'}, {step: 'Downloads Songkick in hopes that he can find shows.', emoji: '😇'}, {step: 'Becomes super confused by the Concerts view.', emoji: '🤯'}, {step: 'Can’t find a chronological list of his recommended concerts.', emoji: '🤬'}, {step: 'Gets alerts for artists that he doesn’t like.', emoji: '😤'}]}/>
              <UserPersona name = {'Social Sally'} image = {sally} description = {'Sally, a social butterfly, has a super diverse music taste. She loves to go to all kinds of live events as long as she has at least one friend to go with.'} userJourney = {[{step: 'Finds Songkick isolating, yearns for a social aspect.', emoji: '🥺'}, {step: 'Instead, asks around about concerts people are seeing.', emoji: '🧐'}, {step: 'Realizes some people share an interest in a smaller artist, Yung Pinch.', emoji: '🤩'}, {step: 'Goes and has a great time with them!', emoji: '🥳'}, {step: 'Wishes there was a magical orb telling her who everyone was seeing.', emoji: '😫'}]} id = {'lastPersonaSK'}/>
            </HorizontalScrollContainer>
            <PrimaryHeading marginTopClass = {'marginTop4'} id = 'abovePersonas'overline = {'DESIGN GOALS'} heading = {'Where to focus my efforts'}/>
            <SecondaryHeading heading = {'3 personas = 3 core painpoints'}/>
            <Paragraph text = {'While there are an incredible amount of UI tweaks to be made to Songkick based on the in-app feedback that I had gathered, creating the above user personas based on my UX research allowed me to focus on a subset of persisting problems that, if solved well, would contribute to 80% of usability improvement (look up the Pareto principle, or the 80/20 rule). '}/>
            <SecondaryHeading heading = {'Core design areas'}/>
            <BulletItem bullet = {<i className="fas fa-star"></i>}
            boldText = {'Tracking artists (Raver Roddy)'} text = {'Refine Scan/building up tracked artists in a flexible, effective manner to align with users’ true live music preferences.'}/>
            <BulletItem bullet = {<i className="fas fa-star"></i>}
            boldText = {'Concerts view (Moving Matt)'} text = {'Streamline and align Concerts and Search view/functionality with expectations and needs of users.'}/>
            <BulletItem bullet = {<i className="fas fa-star"></i>}
            boldText = {'Interested/Going feature (Social Sally)'} text = {'Leverage social networks and Interested/Going feature to facilitate more discovery and engagement without attempting to replace current established lines of communication.'}/>
            <PrimaryHeading marginTopClass = {'marginTop4'} id = 'abovePersonas'overline = {'BRAINSTORMING'} heading = {'Brainstorming solutions'}/>
            <SecondaryHeading heading = {'Tracking artists ideas'}/>
            <Paragraph text = {'How might we refine the scanning/tracking process?'}/>
            <ImageV2 image = {brainstormRefineScan} id = {'brainstormRefineScanId'} caption = {'One of my mind maps for tackling the tracking problem'} desktopColumns = {6}/>
            <BulletItem marginTopClass = {'marginTop4'} bullet = {<i className="fas fa-square"></i>} boldText = {'Smaller scan + then curate further'} text = {'After scanning, Songkick automatically tracks the user\'s top 25 artists. The user can continue to curate (add or delete) tracked artists at their will.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'"Tinder" on-boarding like/dislike'} text = {'During on-boarding, after initial scan, user goes through "cards" of concerts that they might be interested in, likeing or dislikeing them as Songkick refines their tracked artist list.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'"Google Photos" interruption UI'} text = {'Intermittently during app-use, the UI pops up concert recommendations that the user might be interested in, and the user confirms or rejects that recommendation, updating their tracked artist list.'}/>
            <SecondaryHeading heading = {'Concerts (and Search) view ideas'}/>
            <Paragraph text = {'I decided to also focus on streamlining the Search view because most users, during my Card Sorting testing, viewed the Concerts and Search view as having intertwined functionality, and thus were confused by the Search view\'s seemingly limited scope.'}/>
            <Paragraph text = {'How might we improve the Concerts (and Search) view to fit the users\' needs and expectations?'}/>
            <ImageV2 image = {brainstormConcertsSearch} id = {'brainstormConcertsSearchId'} caption = {'Thinking through solutions to enhance the browsing/searching experience'} desktopColumns = {6}/>
            <BulletItem marginTopClass = {'marginTop4'} bullet = {<i className="fas fa-square"></i>} boldText = {'"Spotify" 2 tabs'} text = {'Divide the Concerts view into two tabs (like the Spotify Library view), Explore (the user\'s tracked preferences) and For You (the app\'s recommendations).'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Explore = vertical, For You = horizontal'} text = {'For the Explore tab, vertical shows the chronological ordering, while horizontal carousels maximize real estate (and sacrifice discoverability) to show user concerts they may like.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Search locations + artists'} text = {'Expand search to provide for locations. One potential user flow: Search => Boulder => View concerts in Boulder => Explore tab in Concerts view with that filter applied.'}/>
            <SecondaryHeading heading = {'Interested/Going ideas'}/>
            <Paragraph text = {'How might we leverage social networks for concert discovery?'}/>
            <ImageV2 image = {brainstormSocial} id = {'brainstormSocialId'} caption = {'Brainstorming how I might make Songkick social'} desktopColumns = {6}/>
            <BulletItem marginTopClass = {'marginTop4'} bullet = {<i className="fas fa-square"></i>} boldText = {'"Venmo" friends syncing'} text = {'Like in Venmo, automatically track friends based on contacts and Facebook. Also allow user to gauge a "pulse" on who is seeing who performing live, similar to the home view on Venmo.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Groups'} text = {'Allow users to join groups to help mobilize concert conversion within friend groups - entire group recieves notifications together as well as pre-sale codes.'}/>
            <Paragraph text = {'The Groups idea arose from a combination of research findings: users admitting that they\'ve missed out on several concerts before, friend groups often sharing live music tastes, peer influence being very important in concert decision-making, etc.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Ideal user context'} text = {'This is what we want: "Ryan is interested in concert X"... "Hey Ryan, I saw you were going to X"... "yea man, didn\'t know anyone else wanted to see them too, but wanna go together actually??"... "I\'m in!"'}/>
            <PrimaryHeading overline = {'TESTING SCREEN PROTOTYPES'} heading = {'Notecard Prototyping'}/>
            <SecondaryHeading id = {'aboveTrackingNotecards'} heading = {'Tracking artists'}/>
            <Paragraph text = {'What did I sketch out?'}/>
            <HorizontalScrollContainer leftAlignmentWithId = {'aboveTrackingNotecards'} rightAlignmentToId = {'lastTrackingNoteCard'} id = {'trackingNoteCardsHorizontalScroll'}>
              <ImageForHorizontalScroll caption = {'Scanning UI'} image = {tracking1} isIsolated = {true}/>
              <ImageForHorizontalScroll caption = {'"Top 25" scanned artists v1'} image = {tracking2} isIsolated = {true}/>
              <ImageForHorizontalScroll caption = {'"Top 25" scanned artists v2'} image = {tracking3} isIsolated = {true}/>
              <ImageForHorizontalScroll caption = {'Scanned/Tracked Artists'} image = {tracking4} isIsolated = {true} id = {'lastTrackingNoteCard'}/>
            </HorizontalScrollContainer>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Scanning UI'} text = {'No major changes here – simplying making the UI minimalist.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Automatically track "Top 25" (variations)'} text = {'Two variations of an on-boarding screen to display all artists that were scanned, with the top 25 having already been tracked.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Scanned/Tracked Artists'} text = {'A 2 tab view in the Profile tab where users can see their tracked artists as well as their scanned artists.'}/>
            <Paragraph text = {'What did users think?'}/>
            <BulletItem bullet = {<i className="fas fa-thumbs-up"></i>} text = {'My users rated this approach as much more effective than blindly tracking all of the artists on their libraries.'}/>
            <BulletItem bullet = {<i className="fas fa-thumbs-down"></i>} text = {'One user voiced her concern: "what if I start listening to new artists: I doubt that they would bubble up to my top 25 artists! That list wouldn\'t help me then."'}/>
            <Insight insight = {['I knew that I would need two lists: a ranked list of the user\'s scanned artists (where the top 25 are tracked at the outset) and a "your top artists from the past X days" list.', 'With this curated approach, recommendations from the app would be hugely important for updating the user\'s tracked artists during regular app use.']}/>
            <SecondaryHeading heading = {'Concerts (+ Search)'}id = {'aboveConcertsSearchNotecards'}/>
            <Paragraph text = {'What did I sketch out?'}/>
            <HorizontalScrollContainer leftAlignmentWithId = {'aboveConcertsSearchNotecards'} rightAlignmentToId = {'lastConcertsSearchNoteCard'} id = {'concertsSearchNoteCardsHorizontalScroll'}>
              <ImageForHorizontalScroll caption = {'Tracked, Recommended, Saved tabs'} image = {concerts1}/>
              <ImageForHorizontalScroll caption = {'Concert card UI v1'} image = {concerts2}/>
              <ImageForHorizontalScroll caption = {'Concert card UI v2'} image = {concerts3}/>
              <ImageForHorizontalScroll caption = {'Search view'} image = {search1} isIsolated = {true}/>
              <ImageForHorizontalScroll caption = {'Search results v1'} image = {search2}/>
              <ImageForHorizontalScroll caption = {'Search results v2'} image = {search3}/>
              <ImageForHorizontalScroll caption = {'Tabs variation'} image = {concerts4} id = {'lastConcertsSearchNoteCard'}/>
            </HorizontalScrollContainer>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Tracked, Recommended, Saved tabs'} text = {'The main Concerts view has 3 tabs. Tracked = concerts based on who/where they\'re tracking, Recommended = app\'s recommended concerts, Saved = manually saved concerts).'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Concert card UI (variations)'} text = {'I created 3 ways to render Concert content in square, rectangle, or 3/4 rectangle shape.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'New Search view (variations)'} text = {'Initial search state with "Recent Searches" suggestive UI, variations regarding search results to account for addition of location searchability.'}/>
            <Paragraph text = {'What did users think?'}/>
            <BulletItem bullet = {<i className="fas fa-thumbs-up"></i>} text = {'Users unanimously preferred the overall Concerts view structure compared to the original horizontal carousel UI.'}/>
            <BulletItem bullet = {<i className="fas fa-thumbs-up"></i>} text = {'Users appreciated the Recent Searches feature of the Search view and preferred the tabbed search results UI. As one user pointed out, "I hate how Spotify doesn\'t separate albums from songs from artists when I search things".'}/>
            <BulletItem bullet = {<i className="far fa-meh"></i>} text = {'Half of my users preferred the square (2 column) card layout, while the other half preferred the wide rectangular card layout.'}/>
            <Insight insight = {['I decided to move forward with a 2-tabbed Concerts view structure, separating concerts based on the user\'s preferences/filtering from concerts that the app is recommending to the user.', 'I also decided, in allowing Search to additionally encompass locations, to categorizing the, or use tabs for, search results for users.']}/>
            <SecondaryHeading heading = {'Interested/Going screens'} id = {'aboveSocialNotecards'}/>
            <Paragraph text = {'Since the Interested/Going feature isn\'t exactly a screen itself, and because it is intrinsically part of "socializing" the Songkick app, I decided to focus on the Profile view, where users already expected friends preferences and Interested/Going to reside.'}/>
            <Paragraph text = {'What did I sketch out?'}/>
            <HorizontalScrollContainer leftAlignmentWithId = {'aboveSocialNotecards'} rightAlignmentToId = {'lastSocialNoteCard'} id = {'socialNoteCardsHorizontalScroll'}>
              <ImageForHorizontalScroll caption = {'Profile UI v1'} image = {profile1}/>
              <ImageForHorizontalScroll caption = {'Profile UI v2'} image = {profile2}/>
              <ImageForHorizontalScroll caption = {'Profile UI v3'} image = {profile3}/>
              <ImageForHorizontalScroll caption = {'Profile UI v4'} image = {profile4} isIsolated = {true}/>
              <ImageForHorizontalScroll caption = {'Friends tab'} image = {friends1}/>
              <ImageForHorizontalScroll caption = {'Groups tab'} image = {groups1}/>
              <ImageForHorizontalScroll caption = {'Profile UI variation'} image = {profile5} id = {'lastSocialNoteCard'}/>
            </HorizontalScrollContainer>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Profile UI (variations)'} text = {'Different experimentations on organizing preferences for the user (tracked artists/locations) and embedding Friends and Groups features within as well.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Friends/Groups tabs'} text = {'A tabbed view to toggle between a user\'s friends and the groups that they belong to.'}/>
            <Paragraph text = {'What did users think?'}/>
            <BulletItem bullet = {<i className="fas fa-thumbs-up"></i>} text = {'Users saw potential in the groups feature and confirmed that they did not want for this feature to allow for messaging because they already have group-chats established!'}/>
            <BulletItem bullet = {<i className="fas fa-thumbs-down"></i>} text = {'Users were weary of making this a fully fleshed out friends feature, wherein users make accounts and explicitly add/request friends.'}/>
            <BulletItem bullet = {<i className="fas fa-exclamation-triangle"></i>} text = {'They also voiced concern about receiving notifications about "friends" that they didn\'t care about.'}/>
            <Insight insight = {['At this point, I knew that socializing the Songkick app must only account for concert *discovery*, i.e., finding out about concerts and spreading the word.', 'In terms of friends, I saw Venmo as a great analogy in terms of a "low-commitment" social network – syncing friends automatically and keeping a pulse on who was going where.']}/>
          </IndividualProcessSection>
          <IndividualProcessSection id = 'High_Fidelity_Designs'>
            <SectionTitle title = {'High Fidelity Designs'} underlayText = {'04'} description = {'Devising a design system, studying Songkick UX copy, designing high-resolution mockups and final prototype in Adobe Xd, future improvements and next steps.'}/>
            <PrimaryHeading id = 'abovePersonas'overline = {'DESIGN SYSTEM + COPY'} heading = {'Refining the UI'}/>
            <SecondaryHeading heading = {'Maintaining dark theme'}/>
            <Paragraph text = {'Songkick\'s dark theme already served as a very robust visual approach because it met the users\' mental model of concerts and live music.'}/>
            <Paragraph text = {'I made sure to read up on and follow the dark theme best practices widely agreed upon, specifically referenced in Google\'s Material Design documentation.'}/>
            <SecondaryHeading heading = {'Utilizing the Songkick Red'}/>
            <Paragraph text = {'Songkick did not seem to use color intentionally within their UI. I decided to use their accent color to indicate important UI, like newly announced concerts, tracked artists, etc.'}/>
            <SecondaryHeading heading = {'Other'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Rounded edges'} text = {'A ubiquitous design transition from the current app, I decided to rely consistently on rounded edges for card components as they are widey regarded as being "back in style" in the UX world for many valid reasons.'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Error state'} text = {'Since I was using red to indicate important UI, I needed a distinct color to show error states. I chose an orange hue to do so!'}/>
            <Paragraph text = {'Without furtho ado... '}/>
            <ImageV2 image = {sKDesignSystem} caption = {'My new Songkick mobile design system, typography, and color pallette'} id = {'sKDesignSystemId'}/>
            <SecondaryHeading heading = {'UX copy'}/>
            <Paragraph text = {'Sensibly, I decided to align my copy in the redesigned Songkick app with Songkick\'s tone itself. Their tone? '}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} text = {'"We think of the most straightforward way to say something, then don’t say it that way."'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} text = {'"We don’t refer to ourselves in the third person."'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} text = {'"Sentences should feel tidy and functional, and paragraphs should look and feel snappy."'}/>
            <Paragraph text = {'This tone comes out most in the onboarding flow!'}/>
            <PrimaryHeading overline = {'HIGH-FIDELITY MOCKUPS'} heading = {'Putting it Together'}/>
            <SecondaryHeading heading = {'Onboarding + tracking artists'}/>
            <Paragraph text = {'For a user to build their list of tracked artists, this is a persisting process that begins in the onboarding phase and continues via app recommendations and manual additions in the Profile tab.'}/>
            <ImageV2 id = 'scanFlow' image = {scanningFlow} caption = {'Onboarding flow – building a user\'s tracked artists list, from the initial scan to further curation'}/>
            <SecondaryHeading heading = {'Connecting with friends and groups'}/>
            <Paragraph text = {'Users receive notifications from their "Close Friends" while being able to keep a pulse on who is going to see who in their Notifications tab.'}/>
            <Paragraph text = {'Users can join groups with shared live music tastes to be notified together and recieve Songkick promotions.'}/>
            <ImageV2 id = 'socialFlow' image = {socialFlow} caption = {'Social flow – connecting with others, viewing friends and joining a group'}/>
            <SecondaryHeading heading = {'Finding a concert'}/>
            <Paragraph text = {'The bread and butter of Songkick, the Concerts view allows users to browse chronologically through concerts from artists and in locations that they are tracking. They can also check out location music that the app thinks they will enjoy.'}/>
            <Paragraph text = {'After getting a pulse on their surrounding community in the Notifications tab, users can view more information on specific artists or concerts.'}/>
            <ImageV2 id = 'browseFlow' image = {browseFlow} caption = {'Browsing flow – finding a concert by adjusting filters, exploring recommended events, visiting notifications, and choosing an artist'}/>
            <PrimaryHeading overline = {'HIGH-FIDELITY PROTOTYPE'} heading = {'The Final Redesign'}/>
            <Paragraph text = {"Here's what the final redesign looks like in the hands of a user!"}/>
            <VideoV2 source = {songkickWalkthrough} caption = {'The final product, from onboarding through most user flows'}/>
            <PrimaryHeading overline = {'WHAT\'S NEXT'} heading = {'Future Improvements, Next Steps'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Feedback from users.'} text = {'To test how successful my redesign was, I know I have to get my final prototypes back in the hands of users. As I am still testing users, I am still waiting to post the final redesign feedback here!'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Running this by Songkick themself.'} text = {'As of now, Songkick has no idea that I redesigned their app. But I intend to change that (via many cold emails) and at the very least, to hear their initial thoughts!'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Test the Groups feature intensely.'} text = {'The social side of Songkick is the most volatile, for me, as many users claimed they would only see themselves using Songkick around once a month. Would only a few users add their friends?'}/>
            <BulletItem bullet = {<i className="fas fa-square"></i>} boldText = {'Optimizing push notifications.'} text = {'Throughout this whole redesign, I was weary to focus on push notifications because I worried it took away from the app design itself. But, as I learned with user interviews, push notifications could make or break their UX. Songkick could be improved via intense quantitative research on which push notifications are effective (enhance concert discovery and conversion) versus disruptive.'}/>
          </IndividualProcessSection>
          <UpArrow/>
          <NavBarV2/>
          <Todo text = {'TODO: in my "future steps/improvements" section, add in providing a view for the user\'s upcoming Interested/Going plans'}/>
        </CaseStudyProcessSection>
      </>

  )
}

const styles = {
}
