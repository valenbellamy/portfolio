import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import anime from "animejs/lib/anime.es.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AproposPage = ({ data }) => {
  useEffect(() => {
    anime({
      targets: ".--anim",
      opacity: 1,
      duration: 600,
      easing: "easeInOutQuad",
      delay: anime.stagger(60),
    })
  }, [])

  return (
    <Layout>
      <SEO title="A propos | Valentin Bellamy" />
      <section className="about">
        <div className="about__content">
          <h1 className="mbxl --anim">
            Vous êtes <span>curieux</span>, on devrait s'entendre alors !
          </h1>
          <h2 className="special__title mbs --anim">en bref</h2>
          <p className="mbm --anim">
            Développeur frontend depuis 6 ans, je suis passionné par ce métier
            qui ne cesse de s’enrichir. Je donne mon maximum pour apporter
            <span> performance</span>, <span>précision</span> et{" "}
            <span>innovation</span> dans tous mes projets.
          </p>
          <p className="mbm --anim">
            J’essaye d’adopter au maximum une approche “JAMstack” dans mes
            réalisations. Je développe principalement mes sites avec le
            framework <span>GatsbyJS</span> qui m’assure un développement rapide
            et performant. Je peux également intervenir sur des sites{" "}
            <span>Wordpress</span> et des <span>applications</span>.
          </p>
          <p className="mbm --anim">
            L’autre facette qui m’intéresse beaucoup est le{" "}
            <span>webdesign</span>, cela peut m’amener à également designer des{" "}
            <span>sites vitrines</span>.
          </p>
          <p className="mbxl --anim">
            Je peux intervenir en freelance seul ou monter une équipe afin de
            <span> réaliser vos projets</span> !
          </p>
          <div>
            <div>
              <h2 className="special__title mbs --anim">
                ce que je peux faire
              </h2>
              <ul className="--anim">
                <li>- Développement sur mesure</li>
                <li>- Mise en place d’un CMS</li>
                <li>- Design de site vitrine</li>
              </ul>
            </div>
            <div>
              <h2 className="special__title mbs --anim">compétences</h2>
              <ul className="--anim">
                <li>- HTML/CSS</li>
                <li>- Javascript</li>
                <li>- ReactJS, GatsbyJS</li>
                <li>- GraphQL</li>
                <li>- Wordpress</li>
                <li>- UX/UI</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about__image">
          <span className="--anim" role="img" aria-label="Thug">
            &#128374;
          </span>
          <Img
            fluid={data.img.childImageSharp.fluid}
            backgroundColor="#000000"
            alt="Photo de Valentin Bellamy, développeur frontend"
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "face-min.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default AproposPage
