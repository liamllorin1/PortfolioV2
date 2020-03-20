import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'
import $ from 'jquery';


export default function HorizontalScrollContainer(props) {
  let { children, rightAlignmentToId, leftAlignmentWithId, id } = props;
  const [numChildren, setNumChildren] = useState(0);
  console.log(numChildren);
  const styles = {
    horizontalParent:css`
      position: relative;
      width: 100%;
    `,
    horizontalContainer:css`
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      top: 0;
      left: -${styleConstants.desktopMargin}px;
      width: 100vw;
      height: 100%;
    `,
    scrollingContentContainer:css`
      display: grid;
      grid-template-columns: repeat(${numChildren}, 1fr);
      position: relative;
      padding-right: 50px;
      padding-bottom: 50px;
    `,
  }

  useEffect(() => {
    const xOffset = $('#' + leftAlignmentWithId).offset().left;
    $('#' + id).css('margin-left',xOffset+'px');
    const marginRightAlignment = $( window ).width() - $('#' + rightAlignmentToId).children().first().outerWidth() - xOffset;
    $('#' + rightAlignmentToId).css('margin-right', marginRightAlignment+'px');
    setNumChildren($('#' + id).children().length);
  }, [numChildren]);

  return(
    <div className = {styles.horizontalParent}>
      <div className = {cx(styles.horizontalContainer, 'noScrollBar')}>
        <div className = {styles.scrollingContentContainer} id = {id}>
          {children}
        </div>
      </div>
    </div>
  )
}
