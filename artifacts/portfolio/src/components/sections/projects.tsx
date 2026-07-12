import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  
  // Extract unique categories (using a simplified approach based on tech stack)
  const categories = ["All", "Enterprise", "Mobile", "React"];
  
  const filteredProjects = projectsData.filter(project => {
    if (filter === "All") return true;
    if (filter === "Enterprise" && project.technologies.some(t => t.includes("OutSystems") || t.includes("SQL"))) return true;
    if (filter === "Mobile" && project.technologies.some(t => t.includes("Mobile") || t.includes("React Native") || t.includes("PWA") || t.includes("Cordova"))) return true;
    if (filter === "React" && project.technologies.some(t => t.includes("React") && !t.includes("React Native"))) return true;
    return false;
  });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                  filter === cat 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground/30"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col bg-card overflow-hidden group hover:border-accent/50 transition-colors duration-300">
                  <CardHeader className="p-0 border-b border-border/50 relative overflow-hidden bg-secondary/5 aspect-video flex items-center justify-center">
                    {/* Placeholder image generator based on title */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 z-0" />
                    
                    {/* Decorative pattern based on project type */}
                    <div className="z-10 w-24 h-24 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <span className="text-3xl font-bold text-accent">
                        {project.title.substring(0, 2)}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <Badge variant="default" className="bg-foreground text-background shadow-lg border-none flex items-center gap-1">
                          <Sparkles className="h-3 w-3" /> Featured
                        </Badge>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-xl text-foreground line-clamp-1 group-hover:text-accent transition-colors" title={project.title}>
                          {project.title}
                        </h4>
                        <span className="text-sm font-medium text-muted-foreground">
                          {project.role} {project.year && `• ${project.year}`}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded bg-secondary/5 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 flex gap-3 border-t border-transparent group-hover:border-border/50 transition-colors">
                    {project.githubUrl ? (
                      <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full gap-2 opacity-50 cursor-not-allowed" disabled>
                        <Github className="w-4 h-4" /> Private Repo
                      </Button>
                    )}
                    
                    {project.demoUrl && (
                      <Button variant="default" size="sm" className="w-full gap-2" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
