import React, { useRef } from "react"
import useOnScreen from "./Hooks/useOnScreen"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

const Project = ({ img, title, description, url, alt }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.1 })
  let aRef = useRef(null)

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  // const calc = (x, y) => [
  //   -(y - window.innerHeight / 2) / 60,
  //   (x - window.innerWidth / 2) / 60,
  //   1,
  // ]

  const calc = (x, y) => [
    -(y - aRef.current.clientHeight / 2) / 30,
    (x - aRef.current.clientWidth / 2) / 30,
    1,
  ]

  const trans = (x, y, s) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const mouseMove = e => {
    e.persist()
    var rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left //x position within the element.
    var y = e.clientY - rect.top
    set({ xys: calc(x, y) })
  }

  return (
    <div className={`project ${visible ? "--visible" : ""}`} ref={setRef}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="project__image"
        // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseMove={e => mouseMove(e)}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        ref={aRef}
      >
        <animated.div style={{ transform: props.xys.interpolate(trans) }}>
          <Img fluid={img} alt={alt} />
        </animated.div>
      </a>
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  )
}

export default Project
