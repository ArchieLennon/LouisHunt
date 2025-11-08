import Link from "next/link";

interface TextColProps {
  title: string;
  backgroundColour: { hex: string };
  textColour: { hex: string };
  imageUrl: string;
}

export default function Title({ textCol }: { textCol: TextColProps }) {
  return (
    <div className="text-1xl md:text-2xl  font-halogen text-black">
      <h1>Louis Hunt Type & Graphic Design Services</h1>

      <div
        className="flex flex-row space-x-1.5"
        style={{ "--hover-color": textCol.textColour?.hex } as React.CSSProperties }
      >
        <h1>Contact</h1>
        <Link
        href={"mailto:Louisdhunt@gmail.com"}
        className="hover:text-(--hover-color) transition-colors duration-300 cursor-pointer">
          Email
        </Link>
        <Link
        href={"https://www.instagram.com/louishunt1/"}
        className="hover:text-(--hover-color) transition-colors duration-300 cursor-pointer">
          Instagram
        </Link>
      </div>
    </div>
  );
}


