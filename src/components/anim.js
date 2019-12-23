import React, { useEffect, useRef } from "react"
import anime from "animejs/lib/anime.es.js"

import "./styles/anim.scss"

const Anim = () => {
  let svgRef = useRef(null)

  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: svgRef,
        d: [
          {
            value:
              "M 100,0 L 100,100 C 100,100 100,50 50,50 C 0,50 0,100 0,100 L 0,0 Z",
          },
        ],
        easing: "easeInQuart",
        duration: 1000,
        loop: false,
      })
      .add({
        targets: svgRef,
        d: [
          {
            value: "M 100,0 L 100,0 C 100,0 100,0 50,0 C 0,0 0,0 0,0 L 0,0 Z",
          },
        ],
        easing: "easeOutQuart",
        duration: 1000,
        loop: false,
      })
    anime({
      targets: ".morph-intro",
      translateY: "-100%",
      duration: 10,
      delay: 2000,
    })
  }, [])
  return (
    <div className="morph-intro">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          ref={element => {
            svgRef = element
          }}
          fill="#f2eeea"
          d="M 100,0 L 100,100 C 100,100 100,100 50,100 C 0,100 0,100 0,100 L 0,0 Z"
        ></path>
      </svg>
    </div>
  )
}

export default Anim
