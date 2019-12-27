import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import spacing from '../styles/spacingConstants.js'
import "../styles/fonts.css"
import "../styles/phoneSpacing.css"
import "../styles/tabletSpacing.css"
import "../styles/desktopSpacing.css"
import seq1 from '../images/SoccerKick/Sequence1.png'
import seq2 from '../images/SoccerKick/Sequence2.png'
import seq3 from '../images/SoccerKick/Sequence3.png'
import seq4 from '../images/SoccerKick/Sequence4.png'
import seq5 from '../images/SoccerKick/Sequence5.png'
import seq6 from '../images/SoccerKick/Sequence6.png'
import seq7 from '../images/SoccerKick/Sequence7.png'
import seq8 from '../images/SoccerKick/Sequence8.png'
import seq9 from '../images/SoccerKick/Sequence9.png'
import seq10 from '../images/SoccerKick/Sequence10.png'
import ButtonBold from '../components/ButtonBold'
import NavBar from '../components/NavBar'

let imageArr = [seq1, seq2, seq3, seq4, seq5, seq6, seq7, seq8, seq9, seq10];
let counter = 0;


export default function SoccerKick(props) {
  return(
    <>
    <div className = {styles.back}>
      <div className = {cx('row', styles.buttonRow)}>
        <div className = {styles.buttonContainer}>
            <div className = {styles.button} onClick = {(e) => {
              let imageElem = document.getElementsByTagName("img")[0];
              counter += 1;
              let currIndex = counter % imageArr.length;
              let currImage = imageArr[currIndex];
              imageElem.src = currImage;
            }}>
              <h4 className = {cx('light', styles.arrow)}><i class="fas fa-arrow-right"></i></h4>
            </div>
        </div>
      </div>
      <div className = {cx('row', styles.imageRow)}>
        <div class = 'col-1 col-m-2'></div>
        <div class = 'col-10 col-m-8'>
          <img src = {seq1} className = {styles.image}/>
        </div>
        <div class = 'col-1 col-m-2'></div>
      </div>
    </div>
    </>
  )
}


const styles = {
  buttonRow:css`
    position: relative;
  `,
  buttonContainer:css`
    width: min-content;
    margin: 50px auto;
    display: flex;
  `,
  button:css`
    background-color: rgb(30,30,30);
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: rgb(60,60,60);
    }
  `,
  image:css`
    width: 100%;
  `,
  arrow:css`
    line-height: 50px;
  `
}
