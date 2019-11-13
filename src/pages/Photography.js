import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import hikerHuaynaPicchu from '../images/Photography/hikerHuaynaPicchu.jpg'
import machuPicchu from '../images/Photography/machuPicchu.jpg'
import penaltyKick from '../images/Photography/penaltyKick.jpg'
import finestMeats from '../images/Photography/finestMeats.jpg'
import santaCruzWave from '../images/Photography/santaCruzWave.jpg'
import rocksSplashing from '../images/Photography/rocksSplashing.jpg'
import miamiFishermen from '../images/Photography/miamiFishermen.jpg'
import miamiHotels from '../images/Photography/miamiHotels.jpg'
import jordanSipping from '../images/Photography/jordanSipping.jpg'
import rockHills from '../images/Photography/rockHills.jpg'
import edwardSmiling from '../images/Photography/edwardSmiling.png'
import goldenGateCloud from '../images/Photography/goldenGateCloud.jpg'
import edwardLookingOut from '../images/Photography/edwardLookingOut.png'
import architectureSculpture from '../images/Photography/architectureSculpture.jpg'
import flowersSun from '../images/Photography/flowersSun.jpg'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'


export default function Photography(props) {
  let solutionObj = {
    glamourShotImage: goldenGateCloud,
    smallImages: [architectureSculpture, hikerHuaynaPicchu, flowersSun, edwardSmiling, finestMeats, santaCruzWave, machuPicchu, rockHills, miamiFishermen, miamiHotels, jordanSipping, edwardLookingOut, rocksSplashing, penaltyKick],
    title: 'Photography.',
    caption: 'My best attempts to click a button at the perfect time.',
    isPhotography: true
  };

  return(
    <>
      <NavBar navLinks = {[]} />
      <SolutionSection solutionObj = {solutionObj} hasHome/>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
