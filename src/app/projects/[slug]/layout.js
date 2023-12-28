import Page from "./page";
import data from "../../../../dataProjects";

export function generateMetadata({ params }) {
  const pageData = data.find(item => item.id === params.slug);
  return {
    title: 'Ario Waskita | Frontend Developer',
    description: `Ario Waskita - ${pageData.name}`,
  }
}

export default Page