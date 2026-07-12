import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Arsenal
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border/50">
                {category.category}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <li 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/5 border border-border/50 text-secondary-foreground text-sm font-medium rounded-md hover:bg-secondary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
