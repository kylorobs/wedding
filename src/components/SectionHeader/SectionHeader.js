import React from 'react'
import Styles from './SectionHeaderStyles.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionHeader = (props) =>{

  const svg = {
     path: "M73.91 252.44c4.26.79 5.38 5 2.75 8.08-3.14 3.74-8.77 2.56-11.84.16-7.64-6-.79-16.54 8.06-19.15 9.48-2.82 19.44 3.37 22.86 10.41 4 8.23.58 17.93-6 25.24-7 7.79-17.86 12-28.5 13.22a37.66 37.66 0 0 1-41-47.36c2.62-10 9.27-19.89 16.41-28.25s15.69-15.42 24.34-22.41c18.44-14.89 36.75-30.35 47.75-50.26 16.37-29.63 11.12-63-6.61-88.64C82.7 25.26 48.38 6.27 10.07 2.07 7.05 1.74 4 1.51 1 1.36.41 1.35-.31 0 .14 0c38.09 1.88 72.49 17.94 95.05 43.37 20.37 23 30.56 54.09 21.37 84.44-5.68 18.75-19.16 35.26-34.67 49.36C65 192.5 45 205.18 32 223.47c-6.27 8.85-11.34 18.76-11.81 28.93a36 36 0 0 0 8.22 24.34 35.22 35.22 0 0 0 23.29 12.38c10.46 1.16 22.29-2 31-8a32.38 32.38 0 0 0 13-17.92c2.18-7.86-1.51-15.5-9.23-19.12-7.43-3.48-17.17-1.76-21.91 5.33-2.68 4-2.55 9 2.06 11.36a8.09 8.09 0 0 0 7 0c2.77-1.31 5.49-6.14.88-7-.49-.09-1.28-1.45-.58-1.33z",
     viewbox: "0 0 119.96 290.66",
     transform: "rotate(90deg)",
     width: '10%',
     strokeWidth: '0.8',
     fill : "none",
     stroke : "#2e7f43"
  }

    return (
      <div className={Styles.sectionHeader}>
          <svg
            width={svg.width}
            style = {{
              transform: svg.transform
            }}
            // className = {classN}
            viewBox={svg.viewbox}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
              <path d={svg.path} fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth} />
          </svg>
             <ScrollAnimation animateIn={Styles.textFocus}>
               <h2> {props.title} </h2>
           </ScrollAnimation>
            <svg
              width={svg.width}
              style = {{
                transform: 'rotate(-90deg)'
              }}
              // className = {classN}
              viewBox={svg.viewbox}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <path d={svg.path} fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth} />
            </svg>
      </div>
    )

}

export default SectionHeader
