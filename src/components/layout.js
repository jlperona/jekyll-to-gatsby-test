import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div>
      <StaticImage
        src="../images/site/masthead.jpg"
        alt="Site logo depicting a calico cat."
        loading="eager"
        height="200"
      />
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      {children}
    </div>
  );
}
