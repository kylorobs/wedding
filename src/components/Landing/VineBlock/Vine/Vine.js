
import React from 'react'
import SvgLines from 'react-mt-svg-lines';
import LandingStyles from '../../LandingStyles.module.css'

const Vine = (props) => {

let svg = props.svg
const styles = {
  position: "absolute",
  left: svg.left,
  top: svg.top,
  transform: svg.transform
};

let classN;
if (svg.class === "vine") classN=LandingStyles.vine
else classN=LandingStyles.branch


return (

  svg.class === 'vine' ?
  <SvgLines animate={ true } duration={ 20000 } timing= { "ease" }>
  <svg
    width={svg.width}
    style = {{
      position: "absolute",
      left: svg.left,
      top: svg.top,
      transform: svg.transform
    }}
    className = {classN}
    viewBox={svg.viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <path d={svg.path1} fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth} />
  </svg>
  </SvgLines>
  :
  <SvgLines animate={ true } duration={ 10000 } fade= { true } timing= { "ease" } stagger = { 20 }>
  <svg
    width={svg.width}
    style = {{
      position: "absolute",
      left: svg.left,
      top: svg.top,
      transform: svg.transform
    }}
    className = {classN}
    viewBox={svg.viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <path d={svg.path1} fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth} />
      <path d={svg.path2} fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth} />
      <path d={svg.path3} fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth} />
  </svg>
  </SvgLines>
)

}

export default Vine
