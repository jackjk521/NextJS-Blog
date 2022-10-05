
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import causticImage from '../../public/images/caustic.jpg'

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
        <div>
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

            <form action="/api/first_postHandler" method="post">
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" />
                <label for="age">Age: </label>
                <input type="number" id="age" name="age" />
                <button type="submit">Submit</button>
            </form>

            <h1>Here is cat</h1>
            <CatImage />
            <Image src={causticImage} alt= "Caustic" />

        </div> 
    ); 
}