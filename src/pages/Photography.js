import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import hikerHuaynaPicchu from '../images/Photography/hikerHuaynaPicchu.jpg'
import machuPicchu from '../images/Photography/machuPicchu.jpg'
import penaltyKick from '../images/Photography/penaltyKick.jpg'
import finestMeats from '../images/Photography/finestMeats.jpg'
import islasBallestas from '../images/Photography/islasBallestas.jpg'
import santaCruzWave from '../images/Photography/santaCruzWave.jpg'
import blackLab from '../images/Photography/blackLab.jpg'
import rocksSplashing from '../images/Photography/rocksSplashing.jpg'
import miamiFishermen from '../images/Photography/miamiFishermen.jpg'
import miamiHotels from '../images/Photography/miamiHotels.jpg'
import centralParkLake from '../images/Photography/centralParkLake.jpg'
import rockHills from '../images/Photography/rockHills.jpg'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'


export default function Photography(props) {
  let solutionObj = {
    glamourShotImage: hikerHuaynaPicchu,
    smallImages: [penaltyKick, finestMeats, islasBallestas, santaCruzWave, machuPicchu, rockHills, blackLab, miamiFishermen, centralParkLake, miamiHotels],
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
