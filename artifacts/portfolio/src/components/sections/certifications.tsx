import { motion } from "framer-motion";
import { certificationsData, additionalExperienceData } from "@/data/certifications";
import { Award, BookOpen } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Qualifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Certifications & Training
          </h3>
        </motion.div>

        <div className="space-y-8">
          {/* Main Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 flex gap-4 items-start shadow-sm"
              >
                <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0 mt-1">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {cert.year} • {cert.issuer}
                  </div>
                  <h4 className="font-bold text-foreground leading-tight">
                    {cert.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Training/Modules */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-border/50"
          >
            <h4 className="font-semibold text-lg mb-4 text-foreground">Additional Training & Modules</h4>
            <div className="space-y-3">
              {additionalExperienceData.map(item => (
                <div key={item.id} className="flex gap-3 items-start p-3 hover:bg-secondary/5 rounded-lg transition-colors">
                  <BookOpen className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.issuer} ({item.year})</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
