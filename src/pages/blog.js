import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const pageName = 'Blog'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={pageName}>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

export const Head = () => <Seo title={pageName} />

export default BlogPage