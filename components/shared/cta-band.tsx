import { reveal } from "@gaine/core";
interface CtaBandProps {
    title: string;
    description: string;
    children: React.ReactNode;
}
export function CtaBand({ title, description, children }: CtaBandProps) {
    return (<div {...reveal()} data-print-hide className="flex flex-col gap-6 rounded-3xl border bg-secondary/40 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>);
}
