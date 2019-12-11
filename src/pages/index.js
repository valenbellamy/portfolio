import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/styles/intro.scss"
import "../components/styles/footer.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Valentin Bellamy, freelance frontend developer" />
      <div className="intro">
        <h1>
          Hi, I’m a french developer,<br></br>with a passion for design.
        </h1>
        <Img
          fluid={data.img.childImageSharp.fluid}
          alt="Picture of Valentin working"
        />
      </div>
      <div className="about">
        <h2>ABOUT</h2>
        <div>
          <p>
            I am a web developer with 5 years of experience, specialized in
            frontend development. I try to be creative in my work, without
            forgetting performance and usability. I love working with all the
            React environment (mainly Gatsby). I can do webdesign, frontend and
            backend code (NodeJS). Don't hesitate to contact if you're
            insterested to collaborate !
          </p>
        </div>
      </div>
      <footer>
        <h2>CONTACT ME</h2>
        <div>
          bellamyvalentin@gmail.com -{" "}
          <a
            href="https://codepen.io/Valou"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to my codepen"
          >
            Codepen
          </a>{" "}
          -{" "}
          <a
            href="https://twitter.com/BellamyValentin"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to my Twitter"
          >
            Twitter
          </a>
        </div>
      </footer>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "photo.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
