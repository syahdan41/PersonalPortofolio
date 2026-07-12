import { useState } from "react";
import { motion } from "framer-motion";
import { certificationsData, additionalExperienceData } from "@/data/certifications";
import { CertificationData } from "@/types";
import { Award, BookOpen, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationData | null>(null);

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
              <motion.button
                key={cert.id}
                type="button"
                onClick={() => setSelectedCert(cert)}
                aria-haspopup="dialog"
                aria-label={`View certificate: ${cert.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="group text-left bg-card border border-border rounded-xl p-5 flex gap-4 items-start shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
              >
                <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0 mt-1 transition-colors group-hover:bg-accent/20">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {cert.year} • {cert.issuer}
                  </div>
                  <h4 className="font-bold text-foreground leading-tight">
                    {cert.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <ZoomIn className="h-3.5 w-3.5" />
                    View certificate
                  </div>
                </div>
              </motion.button>
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

      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden gap-0">
          {selectedCert && (
            <>
              <DialogHeader className="p-6 pb-4 text-left">
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  {selectedCert.year} • {selectedCert.issuer}
                </div>
                <DialogTitle className="text-xl font-bold text-foreground leading-snug pr-6">
                  {selectedCert.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Certificate image for {selectedCert.title}
                </DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6">
                <div className="rounded-lg overflow-hidden border border-border bg-secondary/5">
                  <img
                    src={selectedCert.image}
                    alt={`Certificate: ${selectedCert.title}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
