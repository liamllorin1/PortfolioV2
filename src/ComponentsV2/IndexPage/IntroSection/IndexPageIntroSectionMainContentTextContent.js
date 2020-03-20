import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import profilePicture from "images/ProfilePictureWide.jpg"
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"


export default function IndexPageIntroSectionMainContentTextContent(props) {
  let {} = props;
  return(
    <>
    <div className = {cx('row')}>
      <div className = {'col-1'}></div>
      <div className = {'col-7'}>
        <h1 className = {cx('lightPrimary', 'marginTop2')}>Welcome to my portfolio.</h1>
      </div>
      <div className = {'col-4'}></div>
    </div>
    <div className = {cx('row')}>
      <div className = {'col-1'}></div>
      <div className = {'col-4'}>
        <p className = {cx('p1', 'lightTertiary', 'marginTop3')}>
          I'm a 2021 Stanford grad studying Computer Science and Product Design pursuing Design at Apple. Find me behind my Sony a7iii, in Stanford's Product Realization Lab, or on awwwards.com exploring what I love!
        </p>
      </div>
    </div>
    </>
  )
}


const styles = {
}
