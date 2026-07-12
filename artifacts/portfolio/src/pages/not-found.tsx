import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center bg-destructive/10 rounded-full text-destructive mb-8">
          <AlertCircle className="w-12 h-12" />
          <div className="absolute inset-0 border border-destructive/20 rounded-full animate-ping" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-6xl font-bold tracking-tighter text-foreground">404</h1>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Page not found</h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
          <Button variant="default" asChild className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" /> Return Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
