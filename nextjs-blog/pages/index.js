import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
 
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
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className={utilStyles.headingMd}>
                    <p>[Your Self Introduction]</p>
                    <h1 className={utilStyles.headingMd}>
                        Read <Link href="/posts/first-post"> this my first-post here!</Link>
                    </h1>
                </section>
            </Layout>
     
        </div>
  )
}
