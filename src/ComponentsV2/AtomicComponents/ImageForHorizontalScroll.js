import React, {useEffect} from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"


export default function ImageForHorizontalScroll(props) {
  let { image, caption, id } = props;

  const styles = {
      imageParent:css`
        height: 100%;
        position: relative;
        width: 100%;
        margin-right: 50px;
      `,
      imageContainer:css`
      `,
      imageCaptionWrapper:css`
        display: inline-block;
        box-sizing: border-box;
      `,
      image:css`
        width: 250px;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.10);
        display: block;
      `,
  }

  return (
    <div className = {cx(styles.imageParent, 'marginTop4')} id = {id ? id : undefined}>
      <div className = {cx(styles.imageCaptionWrapper)}>
        <img src = {image} className = {cx(styles.image)}/>
        <h6 className = {cx('caption', 'darkPrimary', 'marginTop7')}>
          {caption}
        </h6>
      </div>
    </div>
  );
}
