import { SectionHeading } from "@/components/shared/section-heading";
import { principles } from "@/data/structure";
import type { Dictionary } from "@/data/ui";
import { reveal } from "@/lib/reveal";
type PrinciplesCopy = {
    eyebrow: string;
    title: string;
    description?: string;
    items: Record<string, {
        title: string;
        description: string;
    }>;
};
export function Principles({ copy }: {
    copy: PrinciplesCopy;
}) {
    return (<section className="border-t bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description}/>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:col-span-7">
          {principles.map(({ id, icon: Icon }, index) => (<li key={id} {...reveal(index * 100)} className="group bg-background p-8 transition-colors hover:bg-secondary/60">
              <Icon className="mb-10 size-6 text-brand transition-transform duration-300 group-hover:scale-110"/>
              <h3 className="font-display text-xl font-semibold tracking-tight">{copy.items[id]?.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{copy.items[id]?.description}</p>
            </li>))}
        </ul>
      </div>
    </section>);
}
