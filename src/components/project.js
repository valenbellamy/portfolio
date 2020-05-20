import React from "react"
import useOnScreen from "./Hooks/useOnScreen"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1,
]
const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Project = ({ img, title, description, url }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.1 })

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <div className={`project ${visible ? "--visible" : ""}`} ref={setRef}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="project__image"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
      >
        <animated.div style={{ transform: props.xys.interpolate(trans) }}>
          <Img fluid={img} />
        </animated.div>
      </a>
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  )
}

export default Project
