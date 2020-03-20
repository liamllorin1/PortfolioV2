import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'


export default function PrimaryHeading(props) {
  let { overline, heading, id, marginTopClass } = props;
  return(
    <FlexibleWrapper marginTopClass = {marginTopClass ? marginTopClass : 'marginTop3'}>
      <div className = {cx('row')}>
        <div className = {cx('col-3')}></div>
        <div className = {cx('col-7')} id = {id ? id : null}>
          {overline && <h6 className = {cx('lightAccent', 'overline')}>
            {overline}
          </h6>}
          <h3 className = {cx('darkPrimary')}>
            {heading}
          </h3>
        </div>
      </div>
    </FlexibleWrapper>
  )
}


const styles = {
}
