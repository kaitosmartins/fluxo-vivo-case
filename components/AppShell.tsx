import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

export function AppShell({
  children,
  hideBottomNav = false
}: {
  children: ReactNode;
  hideBottomNav?: boolean;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-0 sm:px-6 sm:py-8">
      <div className="relative mx-auto flex h-[100dvh] w-full max-w-md flex-col overflow-hidden bg-brand-background shadow-none sm:h-[calc(100dvh-4rem)] sm:rounded-[2rem] sm:border sm:border-white/70 sm:shadow-soft">
        <main
          className={`min-h-0 flex-1 overflow-y-auto px-5 pt-5 ${
            hideBottomNav ? "pb-8" : "pb-32"
          }`}
        >
          {children}
        </main>
        {hideBottomNav ? null : <BottomNav />}
      </div>
    </div>
  );
}
