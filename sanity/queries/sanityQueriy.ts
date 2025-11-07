import { client } from "../../app/lib/sanity";


 export async function getProjects(){
  const query = `*[_type == "imageUpload"]{
  title,
    backgroundColour,
    textColour,
     "imageUrl": image.asset->url
}`
   //now this part fetches it

   const data = await client.fetch(query);
   return data;
}


export const revalidate = 60;
