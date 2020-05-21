import React, { useRef, useEffect, useState } from "react"
import Sequency from "./sequency.js"
import useOnScreen from "./Hooks/useOnScreen"

const Footer = () => {
  const textRef = useRef(null)
  const [text, setText] = useState("")
  const [isActive, setIsActive] = useState(true)
  const [count, setCount] = useState(0)
  const [setRef, visible] = useOnScreen({ threshold: 1 })
  const [mobile, setMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  )

  useEffect(() => {
    let interval = null
    let sequency = mobile ? Sequency.sequency2 : Sequency.sequency
    if (count <= sequency.length) {
      interval = setInterval(() => {
        setText(text => sequency[count])
        setCount(count => count + 1)
      }, 100)
    } else {
      setCount(0)
    }
    return () => clearInterval(interval)
  }, [count])

  return (
    <footer ref={setRef} data-visible={visible}>
      <div>
        <h2 className="mbs">
          Vous souhaitez{" "}
          <span ref={textRef} className="word">
            {text}
          </span>{" "}
          <span className="separator">|</span> avec moi?
        </h2>
        <div className="mail">
          <span role="img" aria-label="Coucou">
            &#128075;
          </span>{" "}
          bellamyvalentin@gmail.com
        </div>
      </div>
      <div className="footer__bottom">
        <ul>
          {/* <li>
            <a href="#" target="_blank" rel="noreferrer noopener">Twitter</a>
          </li> */}
          <li>
            <a
              href="https://codepen.io/Valou"
              target="_blank"
              rel="noreferrer noopener"
            >
              Codepen
            </a>
          </li>
        </ul>
        <span>Tous droits réservés © Valentin Bellamy 2020</span>
      </div>
    </footer>
  )
}

export default Footer
