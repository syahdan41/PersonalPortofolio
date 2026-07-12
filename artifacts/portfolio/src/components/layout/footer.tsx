import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-primary">
            ST<span className="text-accent">.</span>
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        
        <div className="text-sm text-muted-foreground">
          Built with <span className="text-foreground font-medium">React</span> & <span className="text-foreground font-medium">Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
