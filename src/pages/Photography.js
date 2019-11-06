import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import hikerHuaynaPicchu from '../images/Photography/hikerHuaynaPicchu.jpg'
import penaltyKick from '../images/Photography/penaltyKick.jpg'
import finestMeats from '../images/Photography/finestMeats.jpg'
import islasBallestas from '../images/Photography/islasBallestas.jpg'
import santaCruzWave from '../images/Photography/santaCruzWave.jpg'
import SolutionSection from '../components/SolutionSection'
import CaseStudyFooter from '../components/CaseStudyFooter'
import NavBar from '../components/NavBar'


export default function Photography(props) {
  let solutionObj = {
    glamourShotImage: hikerHuaynaPicchu,
    auxiliaryImages: [penaltyKick, finestMeats, islasBallestas, santaCruzWave],
    title: 'Photography.',
    caption: 'My best attempts to click a button at the perfect time.',
    isPhotography: true
  };

  return(
    <>
      <SolutionSection solutionObj = {solutionObj}/>
      <CaseStudyFooter/>
    </>
  )
}


const styles = {

}
