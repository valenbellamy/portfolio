import React, { useEffect, useRef, useState } from "react"
import anime from "animejs/lib/anime.es.js"

const Anim = () => {
  let svgRef = useRef(null)
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("loader") === null) {
      setDisplay(false)
    }
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
    <div className={`morph-intro ${display ? "" : "--hidden"}`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          ref={element => {
            svgRef = element
          }}
          fill="#000"
          d="M 100,0 L 100,100 C 100,100 100,100 50,100 C 0,100 0,100 0,100 L 0,0 Z"
        ></path>
      </svg>
    </div>
  )
}

export default Anim
