import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from "ComponentsV2/AtomicComponents/FlexibleWrapper.js"


export default function ListItem(props) {
  let { underlayText, boldText, text, marginTopClass, isIsolated = false } = props;
  let isolatedListItem = (
      <div className = {styles.listItemContainer}>
        <div className = {cx(styles.listItemTextContainer)}>
          {boldText && (
            <h5 className = {cx('darkPrimary')}>
              {boldText}
            </h5>
          )}
          {text && (
            <p className = {cx('darkSecondary', 'p2', boldText ? 'marginTop9' : null)}>
              {text}
            </p>
          )}
        </div>
        <h2 className = {cx('darkFaded', styles.underlayText)}>
          {underlayText}
        </h2>
      </div>
  )
  if (isIsolated) {
    return (
      <FlexibleWrapper marginTopClass = {marginTopClass ? marginTopClass : 'marginTop5'}>
        {isolatedListItem}
      </FlexibleWrapper>
    );
  } else {
    return (
      <FlexibleWrapper marginTopClass = {marginTopClass ? marginTopClass : 'marginTop5'}>
        <div className = {cx('row')}>
          <div className = {cx('col-3')}></div>
          <div className = {cx('col-5')}>
            {isolatedListItem}
          </div>
        </div>
      </FlexibleWrapper>
    )
  }
}


const styles = {
  listItemContainer:css`
    position: relative;
    width: 100%;
  `,
  listItemTextContainer:css`
    z-index: 0;
    position: relative;
    width: 100%;
    left: 20px;
  `,
  underlayText:css`
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    z-index: 100;
  `,
}
