import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import FlexibleWrapper from 'ComponentsV2/AtomicComponents/FlexibleWrapper.js'


export default function Quote(props) {
  let { quote, speaker, marginTopClass } = props;
  return(
    <FlexibleWrapper marginTopClass = {marginTopClass ? marginTopClass : 'marginTop5'}>
      <div className = {cx('row')}>
        <div className = {cx('col-3')}></div>
        <div className = {cx('col-5', styles.quoteBoxParent)}>
          <div className = {cx(styles.quoteLeftBorder)}></div>
          <div className = {cx(styles.quoteTextContainer)}>
            {Array.isArray(quote) ? quote.map((quoteObj, index) => (
                <>
                  <h5 className = {cx('darkPrimary', 'p2', 'italic', styles.quote, index > 0 ? 'marginTop7' : undefined)}>
                    {quote}
                  </h5>
                  <p className = {cx('p2', 'darkTertiary', 'marginTop8')}>
                    – {speaker}
                  </p>
                  <h2 className = {cx('darkFaded', styles.quotations)}>
                    <i className="fas fa-quote-left"></i>
                  </h2>
                </>
            )) : (
              <>
                <h5 className = {cx('darkPrimary', 'p2', 'italic', styles.quote)}>
                  {quote}
                </h5>
                <p className = {cx('p2', 'darkTertiary', 'marginTop8')}>
                  – {speaker}
                </p>
                <h2 className = {cx('darkFaded', styles.quotations)}>
                  <i className="fas fa-quote-left"></i>
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </FlexibleWrapper>
  )
}


const styles = {
  quoteBoxParent:css`
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50px;
  `,
  quoteLeftBorder:css`
    height: 100%;
    width: 10px;
    background-color: rgba(0,0,0, 0.75);
  `,
  quoteTextContainer:css`
    position: relative;
    margin-top: 50px;
    margin-bottom: 25px;
  `,
  quotations:css`
    position: absolute;
    z-index: 0;
    top: 0;
    transform: translateY(-25%);
    font-weight: 900;
    left: -20px;
  `,
}
