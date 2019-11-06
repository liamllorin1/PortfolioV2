import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'

export default function Footer() {

  return (
    <div className = {styles.footerContainer}>
      <div class = 'spacer'></div>
      <div className = {styles.leftBack}>
        <h4 className = {styles.reachOutText}>Here's where to find me.</h4>
        <div className = {styles.iconBack}>
          <div className = {styles.iconContainer}>
            <h5 className = {styles.icon}><i class="fab fa-instagram"></i></h5>
            <h5 className = {styles.icon}><i class="fab fa-linkedin"></i></h5>
            <h5 className = {styles.icon}><i class="fab fa-facebook"></i></h5>
          </div>
        </div>
      </div>
      <div className = {styles.rightBack}>
        <h4 className = {styles.email} style = {{float: 'right'}}>liamllorin@stanford.edu</h4>
        <h4 className = {styles.reachOutText} style = {{float: 'right'}}>Let's get in touch.</h4>
      </div>
      <div class = 'spacer'></div>
    </div>
  )
}

const styles = {
  footerContainer:css`
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} 2fr 2fr ${spacing.desktop.mediumMargin};
    background-image: linear-gradient(80deg, rgb(15, 15, 15), rgb(50, 50, 50));
    padding: 150px 0;
  `,
  leftBack:css`
    /* background-color: rgb(10,10,10); */
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 3fr;
  `,
  rightBack:css`
    /* background-color: rgb(5,5,5); */
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 25px;
  `,
  reachOutText:css`
    color: rgb(220,220,220);
    margin: 0;
    font-weight: 700;
    display: inline-block;
  `,
  icon:css`
    color: rgb(150,150,150);
    margin: 0;
    font-weight: 100;
    font-size: 30px;
  `,
  email:css`
    color: rgb(150,150,150);
    margin: 0;
    font-weight: 100;
    margin-left: 20px;
    display: inline-block;
  `,
  iconBack:css`
    display: flex;
    height: 100%;
    width: 90%;
    position: relative;
  `,
  iconContainer:css`
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  `
};
