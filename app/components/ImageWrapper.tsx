import Image from "next/image"

interface ImageWrapperProps {
    
    title: string;
  backgroundColour: { hex: string };
  textColour: { hex: string };
    imageUrl: string;
}


export default function ImageWrapper({image}: {image: ImageWrapperProps}){


console.log(image);

    return(
        <div className="p-5 w-full h-full flex items-center justify-center  ">
            <div className=" w-[400px] h-[220px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[420px]  bg-amber-400">
                <Image src={image.imageUrl} alt="image" width={800} height={420} className=" object-cover w-full h-full  "/>
            </div>


        </div>




    )
}