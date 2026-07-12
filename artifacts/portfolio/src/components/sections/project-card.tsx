import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Sparkles,
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const insightRows = (project: ProjectData) =>
  [
    project.challenge && {
      key: "challenge",
      label: "Challenge",
      text: project.challenge,
      icon: AlertTriangle,
      colorClass: "bg-destructive/10 text-destructive",
    },
    project.solution && {
      key: "solution",
      label: "Solution",
      text: project.solution,
      icon: Lightbulb,
      colorClass: "bg-accent/10 text-accent",
    },
    project.impact && {
      key: "impact",
      label: "Impact",
      text: project.impact,
      icon: TrendingUp,
      colorClass: "bg-success/10 text-success",
    },
  ].filter(Boolean) as {
    key: string;
    label: string;
    text: string;
    icon: typeof AlertTriangle;
    colorClass: string;
  }[];

export function ProjectCard({ project }: { project: ProjectData }) {
  const [expanded, setExpanded] = useState(false);
  const rows = insightRows(project);
  const hasInsights = rows.length > 0;

  return (
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

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
          {project.description}
        </p>

        {hasInsights && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent hover:text-accent/80 transition-colors mb-2 self-start"
            aria-expanded={expanded}
          >
            {expanded ? "Hide" : "See"} Challenge, Solution & Impact
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>
        )}

        <AnimatePresence initial={false}>
          {expanded && hasInsights && (
            <motion.div
              key="insights"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-1 pb-1">
                {rows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.key} className="flex gap-3">
                      <div
                        className={cn(
                          "mt-0.5 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0",
                          row.colorClass
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-0.5">
                          {row.label}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {row.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
          {project.technologies.slice(0, 3).map((tech) => (
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
  );
}
