import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'


export default function BulletItem(props) {
  let { bullet, text, boldText, marginTopClass } = props;
  return(
    <FlexibleWrapper marginTopClass = {marginTopClass ? marginTopClass : 'marginTop6'}>
      <div className = {cx('row')}>
        <div className = {cx('col-3')}></div>
        <div className = {cx('col-5', styles.bulletParent)}>
          <h5 className = {cx(styles.bullet, 'darkSecondary')}>
            {bullet}
          </h5>
          <div className = {cx(styles.bulletItemTextContainer)}>
            {boldText && (
              <h5 className = {cx('darkPrimary')}>
                {boldText}
              </h5>
            )}
            {text && (
              <p className = {cx('p2', 'darkSecondary', boldText ? 'marginTop9' : null)}>
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    </FlexibleWrapper>
  )
}


const styles = {
  bulletParent:css`
    position: relative;
    display: flex;
  `,
  bullet:css`
    margin-right: 15px;
    flex-shrink: 0;
    margin-top: 1px;
  `,
  bulletItemTextContainer:css`
    position: relative;
  `
}
