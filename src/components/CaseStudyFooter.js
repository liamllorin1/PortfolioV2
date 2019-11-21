import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import spacing from '../styles/spacingConstants.js'
import ButtonBold from '../components/ButtonBold'

export default function CaseStudyFooter(props) {
  return(
    <div className = {cx('row', styles.footerSection)}>
      <div class = 'col-2 col-m-1'></div>
      <div class = 'col-8 col-m-10'>
        <h5 style = {{color: 'rgb(160,160,160)'}}>Thanks for viewing</h5>
        <div style = {{display: 'flex'}}>
          <h2 style = {{margin: 0, marginRight: '50px'}} class = 'light'>Back to my projects.</h2>
          <Link to = {'/'} style = {{textDecoration: 'none'}}>
            <ButtonBold title = 'Portfolio' buttonColor = 'rgb(245,245,245)' titleColor= 'rgb(15,15,15)'/>
          </Link>
        </div>
      </div>
      <div class = 'col-2 col-m-1'></div>
    </div>
  )
}

const styles = {
  footerSection:css`
    background-image: linear-gradient(80deg, rgb(15, 15, 15), rgb(50, 50, 50));
    padding: 150px 0;
  `,
}
