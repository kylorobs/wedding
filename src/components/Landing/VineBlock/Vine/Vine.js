
import React from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt';

const Vine = (props) => {


function loopAndDraw(vine, container){
    // appendVine(vine, container);
    drawLine(vine, "5s", "1s")
}

function drawLine(svg, duration, delay){
  let paths = svg.children;
  let length;
  if (svg.classList.contains('vine')){
    length = paths[0].getTotalLength();
    setDash(paths[0], length, length)
    animatePath(paths[0], duration, '600', delay)
  }
  else {
    svg.classList.add("fadeIn")
    for(let x = 0; x < paths.length; x++){
      length = paths[x].getTotalLength();
      setDash(paths[x], length, '-400')
      animatePath(paths[x], duration, '0', delay)
    }
  }

  function animatePath(path, duration, offset, delay){
      path.getBoundingClientRect();
      path.style.transition = `stroke-dashoffset ${duration} ease-in-out`;
      path.style.strokeDashoffset = `${offset}`;
      path.style.animationDelay = delay;
  }

  function setDash(path, dashArray, dashOffset){
      path.style.strokeDasharray = `${dashArray}  ${dashArray}`
      path.style.strokeDashoffset = `${dashOffset}`;
  }
}

// function appendVine(vine, container){
//   container.innerHTML = vine;
// }

console.log("This is the SVG to do things with")
console.log(props.svg)
let svg = props.svg
let ap = `vine${props.appendTo}`

 loopAndDraw(svg, ap);
svg = svg
svg = svg.toString();
console.log(typeof svg)
return (
  <div dangerouslySetInnerHTML={{__html:{svg}}}></div>

)

}

export default Vine
