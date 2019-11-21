import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import spacing from '../styles/spacingConstants.js'

export default function Footer() {

  return (
    <div className = {cx(styles.footerContainer, 'row')}>
      <div class = 'col-m-1 col-2'></div>
      <div className = {cx('col-m-5', 'col-3', styles.leftBack)}>
        <h5>Here's where to find me</h5>
        <div className = {styles.iconContainer}>
          <h4 className = {cx(styles.icon, 'light')}><i class="fab fa-instagram"></i></h4>
          <h4 className = {cx(styles.icon, 'light')}><i class="fab fa-linkedin"></i></h4>
          <h4 className = {cx(styles.icon, 'light')}><i class="fab fa-facebook"></i></h4>
        </div>
      </div>
      <div className = {cx('col-m-5', 'col-5', styles.rightBack)}>
        <h5>Let's get in touch</h5>
        <h4 className = {cx(styles.email, 'light')}>liamllorin<span style = {{fontWeight: 100}}>@stanford.edu</span></h4>
      </div>
      <div class = 'col-m-1 col-2'></div>
    </div>
  )
}

const styles = {
  footerContainer:css`
    background-image: linear-gradient(80deg, rgb(15, 15, 15), rgb(50, 50, 50));
    padding: 150px 0;
  `,
  leftBack:css`
    /* background-color: rgb(10,10,10); */
    height: 100%;
  `,
  rightBack:css`
    /* background-color: rgb(5,5,5); */
    height: 100%;
    box-sizing: border-box;
  `,
  icon:css`
    margin: 0;
    font-weight: 100;
    margin-right: 25px;
  `,
  email:css`
    margin: 0;
  `,
  iconContainer:css`
    display: flex;
  `
};
