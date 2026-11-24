"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
interface TocProps {
    title: string;
    items: {
        id: string;
        title: string;
    }[];
}
export function Toc({ title, items }: TocProps) {
    const [active, setActive] = React.useState(items[0]?.id ?? "");
    const [open, setOpen] = React.useState(false);
    const idsKey = items.map((item) => item.id).join("|");
    React.useEffect(() => {
        const elements = idsKey
            .split("|")
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);
        if (elements.length === 0)
            return;
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            if (visible[0])
                setActive(visible[0].target.id);
        }, { rootMargin: "-96px 0px -60% 0px" });
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [idsKey]);
    const list = (<ul className="border-l">
      {items.map((item) => (<li key={item.id}>
          <a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => {
                setActive(item.id);
                setOpen(false);
            }} className={cn("-ml-px block border-l-2 px-4 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", active === item.id
                ? "border-brand font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground")}>
            {item.title}
          </a>
        </li>))}
    </ul>);
    return (<div data-print-hide>
      <div className="rounded-2xl border lg:hidden">
        <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {title}
          <ChevronDown className={cn("size-4 transition-transform duration-200", open && "rotate-180")}/>
        </button>
        {open ? <div className="px-5 pb-4">{list}</div> : null}
      </div>

      <nav aria-label={title} className="hidden lg:block">
        <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <p className="mb-3 text-sm font-semibold">{title}</p>
          {list}
        </div>
      </nav>
    </div>);
}
