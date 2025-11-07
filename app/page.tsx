
import Title from "./components/Title"
import ImageWrapper from "./components/ImageWrapper";
import { getProjects } from "@/sanity/queries/sanityQueriy";


interface randomProjectProps {
    
    title: string;
  backgroundColour: { hex: string };
  textColour: { hex: string };
    imageUrl: string;
}


export default async function Home() {

  const projects = await getProjects();
  const randomProject:randomProjectProps = projects[Math.floor(Math.random() * projects.length)];

  
  return (
    <div 
    style={
  randomProject.backgroundColour?.hex
    ? { backgroundColor: randomProject.backgroundColour.hex }
    : {}
}
    className="flex w-screen h-screen   font-sans dark:bg-black">
        <div className="w-full h-full absolute pointer-events-none z-0 ">
          <ImageWrapper image={randomProject}/>
        </div>

      <div className="p-5 md:p-5 lg:p-10 z-10">
          <Title textCol={randomProject}/>
       </div>

    
    </div>
  );
}
