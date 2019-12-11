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
            value: "M 10,0 L 10,10 C 10,10 10,5 5,5 C 0,5 0,10 0,10 L 0,0 Z",
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
            value: "M 10,0 L 10,0 C 10,0 10,0 5,0 C 0,0 0,0 0,0 L 0,0 Z",
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
      <svg viewBox="0 0 10 10" preserveAspectRatio="none">
        <path
          ref={element => {
            svgRef = element
          }}
          fill="#ffffff"
          d="M 10,0 L 10,10 C 10,10 10,10 5,10 C 0,10 0,10 0,10 L 0,0 Z"
        ></path>
      </svg>
    </div>
  )
}

export default Anim
