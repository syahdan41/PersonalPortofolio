import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";
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
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
