import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import Footer from '../components/Footer'
import ButtonBold from '../components/ButtonBold'
import spacing from '../styles/spacingConstants.js'


//to add: <WIP/> as necessary
const WIPPage = () => (
  <>
    <div className = {styles.WIPContainer}>
      <div className = {styles.mainRow}>
        <div class = 'spacer'></div>
        <div className = {styles.mainContent}>
          <h1> Sorry.</h1>
          <h4>This is a work in progress! Come back soon to view this page fully developed!</h4>
          <Link to = {'/'} style = {{textDecoration: 'none'}}><ButtonBold titleColor = "rgb(240,240,240)" buttonColor = "rgb(20,20,20)" title = {"Go back home"}/></Link>
        </div>
        <div class = 'spacer'></div>
      </div>
    </div>
  </>
)

const styles = {
  mainRow:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.smallMargin} auto ${spacing.desktop.smallMargin};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `,
  WIPContainer:css`
    height: 100vh;
    position: relative;
  `
}

export default WIPPage
