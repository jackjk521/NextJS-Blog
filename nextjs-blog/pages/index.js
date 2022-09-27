import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Home({allPostsData}) {
 
    return (
       
    <div className="container">
      <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <Script
                    src="https://cat-bounce.com/"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, cats are now falling `)
                    }
                /> // won't be added
      </Head>

            <Script
                src="https://cat-bounce.com/"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, cats are now falling `)
                }
            />


            <Layout home> //home is the prop
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className={utilStyles.headingMd}>
                    <p> Trader - Blockchain Enthusiast - Investor - Organizer - Challenger </p>
                    <h1 className={utilStyles.headingMd}>
                        Read <Link href="/posts/first-post"> this my first-post here!</Link>
                    </h1>
                </section>

                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>
     
        </div>
  )
}
