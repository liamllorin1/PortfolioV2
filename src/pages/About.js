import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import profPic from '../images/ProfPic7.jpg'
import ButtonBold from '../components/ButtonBold'
import NavBar from '../components/NavBar'


export default function About(props) {
  return(
    <>
    <NavBar  navLinks = {[]}/>
    <div className = {styles.aboutBack}>
      <div class = 'row' className = {styles.aboutBackgroundContainer}>
        <div className = {styles.leftBack} style = {{backgroundImage: "linear-gradient(45deg, rgb(15, 15, 15), rgb(45, 45, 45))"}}>
        </div>
        <div className = {styles.rightBack} style = {{backgroundImage: "linear-gradient(45deg, rgb(240, 240, 240), rgb(240, 240, 240))"}}>
        </div>
      </div>
      <div class = 'row' style = {{position: 'absolute', top: 0}}>
        <div class = 'col-2 col-m-1'></div>
        <div class = 'col-3 col-m-2' style = {{border: 0}}>
          <div className = {styles.profPic} style = {{backgroundImage: 'url(' + profPic + ')'}}>
          </div>
        </div>
        <div class = 'col-5 col-m-8' style = {{border: 0}}>
          <div className = {styles.aboutDescriptionContainer}>
            <h4>I design things.</h4>
            <p style = {{marginBottom: '25px'}}>I'm an undergrad here at Stanford studying CS and Product Design. I'm passionate about working on products over the entirety of their lifecycle, through the design phase (spanning from design research to final iterations) to the implementation. Whether I'm interviewing users in the field, wireframing designs in Adobe Xd, or developing a feature in React, I'm set on making sure that no rock is left unturned. Feel free to view what I've been working on, or <i>reach out to me directly!</i></p>
            <div className = {styles.emailContainer}>
              <h5 className = {styles.email}>liamllorin<span style = {{fontWeight: 100}}>@stanford.edu</span></h5>
            </div>
          </div>
        </div>
        <div class = 'col-2 col-m-1'></div>
      </div>
    </div>
    </>
  )
}


const styles = {
  profPic:css`
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    margin-top: 150px;
    height: calc(100vh - 300px);
    box-sizing: border-box;
  `,
  aboutDescriptionContainer:css`
    padding: 50px;
    margin-top: 150px;
    height: calc(100vh - 300px);
    width: 100%;
    box-sizing: border-box;
    background-color: rgb(245,245,245);
    position: relative;
  `,
  aboutBack:css`
    background-image: linear-gradient(45deg, rgb(15,15,15), rgb(40,40,40));
    height: 100vh;
  `,
  leftBack:css`
    height: 100vh;
  `,
  rightBack:css`
    height: 100vh;
  `,
  aboutBackgroundContainer:css`
    display: grid;
    grid-template-columns: 60% 40%;
  `,
  email:css`
    line-height: 150px;
    color: rgb(50,50,50);
  `,
  emailContainer:css`
    height: 150px;
    padding-left: 50px;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    position: absolute;
  `
}
