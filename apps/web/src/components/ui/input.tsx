import { cn } from "@/lib/cn";

type InputProps = React.ComponentProps<"input">;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
        className,
      )}
      {...props}
    />
  );
}
