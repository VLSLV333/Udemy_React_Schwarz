import Link from 'next/link'
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/nextJs-is-awesome">NEXTJS is a Great Framework</Link></li>
        <li>Next article</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
