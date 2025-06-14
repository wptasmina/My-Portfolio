import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";



export default function AllProject() {
  return (
    <>
    <section className='relative overflow-hidden py-20'>
      <div className='wrapper'>
        <h2 className='text-3xl text-center font-bold mb-8'>All Project</h2>

         {/* More content here */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        
      </div>
    </section>
      
    </>
  )
}
