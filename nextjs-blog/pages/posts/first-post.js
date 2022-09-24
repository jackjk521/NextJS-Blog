
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Layout from '../../components/layout'


const CatImage = () => (
    <Image
        src="/images/maine_coon.jpg" 
        height={144} 
        width={144} 
        alt="Maine Coon"
    />
);


export default function FirstPost() {
    return (
   
        <Layout>
            <Head>
                <title>First Post</title>

            </Head>
            <h1>First Post</h1>

            <h3>So excited!! *Kevin Hart's voice* </h3>

            <h3> Done laughing ? </h3>

            <h2>
                <Link href="/">
                    <a> Go back home now!! Bye bye</a>
                </Link>
            </h2>

            <h1>Here is cat</h1>
            <CatImage />

        </Layout>
                
    ); 
}