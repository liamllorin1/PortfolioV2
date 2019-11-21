import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import MESectionImage from "../components/MESectionImage"
import WIP from "../components/WIP"
import Image from "../components/image"
import NavBar from "../components/NavBar"
import StandardSection from "../components/StandardSection"
import SEO from "../components/seo"
import TechSection from "../components/TechSection"
import logoImage from '../images/InvertedPendulumLogo/mainLogoDark.jpg'
import profPic from '../images/ProfPic5.jpg'
import automataImage from '../images/leverSystem.jpg'
import facebookImage from '../images/facebookScreenshot.png'
import strongSuitTop from '../images/WebsiteScreenshots/strongSuitTopFramed.jpg'
import oaxacanKitchenMobile from '../images/OaxacanKitchen/oaxacanKitchenMobile.jpg'
import cameras from '../images/cameras.jpg'
import arcesium from '../images/arcesium.jpg'
import ButtonBold from '../components/ButtonBold'
import ButtonFaint from '../components/ButtonFaint'
import Footer from '../components/Footer'

let sections = [
  {
    title: "Liam Llorin.",
    caption: "Find me behind my Canon 6D, in the Product Realization Lab at Stanford, or on awwwards.com exploring what I love.",
    leftGradient: "linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45))",
    rightGradient: "linear-gradient(45deg, rgb(30, 30, 30), rgb(15, 15, 15))",
    sectionId: "topSection",
    image: profPic,
    textColor: 'light',
    button: <Link to = {'/About/'} style = {{textDecoration: 'none'}}><ButtonBold buttonColor = "rgb(240,240,240)" titleColor = "rgb(20,20,20)" title = {"Find out more"}/></Link>,
    resume: true
  },
  {
    title: "Facebook Front End Engineering.",
    caption: "This Winter I'll be working w/ Product Designers to develop the next generation of web platform features as part of Facebook's prestige Front End intern program. I'll build front-end systems while incorporating Facebook frameworks, engaging in design reviews, etc.",
    leftGradient: "linear-gradient(45deg, rgb(247, 247, 247), rgb(255, 255, 255))",
    rightGradient: "linear-gradient(45deg, rgb(0, 191, 255), rgb(0, 191, 255))",
    image: facebookImage,
    textColor: 'dark',
    sectionId: "techSection",
    button: <Link to = {'/FacebookFrontEndCaseStudy/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Find out more"}/></Link>,
    skillTags: [
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Web Dev/Design'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'UI/UX'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'React'},
    ]
  },
  {
    title: "Arcesium UI/UX Engineer.",
    caption: "Last summer, I designed a React application for hedge-fund clients (J.P. Morgan, D.E. Shaw, Morgan Stanley, etc.) conducting post-trade activities. I built out content configurability, business-interval setting, dark/light theme styling within landing page.",
    leftGradient: "linear-gradient(45deg, rgb(247, 247, 247), rgb(255, 255, 255))",
    rightGradient: "linear-gradient(45deg, rgb(100, 191, 255), rgb(70, 151, 215))",
    image: arcesium,
    textColor: 'dark',
    sectionId: "techSection",
    button: <Link to = {'/PasswordPage/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Find out more"} toPage={'/WIPPage/'}/></Link>,
    skillTags: [
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Web Dev/Design'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'UI/UX'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'React'},
    ]
  },
  {
    title: "STRONGSUIT Web Design Freelance Business.",
    caption: "In late 2017, I designed 4 responsive sites for business and clients (landing pages/personal sites). These sites I developed in HTML, CSS, Sass, Javascript, jQuery, and some Python for 300+ hours for clients.",
    leftGradient: "linear-gradient(45deg, rgb(247, 247, 247), rgb(255, 255, 255))",
    rightGradient: "linear-gradient(45deg, rgb(58, 67, 84), rgb(58, 67, 84))",
    image: strongSuitTop,
    textColor: 'dark',
    button: <Link to = {'/StrongsuitCaseStudy/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Find out more"} toPage={'/WIPPage/'}/></Link>,
    skillTags: [
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Web Dev/Design'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'UI/UX'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'HTML/CSS/JS'},
    ]
  },
  {
    title: "Inverted Pendulum Logo.",
    caption: "In Autumn 2019, I designed 2 prototypes via concept sketches before developing the final inverted pendulum logo. Throughout my iterations, I utilized the lazer cutter, band saws, drill press, sanding machines, and foam wire cutter.",
    leftGradient: "linear-gradient(45deg, rgb(240, 240, 240), rgb(255, 255, 255))",
    rightGradient: "linear-gradient(45deg, rgb(250, 250, 250), rgb(200, 200, 200))",
    sectionId: "MESection",
    image: logoImage,
    textColor: 'dark',
    button: <Link to = {'/InvertedPendulumCaseStudy/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Find out more"}/></Link>,
    skillTags: [
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Woodcutting'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Prototyping'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Concept Visualization'}
    ]
  },
  {
    title: "Oaxacan Kitchen Design Research.",
    caption: "Under the instruction of David Kelley (founder of IDEO), my team and I performed field work, interviewing food truck vendors/customers. After honing in on a POV, we prototyped two solutions and tested them on-site.",
    leftGradient: "linear-gradient(45deg, rgb(240, 240, 240), rgb(255, 255, 255))",
    rightGradient: "linear-gradient(45deg, rgb(7,108,75), rgb(25,198,165))",
    image: oaxacanKitchenMobile,
    textColor: 'dark',
    sectionId: 'designThinking',
    button: <Link to = {'/OaxacanKitchen/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Find out more"} /></Link>,
    skillTags: [
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Design Research'},
      { textColor: 'rgb(20,20,20)', tagColor: 'rgb(250,250,250)', title: 'Prototyping'},
    ]
  },
  {
    title: "Photography.",
    caption: "If you please, check out what I've been doing in my free time!",
    leftGradient: "linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45))",
    rightGradient: "linear-gradient(45deg, rgb(30, 30, 30), rgb(15, 15, 15))",
    sectionId: "photographyArt",
    image: cameras,
    textColor: 'light',
    button: <Link to = {'/Photography/'} style = {{textDecoration: 'none'}}><ButtonBold buttonColor = "rgb(240,240,240)" titleColor = "rgb(20,20,20)" title = {"Find out more"}/></Link>
  },
]

//to add: <WIP/> as necessary
const IndexPage = () => (
  <>
    <NavBar hideHome navLinks = {[{href: '#topSection', tabTitle: 'Home'},{href: '#techSection', tabTitle: 'Interface Design'}, {href: '#MESection', tabTitle: 'Industrial Design'}, {href: '#designThinking', tabTitle: 'Design Research'}, {href: '#photographyArt', tabTitle: 'Photography'}]}/>
    {sections.map((section) => {
      return <StandardSection sectionObj = {section}/>
    })}
    <Footer/>
    <SEO title="Home" />
  </>
)

export default IndexPage
