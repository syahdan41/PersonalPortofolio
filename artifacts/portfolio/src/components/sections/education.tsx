import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Academic</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h3>
        </motion.div>

        <div className="flex justify-center">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl bg-background border border-border rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center text-center md:text-left shadow-sm"
            >
              <div className="bg-secondary/10 p-5 rounded-full text-foreground border border-border/50">
                <GraduationCap className="h-10 w-10 text-accent" />
              </div>
              <div className="flex-grow">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-xs font-medium text-muted-foreground rounded-full mb-3">
                  {edu.duration}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
                <div className="text-lg font-medium text-secondary-foreground">{edu.university}</div>
                {edu.location && <div className="text-sm text-muted-foreground mt-1">{edu.location}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
