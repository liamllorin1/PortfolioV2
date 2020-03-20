import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'
import $ from 'jquery';


export default function Paragraph(props) {
  let { text, marginTopClass } = props;

  return(
    <FlexibleWrapper marginTopClass = {marginTopClass ? marginTopClass : 'marginTop6'}>
      <div className = {cx('row')}>
        <div className = {cx('col-3')}></div>
        <div className = {cx('col-4')}>
          <p className = {cx('darkSecondary', 'p2')}>
            {text}
          </p>
        </div>
      </div>
    </FlexibleWrapper>
  )
}


const styles = {
}
