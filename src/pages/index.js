import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import anime from "animejs/lib/anime.es.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Anim from "../components/anim"
import Project from "../components/project"

const IndexPage = ({ data }) => {
  const [loadingIndicator, setLoadingIndicator] = useState(false)
  let elRef = useRef(null)
  let elRef2 = useRef(null)

  useEffect(() => {
    setLoadingIndicator(localStorage.getItem("loader"))
    if (loadingIndicator === null) {
      playAnim()
    } else {
      const timer = setTimeout(() => {
        localStorage.removeItem("loader")
        playAnim()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [loadingIndicator])

  const playAnim = () => {
    anime({
      targets: ".--anim",
      opacity: 1,
      duration: 600,
      easing: "easeInOutQuad",
      delay: anime.stagger(100),
    })
  }

  const scrollFooter = () => {
    window.scrollTo({
      top: elRef2.current.clientHeight + elRef.current.clientHeight,
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <SEO title="Valentin Bellamy, développeur frontend" />
      <Anim />
      <section className="intro" ref={elRef2}>
        <div className="container">
          <div className="intro__content">
            <h2 className="special__title mbs --anim">bienvenue</h2>
            <h1 className="--anim">
              Développeur frontend en freelance, <span>passionné</span> par le
              web et très tatillon avec les <span>performances</span> de votre
              site !
            </h1>
            <div className="intro__action">
              <span className="--anim">Intéressé(e) ?</span>
              <div className="btn btn--heart --anim">
                <button type="button" onClick={() => scrollFooter()}>
                  Contactez-moi alors !
                </button>
                <span className="heart1" role="img" aria-label="Coeur">
                  😀
                </span>
                <span className="heart2" role="img" aria-label="Coeur">
                  😀
                </span>
                <span className="heart3" role="img" aria-label="Coeur">
                  😀
                </span>
              </div>
              {/* <div className="btn btn--not-yet">
                <button type="button">Voir mes projets</button>
                <div>
                  <Img fixed={data.facepalm.childImageSharp.fixed} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="projects --anim" ref={elRef}>
        <div className="container">
          <h2 className="special__title mbm">mes projets récents</h2>
          <Project
            img={data.img1.childImageSharp.fluid}
            title="Studio Mitsu"
            description="Développement et mise en place d'un CMS"
            url="https://studiomitsu.com"
          />
          <Project
            img={data.img2.childImageSharp.fluid}
            title="Volta architecture"
            description="Développement et mise en place d'un CMS"
            url="https://volta-architecture.com"
          />
          <Project
            img={data.img3.childImageSharp.fluid}
            title="Studio +33"
            description="Développement et mise en place d'un CMS"
            url="https://plus33studio.com"
          />
          <Project
            img={data.img4.childImageSharp.fluid}
            title="Cactus et Lama"
            description="Design, développement et mise en place d'un CMS"
            url="https://cactus-et-lama.fr"
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    img1: file(relativePath: { eq: "photo-1-min.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "photo-2-min.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "photo-3-min.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img4: file(relativePath: { eq: "photo-5-min.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    facepalm: file(relativePath: { eq: "Picard-Facepalm.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
