import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium text-secondary-foreground mb-4 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {personalInfo.name}
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Enterprise <span className="text-foreground">Software Engineer</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Specializing in OutSystems, React, and robust API integrations. 
                I build mission-critical enterprise systems for banking and insurance sectors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 h-12 px-8 group" onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline" className="gap-2 h-12 px-8" onClick={() => window.open(personalInfo.resumePath, '_blank')}>
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://www.linkedin.com/in/syahdan-triantoro/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary/5 rounded-full border border-border/50">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/syahdan41" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary/5 rounded-full border border-border/50">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary/5 rounded-full border border-border/50">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Abstract Tech Visual since we don't have a real photo */}
            <div className="aspect-[4/5] rounded-2xl bg-card border border-border shadow-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 z-0" />
              
              {/* Code window decorative element */}
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm flex flex-col z-10 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="h-10 border-b border-border/50 flex items-center px-4 gap-2 bg-secondary/5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <div className="ml-auto text-xs text-muted-foreground font-mono flex items-center gap-1">
                    <Terminal className="h-3 w-3" /> main.ts
                  </div>
                </div>
                <div className="p-6 font-mono text-sm leading-loose overflow-hidden">
                  <span className="text-accent">import</span> {'{'} <span className="text-foreground">Engineer</span> {'}'} <span className="text-accent">from</span> <span className="text-success">'@/core'</span>;<br/><br/>
                  <span className="text-accent">const</span> <span className="text-foreground">syahdan</span> = <span className="text-accent">new</span> <span className="text-foreground">Engineer</span>({'{'}<br/>
                  &nbsp;&nbsp;<span className="text-muted-foreground">role</span>: <span className="text-success">'Principal Developer'</span>,<br/>
                  &nbsp;&nbsp;<span className="text-muted-foreground">stack</span>: [<span className="text-success">'OutSystems'</span>, <span className="text-success">'React'</span>, <span className="text-success">'Node'</span>],<br/>
                  &nbsp;&nbsp;<span className="text-muted-foreground">focus</span>: <span className="text-success">'Enterprise Systems'</span>,<br/>
                  &nbsp;&nbsp;<span className="text-muted-foreground">status</span>: <span className="text-success">'Ready to build'</span><br/>
                  {'}'});<br/><br/>
                  <span className="text-foreground">syahdan</span>.<span className="text-accent">deploy</span>();<span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border shadow-lg rounded-xl p-4 flex items-center gap-4 z-20"
            >
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                3+
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-sm">Years Experience</span>
                <span className="text-xs text-muted-foreground">Enterprise scale</span>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-border overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
