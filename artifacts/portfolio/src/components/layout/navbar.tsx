import { useEffect, useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { navigationData } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionIds = navigationData.map((item) => item.href.substring(1));
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full border-b border-transparent transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span 
            className="text-xl font-bold tracking-tighter cursor-pointer text-primary"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            ST<span className="text-accent">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationData.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <ThemeToggle />
            <div className="hidden lg:flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border">
              <kbd className="font-sans font-semibold">⌘</kbd>
              <span>K</span>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 gap-6 text-lg">
          {navigationData.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "font-medium py-2 border-b border-border/50",
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
            <span>Press ⌘K to open command palette on desktop</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
