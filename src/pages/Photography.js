import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import carInterior from '../images/Photography/CarInterior.jpg'
import dubsInTheSky from '../images/Photography/dubsInTheSky.jpg'
import dubsSunset from '../images/Photography/DubsSunset.jpg'
import gungukWalking from '../images/Photography/GungukWalking.jpg'
import jordanBuilding from '../images/Photography/JordanBuilding.jpg'
import jupiTheatre from '../images/Photography/JupiTheatre.jpg'
import loganPlaying from '../images/Photography/LoganPlaying.jpg'
import muscleCar from '../images/Photography/MuscleCar.jpg'
import paracasOverlook from '../images/Photography/ParacasOverlook.jpg'
import sculptureBuilding from '../images/Photography/SculptureBuilding.jpg'
import stoneHills from '../images/Photography/StoneHills.jpg'
import tennisFaceoff from '../images/Photography/TennisFaceoff.jpg'
import gatesFountain2 from '../images/Photography/GatesFountain2.jpg'
import popRocks from '../images/Photography/PopRocks.jpg'
import sFMoma from '../images/Photography/SFMoma.jpg'
import waveOnRocks from '../images/Photography/WaveOnRocks.jpg'
import yosemiteVista from '../images/Photography/YosemiteVista.jpg'
import jupiDrip from '../images/Photography/JupiDrip.jpg'
import SolutionSection from '../components/SolutionSection'
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

export default function Photography(props) {
  return(
    <>
      <NavBar navLinks = {[]} />
      <section style = {{['padding-bottom']: 150 + 'px'}}>
        <SectionTitle title = {"Photography"} titleCaption = {"My best attempts to click a button at the perfect time... and some post-production to match."}/>
        <div class = 'row'>
          <div style = {{margin: 'auto', width: 'min-content'}}>
            <a href = 'https://www.instagram.com/liamllor/?hl=en' style = {{textDecoration: 'none'}}><ButtonBold title = 'Instagram' buttonColor = 'rgb(30,30,30)' titleColor = 'rgb(250,250,250)'/></a>
          </div>
        </div>
        <ThreeImages imageUrls = {[dubsInTheSky, gungukWalking, muscleCar]} captions = {[]} topPadding = {100} bottomPadding = {25}/>
        <ThreeImages imageUrls = {[dubsSunset]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
        <TwoImages imageUrls = {[paracasOverlook, stoneHills]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
        <TwoImages imageUrls = {[yosemiteVista, popRocks]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
        <TwoImages imageUrls = {[sFMoma, jupiDrip]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
        <TwoImages imageUrls = {[sculptureBuilding, tennisFaceoff]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
        <TwoImages imageUrls = {[jupiTheatre, loganPlaying]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
        <TwoImages imageUrls = {[gatesFountain2, carInterior]} captions = {[]} bottomPadding = {25} topPadding = {0}/>
      </section>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
