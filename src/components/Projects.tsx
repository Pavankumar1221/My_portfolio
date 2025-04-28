
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A dynamic e-commerce website built with React and Tailwind CSS, integrating MongoDB for secure authentication, real-time data handling, and an admin dashboard for managing inventory.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-primary to-secondary",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Invoice Generator",
      description: " A type-safe, React-based application built with TypeScript, featuring dynamic input fields, automated calculations, PDF generation, and Docker for consistent deployment across environments. ",
      tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
      image: "bg-gradient-to-br from-primary to-accent",
      liveUrl: "https://pavankumar1221.github.io/Invoice-Gen/",
      githubUrl: "#",
    },
    {
      title: "Notes App",
      description: "A full-stack web application allowing users to create, edit, and delete notes, with user authentication and MongoDB integration for securely storing user data and personal notes efficiently online.",
      tags: ["Next.js", "GraphQL", "Contentful", "i18n"],
      image: "bg-gradient-to-br from-secondary to-accent",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 border-2 border-transparent hover-border-effect p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Here are some of my recent projects showcasing my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border-2 border-transparent hover-border-effect rounded-lg overflow-hidden transition-all"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-4xl">🚀</span>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
