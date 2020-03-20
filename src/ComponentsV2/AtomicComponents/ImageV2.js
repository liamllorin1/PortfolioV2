import React, {useEffect} from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import styleConstants from "../../styles/styleConstants.js"
import "../../styles/fonts.css"
import "../../styles/phoneSpacing.css"
import "../../styles/tabletSpacing.css"
import "../../styles/desktopSpacing.css"
import $ from 'jquery';


export default function ImageV2(props) {
  let { image, caption, id, desktopColumns } = props;

  useEffect(() => {
    $('#' + id).click(() => {
      $('#' + id + 'Parent').show();
      $('body').css('overflow-y', 'hidden');
    });
    $('#' + id + 'ExitBox').click(() => {
      $('#' + id + 'Parent').hide();
      $('body').css('overflow-y', 'scroll');
    });
  });
  const marginColumns = desktopColumns ? (12-desktopColumns)/2 : 1;
  const imageColumns = desktopColumns ? desktopColumns : 10;
  return(
      <div className = {cx('row', 'marginTop4')}>
        <div className = {cx('col-' + marginColumns)}></div>
        <div className = {cx('col-' + imageColumns, styles.imageContainer)}>
          <img src = {image} className = {cx(styles.image)} id = {id}/>
          <h6 className = {cx('caption', 'darkPrimary', 'marginTop7', 'centerAlign')}>
            {caption}
          </h6>
          <div id = {id + 'Parent'} className = {cx(styles.imageDisplayedParent)}>
            <div className = {cx(styles.imageDisplayedContainer)}>
              <img src = {image} className = {cx(styles.imageDisplayed)} id = 'image'/>
              <div className = {cx(styles.exitContainer)} id = {id + 'ExitBox'}>
                <h4 className = {cx('darkSecondary', styles.exit)}>
                  <i className="fas fa-times"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


const styles = {
  imageContainer:css`
    position: relative;
  `,
  image:css`
    width: 100%;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.10);
  `,
  imageDisplayedParent:css`
    z-index: 1000;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    background-color: ${styleConstants.lightBack1};
  `,
  imageDisplayedContainer:css`
    height: 100%;
    width: 100%;
    position: relative;
  `,
  imageDisplayed:css`
    width: 100%;
  `,
  exitContainer:css`
    background-color: ${styleConstants.lightBack1};
    width: 70px;
    height: 70px;
    position: fixed;
    top: 25px;
    right: 25px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.16);
    border-radius: 15px;
    cursor: pointer;
  `,
  exit:css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-weight: 100;
  `

}
