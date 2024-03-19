import Page from "./page";
import data from "../../../../dataProjects";

export function generateMetadata({ params }) {
  const pageData = data.find(item => item.id === params.slug);
  return {
    title: 'Ario Waskita | Frontend Development Working Projects',
    description: `Ario Waskita - ${pageData.name}`,
    keywords: ['Ario Waskita', 'Front End Developer', 'Front End Engineer', 'Software Engineer', 'Next.js', 'React', 'JavaScript'],
    metadataBase: new URL(`https://ariowaskita.vercel.app`),
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
    openGraph: {
      title: 'Ario Waskita | Frontend Development Working Projects',
      description: `Ario Waskita - ${pageData.name}`,
    },
  }
}

export default Page