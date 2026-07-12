import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";

// Animation component for counting up numbers
const CountUp = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export function AboutSection() {
  // Calculate stats from data
  const yearsExperience = new Date().getFullYear() - 2021; // Since internship
  const enterpriseClients = 4; // Based on BSI, Tokio Marine, FIF, BCA
  const projectsDelivered = projectsData.length;

  const stats = [
    { label: "Years Experience", value: yearsExperience, suffix: "+" },
    { label: "Enterprise Clients", value: enterpriseClients, suffix: "+" },
    { label: "Projects Delivered", value: projectsDelivered, suffix: "" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Bridging business needs with scalable technical solutions.
            </h3>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
            <p>
              {personalInfo.summary}
            </p>
            <p className="mt-4 text-muted-foreground">
              My approach focuses on creating robust layered architectures, ensuring secure data handling, 
              and optimizing workflows for mission-critical applications where failure is not an option. 
              Currently, I am expanding my expertise with Agentic AI to further automate enterprise development workflows.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-start shadow-sm"
              >
                <div className="text-4xl font-bold text-foreground mb-2 flex items-center">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
