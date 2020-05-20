import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AproposPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="A propos | Valentin Bellamy" />
      <section className="about">
        <div className="about__content">
          <h1 className="mbxl">
            Vous êtes <span>curieux</span>, on devrait s'entendre alors !
          </h1>
          <h2 className="special__title mbs">en bref</h2>
          <p className="mbm">
            Développeur frontend depuis 6 ans, je suis passionné par ce métier
            qui ne cesse de s’enrichir. Je donne mon maximum pour apporter
            <span> performance</span>, <span>précision</span> et{" "}
            <span>innovation</span> dans tous mes projets.
          </p>
          <p className="mbm">
            J’essaye d’adopter au maximum une approche “JAMstack” dans mes
            réalisations. Je développe principalement mes sites avec le
            framework <span>GatsbyJS</span> qui m’assure un développement rapide
            et performant. Je peux également intervenir sur des sites{" "}
            <span>Wordpress</span> et des <span>applications</span>.
          </p>
          <p className="mbm">
            L’autre facette qui m’intéresse beaucoup est le{" "}
            <span>webdesign</span>, cela peut m’amener à également designer des{" "}
            <span>sites vitrines</span>.
          </p>
          <p className="mbxl">
            Je peux intervenir en freelance seul ou monter une équipe afin de
            <span> réaliser vos projets</span> !
          </p>
          <div>
            <div>
              <h2 className="special__title mbs">ce que je peux faire</h2>
              <ul>
                <li>- Développement sur mesure</li>
                <li>- Mise en place d’un CMS</li>
                <li>- Design de site vitrine</li>
              </ul>
            </div>
            <div>
              <h2 className="special__title mbs">compétences</h2>
              <ul>
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
          <span role="img" aria-label="Thug">
            &#128374;
          </span>
          <Img
            fluid={data.img.childImageSharp.fluid}
            backgroundColor="#000000"
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
