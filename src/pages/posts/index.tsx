import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
     <Head>
         <title>Posts | Ignews</title>
     </Head>

     <main className={styles.container}>
         <div className={styles.posts}>
             <a href="#">
                 <time>19 de julho de 2021</time>
                 <strong>Creating a Monorep with lerna & Yarn Workspaces</strong>
                 <p>In this guide, you will learn how to create a Monorepo to manage multiple packages</p>
             </a>
             <a href="#">
                 <time>19 de julho de 2021</time>
                 <strong>Creating a Monorep with lerna & Yarn Workspaces</strong>
                 <p>In this guide, you will learn how to create a Monorepo to manage multiple packages</p>
             </a>
             <a href="#">  
                 <time>19 de julho de 2021</time>
                 <strong>Creating a Monorep with lerna & Yarn Workspaces</strong>
                 <p>In this guide, you will learn how to create a Monorepo to manage multiple packages</p>
             </a>
         </div>
     </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const respose = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
  });

  console.log(respose);

  return {
      props: {}
  }
};