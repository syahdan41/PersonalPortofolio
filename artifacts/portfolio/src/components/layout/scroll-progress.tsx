import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ScrollProgress() {
  const progress = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(progress > 10);
  }, [progress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      <Button
        variant="secondary"
        size="icon"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-40 rounded-full shadow-lg transition-all duration-300 transform border border-border/50",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  );
}
