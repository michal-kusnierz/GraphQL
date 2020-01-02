import React from 'react'
import Link from './Link'
import { useQuery } from 'urql'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

const LinkList = () => {
  useQuery({ query: FEED_QUERY });

  return (
    <div>
      {linksToRender.map(link => <Link key={link.id} link={link} />)}
    </div>
  );
};

export default LinkList
