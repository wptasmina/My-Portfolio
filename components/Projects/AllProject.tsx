import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';


export default function AllProject() {
  return (
    <>
    <section className='section-continar py-20'>
      <div className='wrapper'>
        <h2 className='text-3xl text-center font-bold mb-8'>All Project</h2>

         {/* More content here */}
          <div className="d-grid gap-6 shadow-2xl">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        
      </div>
    </section>
      
    </>
  )
}
