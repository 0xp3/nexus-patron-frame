import { User, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isCreatorMode, setIsCreatorMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">CreatorChain</span>
        </div>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl transition-all hover:bg-muted"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl transition-all hover:bg-muted"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </Button>

          <Button
            variant={isCreatorMode ? "default" : "outline"}
            onClick={() => setIsCreatorMode(!isCreatorMode)}
            className="rounded-2xl font-semibold transition-all"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Creator Mode</span>
            <span className="sm:hidden">Creator</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
