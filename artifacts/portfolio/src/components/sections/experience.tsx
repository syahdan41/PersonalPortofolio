import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Career</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h3>
        </motion.div>

        <div className="relative border-l border-border/60 ml-4 md:ml-6 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-accent rounded-full left-[6.5px] top-2 ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2 md:gap-0">
                <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-secondary/10 px-3 py-1 rounded-full border border-border/50">{exp.duration}</span>
              </div>

              <div className="text-lg font-medium text-secondary-foreground mb-4">
                {exp.company} <span className="text-muted-foreground text-sm font-normal">— {exp.location}</span>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => {
                    // Extract client name if present (e.g. "Bank Syariah Indonesia (BSI): ...")
                    const match = resp.match(/^([^:]+):(.*)$/);
                    if (match) {
                      return (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3">
                          <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 block bg-accent" />
                          <span>
                            <strong className="text-foreground">{match[1]}:</strong>
                            {match[2]}
                          </span>
                        </li>
                      );
                    }

                    return (
                      <li key={i} className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 block bg-accent" />
                        <span>{resp}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground border-transparent">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
