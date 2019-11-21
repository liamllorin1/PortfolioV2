import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import Footer from '../components/Footer'
import ButtonBold from '../components/ButtonBold'
import spacing from '../styles/spacingConstants.js'
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"



//to add: <WIP/> as necessary
const WIPPage = () => (
  <>
    <div className = {styles.WIPContainer}>
      <div class = 'row'>
        <div class = "col-2 col-m-1"></div>
        <div class = 'col-8 col-m-10'>
          <h1> Sorry.</h1>
          <h4>This is a work in progress! Come back soon to view this page fully developed!</h4>
          <Link to = {'/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Go back home"}/></Link>
        </div>
        <div class = "col-2 col-m-1"></div>
      </div>
    </div>
  </>
)

const styles = {
  WIPContainer:css`
    height: 100vh;
    position: relative;
    padding: 150px 0;
  `
}

export default WIPPage
