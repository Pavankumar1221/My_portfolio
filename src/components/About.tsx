import { Calendar, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-2 border-transparent hover-border-effect p-6 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            
            <p className="text-lg text-muted-foreground">
              I'm Pavan Kumar, a passionate web developer dedicated to creating beautiful, functional, and user-friendly websites and applications. With a strong foundation in both frontend and backend technologies, I enjoy bringing creative ideas to life.
            </p>
            
            <p className="text-lg text-muted-foreground">
              My journey in web development started several years ago, and since then I've been continuously learning and growing. I believe in clean code, attention to detail, and building solutions that not only look great but also perform exceptionally well.
            </p>
            
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you might find me exploring new technologies, contributing to open source projects, or enjoying outdoor activities.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover-color-effect"
              >
                Get In Touch
              </a>
              <a
  href="/General_CV_Final.pdf"
  download
  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent text-foreground font-medium transition-all border border-border hover-color-effect"
>
  Download CV
</a>

            </div>
          </div>
          
          <div className="space-y-8">
            <div className="border-2 border-transparent hover-border-effect rounded-lg p-6 transition-all">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-border pl-4 py-2 hover-color-effect rounded-l">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2023 - 2026</span>
                  </div>
                  <h4 className="font-medium">Bachelor of Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Lovely Professional University</p>
                </div>
                
                <div className="border-l-2 border-border pl-4 py-2 hover-color-effect rounded-l">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2020 - 2023</span>
                  </div>
                  <h4 className="font-medium">Diploma in Mechanical Engineering</h4>
                  <p className="text-sm text-muted-foreground">GPT Srikakulam</p>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-transparent hover-border-effect rounded-lg p-6 transition-all">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Experience</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-border pl-4 py-2 hover-color-effect rounded-l">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2024 - Present</span>
                  </div>
                  <h4 className="font-medium">Frontend Developer</h4>
                  <p className="text-sm text-muted-foreground">Freelancer</p>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
