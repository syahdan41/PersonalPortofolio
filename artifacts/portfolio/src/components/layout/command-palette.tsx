import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { navigationData } from "@/data/navigation";
import { FileText, Github, Linkedin, Mail, Search } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          {navigationData.map((nav) => (
            <CommandItem
              key={nav.name}
              value={`Go to ${nav.name}`}
              onSelect={() => runCommand(() => scrollToSection(nav.href))}
              className="cursor-pointer"
            >
              <Search className="mr-2 h-4 w-4" />
              <span>{nav.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        
        <CommandGroup heading="Links & Contact">
          <CommandItem
            value="Download Resume CV"
            onSelect={() => runCommand(() => window.open(personalInfo.resumePath, '_blank'))}
            className="cursor-pointer"
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
          <CommandItem
            value="LinkedIn Profile"
            onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/syahdan-triantoro/', '_blank'))}
            className="cursor-pointer"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </CommandItem>
          <CommandItem
            value="GitHub Profile"
            onSelect={() => runCommand(() => window.open('https://github.com/syahdan41', '_blank'))}
            className="cursor-pointer"
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem
            value="Send Email"
            onSelect={() => runCommand(() => window.location.href = `mailto:${personalInfo.email}`)}
            className="cursor-pointer"
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>Email Me</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
