interface IBadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: IBadgeProps) {
  return (
    <span className="rounded border bg-muted-foreground/20 px-2 py-0.5 text-sm font-medium text-muted-foreground">
      {children}
    </span>
  );
}
