import React from 'react'
import Vine from './Vine/Vine'
import LandingStyles from '../LandingStyles.module.css'

class VineBlock extends React.Component{

  state = {
    longestVine : {
     path: "M73.91 252.44c4.26.79 5.38 5 2.75 8.08-3.14 3.74-8.77 2.56-11.84.16-7.64-6-.79-16.54 8.06-19.15 9.48-2.82 19.44 3.37 22.86 10.41 4 8.23.58 17.93-6 25.24-7 7.79-17.86 12-28.5 13.22a37.66 37.66 0 0 1-41-47.36c2.62-10 9.27-19.89 16.41-28.25s15.69-15.42 24.34-22.41c18.44-14.89 36.75-30.35 47.75-50.26 16.37-29.63 11.12-63-6.61-88.64C82.7 25.26 48.38 6.27 10.07 2.07 7.05 1.74 4 1.51 1 1.36.41 1.35-.31 0 .14 0c38.09 1.88 72.49 17.94 95.05 43.37 20.37 23 30.56 54.09 21.37 84.44-5.68 18.75-19.16 35.26-34.67 49.36C65 192.5 45 205.18 32 223.47c-6.27 8.85-11.34 18.76-11.81 28.93a36 36 0 0 0 8.22 24.34 35.22 35.22 0 0 0 23.29 12.38c10.46 1.16 22.29-2 31-8a32.38 32.38 0 0 0 13-17.92c2.18-7.86-1.51-15.5-9.23-19.12-7.43-3.48-17.17-1.76-21.91 5.33-2.68 4-2.55 9 2.06 11.36a8.09 8.09 0 0 0 7 0c2.77-1.31 5.49-6.14.88-7-.49-.09-1.28-1.45-.58-1.33z",
     viewbox: "0 0 119.96 290.66"
   },
   innerSquigglyVine : {
     path: "M155.38 264.82a12 12 0 0 1-2.19 11.67c-3 3.83-8.23 5.56-13.16 5.88a18.11 18.11 0 0 1-19.28-14c-2-8.2 1.77-17.61 9.36-23.52 8.24-6.4 19.78-8.4 29.85-6.93a35 35 0 0 1 23.26 13.57c5.19 7.12 6.93 16.33 6.15 25-1.65 18.35-16.1 35.19-35.86 42.48-20 7.37-42.54 6.75-60.8-.95s-30.21-22.31-34.56-39.73c-3.82-15.32-1.32-30.9 5.25-46.1 7.08-16.34 17.09-31.75 24.82-47.85 15.6-32.4 22.8-67.92 14.87-101.08a97.82 97.82 0 0 0-21.44-41.78c-12-13.69-28.25-23.93-46.4-30.85A184.47 184.47 0 0 0 .69 1.52C.14 1.42-.27-.07.21 0 22 3.72 43 10.59 60.48 22a101.7 101.7 0 0 1 33.35 35.35c14.32 25.58 16.38 56.12 10.3 85.19-4.26 20.34-12.81 39.78-23.06 58.75-8.18 15.13-17.54 30.19-21.76 46.39-4.55 17.5-1.79 36.61 9.08 50.84 11.5515.1 31.8 23.62 53.08 24.15 21.79.55 44.89-7.36 57.81-24.37 12.61-16.62 13.52-41.47-4.2-53.36-15.58-10.48-44.2-7.26-52.22 11.77-4 9.56-.57 20.68 10.64 23.59a20.87 20.87 0 0 0 15.2-2.06c5.17-3 7.47-8.76 5.82-13.55-.37-1.05.64-.54.86.13z",
     viewbox: "0 0 189.55 324.18"
   },
   smallSquiggle : {
     path:"M10.17 0l-.74.9a42.09 42.09 0 0 0-4.56 46.21A41.66 41.66 0 0 0 15.44 60a28.15 28.15 0 0 0 20.8 6.31 28.44 28.44 0 0 0 19.13-10.26 19.4 19.4 0 0 0-2.77-27.28 13.28 13.28 0 0 0-18.76 1.87 9.2 9.2 0 0 0-2.05 6.84 9.35 9.35 0 0 0 3.37 6.29A6.58 6.58 0 0 0 40 45.25a6.66 6.66 0 0 0 4.48-2.41 4.79 4.79 0 0 0 1.08-3.58A5 5 0 0 0 43.84 36a3.17 3.17 0 0 0-.54-.35 3.9 3.9 0 0 0-2.83-.59 2.74 2.74 0 0 0-2.14 2.71 1.78 1.78 0 0 0 1.34 1.53 1.86 1.86 0 0 0 2.2-1.3.37.37 0 0 1 0-.09 2 2 0 0 1 .58.39 2.24 2.24 0 0 1 .55 1.22 2.3 2.3 0 0 1-.5 1.67 4 4 0 0 1-2.73 1.48 4 4 0 0 1-3-.9 6.81 6.81 0 0 1-2.44-4.57 6.62 6.62 0 0 1 1.49-4.93A10.71 10.71 0 0 1 51 30.78a16.82 16.82 0 0 1 2.4 23.64A25.75 25.75 0 0 1 17.07 58 39.42 39.42 0 0 1 2.8 31.42a39.28 39.28 0 0 1 8.65-28.87l.75-.92z" ,
     viewbox: "0 0 59.73 66.47"
   },
   branch : {
     path1: "M84.38 43.48c-4-2.41-3-7.39.59-9.64 3.79-2.39 8.19.11 10.58 3.21 5 6.47 1 14.91-5.16 18.78-6.86 4.28-14.92 2.26-20.83-2.57a26.34 26.34 0 0 1-9.27-17.67C58.82 21 70.56 8.15 83.36 3.12a38.48 38.48 0 0 1 21.11-1.83c7.07 1.34 13.47 4.88 19.13 9.24a58.95 58.95 0 0 1 15.85 74.15c-13.14 24.95-38.57 42.13-66.45 45.64a88.42 88.42 0 0 1-53.12-10.25c-.32-.18-1.3.33-1.06.46a90.24 90.24 0 0 0 77.39 4.1 89.54 89.54 0 0 0 32.22-22.79c9.29-10.32 16.47-22.84 18.48-36.76a59.58 59.58 0 0 0-7.67-38.44c-6.75-11.52-18.05-21.58-31.06-25.23a40.8 40.8 0 0 0-36.24 7.76 36.52 36.52 0 0 0-11.66 16.28 26.52 26.52 0 0 0 1.29 19.3 25.26 25.26 0 0 0 14.3 13.19 18.75 18.75 0 0 0 17.31-3.36c5.23-4.19 7.65-11.29 3.93-17.27-3.28-5.29-10.48-6.76-14.87-2a5.52 5.52 0 0 0 1.08 8.61c.31.19 1.3-.31 1.06-.44z",
     path2: "M187.35 65.87a3.68 3.68 0 0 0 6.11-1c1.42-2.88-1.13-5.57-3.68-6.48-6.32-2.27-11 4.76-9.85 10.37 1.21 6 8.42 9.52 14.08 9.15 6.6-.41 11.81-5.3 14.45-11.14 2.83-6.23 2.1-13.45-.54-19.61a22.87 22.87 0 0 0-11.6-11.76c-10.42-4.83-23.39-2.79-32.22 4.35-5.66 4.54-9.94 11.25-13.1 17.73s-5 13.35-6.76 20.23c-3.75 14.68-7.92 29.46-17.31 41.67-14 18.16-37.3 25.75-59.61 24.16a88.07 88.07 0 0 1-62.79-33.92c-1.18-1.52-2.29-3.1-3.36-4.71-.21-.3-1.31-.26-1.15 0a89.55 89.55 0 0 0 58.52 38c21.41 3.87 44.87-.35 61.61-14.86 10.33-8.94 16.74-21.43 20.92-34.26 4.56-14 6.37-28.82 14.09-41.57 3.73-6.18 8.53-12 15-15.47a30.37 30.37 0 0 1 18.41-3.16A23.85 23.85 0 0 1 204 42.34a25.69 25.69 0 0 1 4.74 19.31 20.87 20.87 0 0 1-7.45 12.67 13 13 0 0 1-15.35 1c-4.64-2.94-6.64-8.76-3.55-13.56 1.75-2.72 5.05-4.22 8-2.43a4.49 4.49 0 0 1 2.21 3.8c0 1.91-2.23 4.9-4.26 2.65-.21-.22-1.35-.22-1 .11z",
     path3: "M165 85.53c2.49-1.69 1.8-5-1-5.92-2.32-.74-4.59 1.23-5 3.38-.61 2.81 2.32 5.33 5 5a5.57 5.57 0 0 0 4.9-5c.35-3.11-2.34-5.61-5.21-6.08a7 7 0 0 0-6.38 2.81c-4.14 5.19 1.23 12.38 7.26 11.75a9.42 9.42 0 0 0 7.68-12.79c-2.2-5.67-9.44-8-14.72-5.32a12.51 12.51 0 0 0-6.18 15.39c2.15 6 8.69 9.42 14.86 8.77s11-5.32 13-10.92a16.37 16.37 0 0 0-4.75-17.28 18.08 18.08 0 0 0-16.31-4.08c-6.35 1.62-10.22 7.51-13 13a24.46 24.46 0 0 0-2 5.48c0 .15.53 0 .56-.16a32 32 0 0 1 4.78-10.2c2.1-3.2 4.63-6 8.27-7.43 6.42-2.55 14 .07 18.57 5A16.24 16.24 0 0 1 177 90.28a14.21 14.21 0 0 1-20.07 4.52 12.56 12.56 0 0 1-2.58-18.69c5.57-6.27 16.33-3.6 18 4.72a9.07 9.07 0 0 1-5.35 9.85c-3.84 1.62-8.22-.57-9.92-4.16-1.89-4 1-9.23 5.51-9.36a5.66 5.66 0 0 1 5.16 8.14c-2.13 4.13-8.27 2.33-8.19-2.08a3.39 3.39 0 0 1 5.11-2.85 3 3 0 0 1 .06 5.09c-.32.21.2.17.35.07zM144.08 41c.12.32.25.63.39 1l.24.53 1.11-.45-.11-.62A25.35 25.35 0 0 1 158.92 8a16.7 16.7 0 0 1 22 8.7l.15.36a10.92 10.92 0 0 1-5.83 14 7 7 0 0 1-9.24-3.64l-.06-.16a4.49 4.49 0 0 1 2.39-5.73 2.83 2.83 0 0 1 2.12 0A2.78 2.78 0 0 1 171.9 23a1.71 1.71 0 0 1 0 1.24 1.69 1.69 0 0 1-.67.76 1.15 1.15 0 0 1-.64.13 1.07 1.07 0 0 0 0-.25 1.08 1.08 0 0 0-.07-.36 1 1 0 0 0-1.88 0 1.63 1.63 0 0 0 .79 1.8 2.59 2.59 0 0 0 1.86.09l.24-.08a3 3 0 0 0 1.6-1.64 3 3 0 0 0 0-2.15 4.05 4.05 0 0 0-2.31-2.3 4 4 0 0 0-3.13 0 5.82 5.82 0 0 0-3.13 7.46l.09.21a8.4 8.4 0 0 0 11.06 4.37 12.26 12.26 0 0 0 6.38-16.13 18.07 18.07 0 0 0-23.76-9.41 26.74 26.74 0 0 0-16.07 24.86 26.14 26.14 0 0 0 1.82 9.4z",
     viewbox: "0 0 210.27 144.26"
   },
   svgs: []
  }

  componentDidMount(){
    let svgs;
    let position = this.props.position;
    switch (position){
      case 'Left' :
      case 'Right' :
        svgs = this.buildVineColumn()
      break;
      case 'Top' :
      case 'Bottom' :
        svgs = this.buildVineRow()
      break;
      default: console.log("unknown position")
    }

    this.setState({
      svgs: svgs
    })
  }

  buildVineColumn = () => {
    let vineClass = LandingStyles.vine;
    let branchClass = LandingStyles.branch;

    let longestVine = this.state.longestVine;
    let innerSquigglyVine = this.state.innerSquigglyVine;
    let smallSquiggle = this.state.smallSquiggle;
    let branch = this.state.branch;

    let vine1 = this.createVineSVG(longestVine, "vine");
      this.setRotation_Width_Stroke(vine1, 270, '35%', '2')
      this.setPosition(vine1, 5, 2)

      let vine2 = this.createVineSVG(longestVine, "vine");
      this.setRotation_Width_Stroke(vine2, 170, '30%', '1')
      this.setPosition(vine2, 0, 0)

      let vine3 = this.createVineSVG(smallSquiggle, "vine");
      this.setRotation_Width_Stroke(vine3, 0, '27%', '1')
      this.setPosition(vine3, 27, 0)

      let vine4 = this.createVineSVG(innerSquigglyVine, "vine");
      this.setRotation_Width_Stroke(vine4, 30, '55%', '0.6')
      this.setPosition(vine4, 25, 0)

      let vine5 = this.createVineSVG(innerSquigglyVine, "vine");
      this.setRotation_Width_Stroke(vine5, -20, '55%', '0.6')
      this.setPosition(vine5, 15, 35)

      let vine6 = this.createVineSVG(branch, "branch");
      this.setRotation_Width_Stroke(vine6, 0, '70%', '1')
      this.setPosition(vine6, 11, 33)

      let vine7 = this.createVineSVG(branch, "branch");
      this.setRotation_Width_Stroke(vine7, 0, '55%', '2')
      this.setPosition(vine7, 50, 0)

      let vine8 = this.createVineSVG(smallSquiggle, "vine");
      this.setRotation_Width_Stroke(vine8, 350, '27%', '0.8')
      this.setPosition(vine8, 62, 8)

       let vine9 = this.createVineSVG(longestVine, "vine");
       this.setRotation_Width_Stroke(vine9, 0, '55%', '0.8')
        this.setPosition(vine9, 60, 0)

         let vine10 = this.createVineSVG(branch, "branch");
      this.setRotation_Width_Stroke(vine10, 18, '6em', '2')
          this.setPosition(vine10, 79, 28)

      let vine11 = this.createVineSVG(smallSquiggle, "vine");
      this.setRotation_Width_Stroke(vine11, 270, '28%', '1.5')
      this.setPosition(vine11, 48, 52)

    let vinesInBlock = [vine1, vine2, vine3, vine4, vine5, vine6, vine7, vine8, vine9, vine10, vine11]

    return vinesInBlock;
  }

  buildVineRow = () => {
    let vineClass = LandingStyles.vine;
    let branchClass = LandingStyles.branch;
    let longestVine = this.state.longestVine;
    let innerSquigglyVine = this.state.innerSquigglyVine;
    let smallSquiggle = this.state.smallSquiggle;
    let branch = this.state.branch;

    let vine1 = this.createVineSVG(longestVine, "vine");
     this.setRotation_Width_Stroke(vine1, 90, '35%', '2')
     this.setPosition(vine1, -10, 10)

     let vine2 = this.createVineSVG(longestVine, "vine");
     this.setRotation_Width_Stroke(vine2, 130, '25%', '1')
     this.setPosition(vine2, 0, -20)

     let vine3 = this.createVineSVG(smallSquiggle, "vine");
     this.setRotation_Width_Stroke(vine3, 0, '27%', '1')
     this.setPosition(vine3, -10, 50)

     let vine4 = this.createVineSVG(innerSquigglyVine, "vine");
     this.setRotation_Width_Stroke(vine4, -20, '40%', '0.6')
     this.setPosition(vine4, -10, 80)

     let vine5 = this.createVineSVG(innerSquigglyVine, "vine");
     this.setRotation_Width_Stroke(vine5, -80, '55%', '0.6')
     this.setPosition(vine5, 15, 120)

     let vine6 = this.createVineSVG(branch, "branch");
     this.setRotation_Width_Stroke(vine6, 0, '60%', '1')
     this.setPosition(vine6, 11, 180)

     let vine7 = this.createVineSVG(smallSquiggle, "vine");
     this.setRotation_Width_Stroke(vine7, 0, '27%', '1')
     this.setPosition(vine7, -10, 150)

     let vine8 = this.createVineSVG(smallSquiggle, "vine");
     this.setRotation_Width_Stroke(vine8, 300, '50%', '0.8')
     this.setPosition(vine8, -10, 240)

      let vine9 = this.createVineSVG(longestVine, "vine");
      this.setRotation_Width_Stroke(vine9, 20, '35%', '0.8')
       this.setPosition(vine9, -20, 300)

  let vinesInBlock = [vine1, vine2, vine3, vine4, vine5, vine6, vine7, vine8, vine9]

  return vinesInBlock;
}

 createVineSVG = (svgType, className) => {
  let svg = {};
  svg.class = className;
  svg.viewBox = svgType.viewbox

  if (className !== "branch"){
    svg.path1 = svgType.path;
  }

  else if (className === "branch") {
    svg.path1 = svgType.path1
    svg.path2 = svgType.path2
    svg.path3 = svgType.path3
  }

  else console.log("Could not find svg type")

  return svg
}


setRotation_Width_Stroke = (vine, rotation, width, stroke) =>{
   vine.width = width;
   vine.transform = `rotate(${rotation}deg)`;
   vine.fill = "none";
   vine.stroke = "#2e7f43"
   vine.strokeWidth = stroke;
 }

 setPosition =(svg, top, left) =>{
   svg.top = `${top}%`;
   svg.left = `${left}%`;
 }

  render(){
    let position = this.props.position;
      console.log(this.state.svgs)
    let svgs = "waiting"
    if(this.state.svgs.length > 1){
      svgs = this.state.svgs.map((svg, i) => {
        return <Vine svg={svg} key={i} appendTo={position} />
      })
    }

    let caseArea;
    let caseCont;

    switch (position){
      case 'Left' :
      caseArea = LandingStyles.vineLeft
      caseCont = LandingStyles.vineLeftContainer
      break;
      case 'Right' :
        caseArea = LandingStyles.vineRight
        caseCont = LandingStyles.vineRightContainer
      break;
      case 'Top' :
        caseArea = LandingStyles.vineTop;
        caseCont = LandingStyles.vineTopContainer
      break;
      case 'Bottom' :
      caseArea = LandingStyles.vineBottom;
      caseCont = LandingStyles.vineBottomContainer
      break;
      default: console.log("unknown position")
    }

    console.log(svgs)


    return (
      <div className={caseCont}>
        <div className={caseArea}>
          {svgs}
        </div>
      </div>
    )
    }

}

export default VineBlock
