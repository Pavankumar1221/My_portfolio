
import { CheckCircle } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React" , "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs",]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Responsive Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 border-2 border-transparent hover-border-effect p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I specialize in these technologies and continuously expand my skillset.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="border-2 border-transparent hover-border-effect rounded-lg p-6 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-primary transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
