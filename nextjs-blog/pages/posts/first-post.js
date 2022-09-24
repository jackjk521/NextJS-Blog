
import Image from 'next/image'


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
                
            <h1>First Post</h1>

            <h3>So excited!! *Kevin Hart's voice* </h3>

            <h1>Here is cat</h1>
            <CatImage/>

        </div> 
    ); 
}