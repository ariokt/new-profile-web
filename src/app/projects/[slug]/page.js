import Navbar from "@/sections/navbar";
import data from "../../../../dataProjects";
import Image from 'next/image';
import { notFound } from 'next/navigation'
import Footer from "@/sections/footer";

function getPageData(params) {
    const pageData = data.find(item => item.id === params);
    return pageData;    
}

export default function Page({ params }) {
    const data = getPageData(params.slug);
    if (data) {
        return (
            <main className="bg-blue-200 h-fit" >
                <Navbar />
                <div className='py-16 px-8 md:py-20 md:px-20 lg:py-28 lg:px-28 xl:py-32 xl:px-32 h-fit flex flex-col gap-8 items-center'>
                    <h1 className="text-2xl">{data.name}</h1>
                    <h2 className="text-xl font-bold">Tech Used: {data.tech}</h2>
                    {data.photos.map((item,y) => 
                    (
                        <Image alt={item.alt} src={item.src} width={800} height={100} key={y}/>
                    ))}
                </div>
                <Footer />
            </main>
        )        
    } else {
        notFound();
    }
}