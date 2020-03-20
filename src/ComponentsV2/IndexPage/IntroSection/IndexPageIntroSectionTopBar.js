import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "styles/styleConstants.js"
import DevDesignTag from 'ComponentsV2/AtomicComponents/DevDesignTag.js'
import MyExternalLink from 'ComponentsV2/AtomicComponents/MyExternalLink.js'
import "styles/fonts.css"
import "styles/phoneSpacing.css"
import "styles/tabletSpacing.css"
import "styles/desktopSpacing.css"
import resumeFile from 'DesignResume(3-4-20).pdf'


export default function IndexPageIntroSectionTopBar(props) {
  let {} = props;
  return(
      <div className = {'row'}>
        <div className = {cx('col-1')}></div>
        <div className = {cx('col-7')}>
          <DevDesignTag/>
        </div>
        <div className = {cx('col-3')}>
          <h6 className = {cx('rightAlign')}>
            <MyExternalLink textColorClass = {'lightPrimary'} isDarkTheme = {true} url = {resumeFile}>Resume
            </MyExternalLink>
          </h6>
        </div>
        <div className = {cx('col-1')}></div>
      </div>
  )
}

const styles = {
}
