
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Project } from "@/types";
import { Button } from "../ui/button";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { BorderBeam } from "../magicui/border-beam";

export function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
}: Project) {
  return (
    <Card className="relative w-full mx-auto overflow-hidden flex flex-col">
      <CardHeader>
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="pb-4 rounded-t-lg bottom-top-0 object-cover w-full"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Button key={index} variant="outline" className="text-xs">
            {tech}
          </Button>
        ))}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 mt-auto">
        <div className="flex items-center gap-4">
          <Link href={githubLink} target="_blank">
            <button
              className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-black text-[#e6e6e6] font-semibold border transition duration-300 shadow-[0.05rem_0.05rem_0.1rem_#ccc,-0.05rem_-0.05rem_0.1rem_#fff] 
              border-[rgba(0,0,0,0.2)]  
             hover:shadow-[inset_0.05rem_0.05rem_0.1rem_#ccc,inset_-0.05rem_-0.05rem_0.1rem_#fff] "
            >
              <FaGithub className="w-5 h-5" />
            </button>
          </Link>

          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <button
              className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-black text-[#e6e6e6] font-semibold border transition duration-300 shadow-[0.05rem_0.05rem_0.1rem_#ccc,-0.05rem_-0.05rem_0.1rem_#fff] 
              border-[rgba(0,0,0,0.2)]  
             hover:shadow-[inset_0.05rem_0.05rem_0.1rem_#ccc,inset_-0.05rem_-0.05rem_0.1rem_#fff] "
            >
              <FaGlobe className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </CardFooter>

      <BorderBeam duration={8} size={100} />
    </Card>
  );
}
